const { parse } = require('dotenv');
const pool = require('../models/hrEmailModel');
const sendMail = require('../utils/mailer');
const fs = require("fs");
const { URL } = require("url");


const CHARACTERS = "ABCDEFGHIJKLMANOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const CODE_LENGTH = 6;

const generateCode = () => {
    let code = '';
    for (let i = 0; i < CODE_LENGTH; i++) {
        code += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
    }
    return code;
};

const signUp = async (email) => {

    console.log(email);

    if (!email) return { status: 'EMPTY_EMAIL' };

    
    const code = generateCode();
    console.log(code);

    // Check email validity (you can implement MX lookup if needed)

    try{

        console.log("Emial form try block: ", email);

        const [existingUser] = await pool.query("SELECT * from user_table WHERE business_email_id = ?", [email]);

        console.log("Existing user details: ", existingUser);

        if(existingUser.length > 0) return { status : "EMAIL_EXISTS" };

        const domainPart = email.split("@")[1];

        console.log("Domain Part: ", domainPart);

        // const parsed = parse(domainPart);

        // console.log("Parsed: ", parsed);

        // const companyDomain = `${parsed.domain}.${parsed.publicSuffix}`;

        // console.log("Compnay Domain: ", companyDomain);

        const [compnayRows] = await pool.query("SELECT * FROM company_profile WHERE company_domain = ?", [domainPart]);

        console.log("Company rows: ", compnayRows);

        if(compnayRows.length > 0){
            const unique_company_id = compnayRows[0].unique_company_id;

            console.log("Compnay id: ", unique_company_id);

            // console.log("Compnay Id: ", companyId);

            await pool.query("INSERT INTO user_table (business_email_id, code, is_verified, company_id, role, co_admin) values(?, ?, ?, ?, ?, ?)",
                [email, code, 0, unique_company_id, null, 0]
            );

            await sendMail(email, "Email verification code", `${code}`);

            return {status : 'COMPANY_EXISTS', message: 'Ask admin to Access', unique_company_id: unique_company_id };
        }
        else{

            console.log("Email from Else  block: ", email);

            await pool.query("INSERT INTO user_table (business_email_id, code, is_verified, role, status, co_admin) values (?, ?, ?, ?, ?, ?)", 
                [email, code, 0, 'ADMIN', 'APPROVED', 0]
            );


            await sendMail(email, 'Email Verification Code', `Your code is: ${code}`);

            return { status : 'NEW_COMPANY', message : "Verify the email and create the company profile"};
            
        }
    }catch (err) {
    console.error("Signup service error:", err);
    return { status: 'ERROR', message: 'Signup failed due to server error.' };
    }

};

const verifyCode = async (email, code) => {
    try {
        const [rows] = await pool.query('SELECT * FROM user_table WHERE business_email_id = ?', [email]);
        console.log(rows)
        if (rows.length === 0) return { status: 'INVALID_EMAIL' };

        const user = rows[0];
        if (user.code === code) {
            await pool.query('UPDATE user_table SET code = NULL, is_Verified = 1 WHERE business_email_id = ?', [email]);
            return { status: 'SUCCESS' };
        } else {
            await pool.query('UPDATE user_table SET code = NULL WHERE business_email_id = ?', [email]);
            return { status: 'INVALID_OTP' };
        }
    } catch (err) {
        console.error(err);
        return { status: 'ERROR' };
    }
};

const setPassword = async (email, password) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM user_table WHERE business_email_id = ?",
      [email]
    );

    if (!rows || rows.length === 0) return { status: "INVALID_EMAIL" };

    const user = rows[0];
    const isVerified = user.is_verified[0] === 1; // check if email is verified
    if (!isVerified) return { status: "NOT_VERIFIED" };

    // Update password
    await pool.query(
      "UPDATE user_table SET password = ? WHERE business_email_id = ?",
      [password, email]
    );
    return { status: "SUCCESS" };
  } catch (err) {
    console.error(err);
    return { status: "ERROR" };
  }
};


const giveDemo = async (fullName, businessEmail, phoneNumber, companyName, companySize, jobTitle) => {
    try{
        const [rows] = await pool.query("Insert into demo_requests (full_name, business_email, phone_number, company_name," +
            " company_size, job_title) values (?, ?, ?, ?, ?, ?)", [fullName, businessEmail, phoneNumber, companyName, companySize, jobTitle]);
        return { status: 'DEMO_SAVED'};
    }catch(err){
        return { status: 'ERROR' };
    }
};

const signin = async (email, password) => {
    console.log("This is from service: ", email, password)
    try{
        const [rows] = await pool.query("Select * from user_table where business_email_id = ? and password = ?", [email, password]);
        
        console.log(rows)

        if (rows.length === 0) {
            return { status: "NO_USER" };
        }

        if(rows.length > 0){
            return { status : "USER_EXISTS" };
        }else{
            return { status : "WRONG_CREDIENTILAS" };
        }
    }catch(error){
        return { status : "SERVER_ERROR" };
    }
}

const resetPassword = async (email, password, confirmPassword) =>{
    console.log("The details from service: ",email, password, confirmPassword)
    if(password !== confirmPassword) {
        return { status : "PASSWORD_MISSMATCH" };
    }
    try{
        const [rows] = await pool.query("select * from user_table where business_email_id = ?", email);

        if(rows.length > 0){
            await pool.query("UPDATE user_table set password = ? where business_email_id = ?", password, email);
            return { status : "PASSWORD_SET" }
        }else{
            return { status : "USER_NOT_EXISTS" }
        }
    }catch(error){
        return { status : "ERROR" }
    }
}

const companyProfile = async (
    companyName,
    companySize,
    companyLogo,
    companyAddress,
    website,
    linkedin,
    telephoneNumber
    ) => {
    try {
        const id = Math.floor(Math.random() * 10000).toString();
        const unique_company_id = companyName.slice(0, 3) + id;

        const url = new URL(website);
        const company_domain = url.hostname.replace(/^www\./, "");

        // ✅ multer gives buffer directly
        const imageBuffer = companyLogo ? companyLogo.buffer : null;

        const [companyResult] = await pool.query(
        `INSERT INTO company_profile 
            (unique_company_id, company_name, company_size, company_logo, company_telephone_number, company_website, company_linkedin, admin, company_domain, company_address)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            unique_company_id,
            companyName,
            companySize,
            imageBuffer,
            telephoneNumber,
            website,
            linkedin,
            1,
            company_domain,
            companyAddress
        ]
        );

        // const companyId = companyResult.unique_company_id;
        // console.log(companyId)
        await pool.query("UPDATE user_table set company_id = ? where role = 'ADMIN'", [unique_company_id]);

        return { status: "DETAILS_SAVED" };
    } catch (err) {
        console.error("DB Error:", err);
        return { status: "DETAILS_NOT_SAVED" };
    }
};

const getCompnayProfileById = async (id) => {
    console.log("Id from Service is: ", id);
    try{
        const [rows] = await pool.query("SELECT * FROM company_profile WHERE unique_company_id = ?", [id]);
        if(rows.length == null){
            return [];
        }
        console.log("this is form service:", rows);
        return rows;
    }catch (error) {
    console.error("Error fetching company:", error);
    throw error;
  }
};

const findAdminByCompanyId = async (id) => {
    console.log("Admin id from service to find the email: ", id);

    try{
        const [rows] = await pool.query("SELECT business_email_id FROM user_table where role = 'ADMIN' and company_id = ?", [id]);

        return rows.length > 0 ? rows[0] : null;
    }catch(error){
        throw error;
    }
};

const sendMessage = async (id, message) => {
    console.log("This is from the send message service: ", id, message);

    try{
        const [rows] = await pool.query("UPDATE user_table set  request_message = ? where business_email_id = ?", [message, id]);

        await sendMail(id, "Requesting for access", message);
    }catch(error){
        throw error;
    }
}



module.exports = { signUp, verifyCode, setPassword, giveDemo, signin, resetPassword, companyProfile, getCompnayProfileById, findAdminByCompanyId, sendMessage };
