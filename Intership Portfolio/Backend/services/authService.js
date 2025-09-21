const pool = require('../models/hrEmailModel');
const sendMail = require('../utils/mailer');

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
    if (!email) return { status: 'EMPTY_EMAIL' };

    const code = generateCode();

    // Check email validity (you can implement MX lookup if needed)

    try {
        const [rows] = await pool.query('SELECT * FROM hr_email_entity WHERE hr_email_id = ?', [email]);
        if (rows.length > 0) return { status: 'EMAIL_EXISTS' };

        await pool.query('INSERT INTO hr_email_entity (hr_email_id, code, is_Verified) VALUES (?, ?, ?)', [email, code, 0]);

        await sendMail(email, 'Email Verification Code', `Your verification code is: ${code}`);
        return { status: 'OTP_SENT' };
    } catch (err) {
        console.error(err);
        return { status: 'ERROR' };
    }
};

const verifyCode = async (email, code) => {
    try {
        const [rows] = await pool.query('SELECT * FROM hr_email_entity WHERE hr_email_id = ?', [email]);
        console.log(rows)
        if (rows.length === 0) return { status: 'INVALID_EMAIL' };

        const user = rows[0];
        if (user.code === code) {
            await pool.query('UPDATE hr_email_entity SET code = NULL, is_Verified = 1 WHERE hr_email_id = ?', [email]);
            return { status: 'SUCCESS' };
        } else {
            await pool.query('UPDATE hr_email_entity SET code = NULL WHERE hr_email_id = ?', [email]);
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
      "SELECT * FROM hr_email_entity WHERE hr_email_id = ?",
      [email]
    );

    if (!rows || rows.length === 0) return { status: "INVALID_EMAIL" };

    const user = rows[0];
    const isVerified = user.is_verified[0] === 1; // check if email is verified
    if (!isVerified) return { status: "NOT_VERIFIED" };

    // Update password
    await pool.query(
      "UPDATE hr_email_entity SET password = ? WHERE hr_email_id = ?",
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
        const [rows] = await pool.query("Select * from hr_email_entity where hr_email_id = ? and password = ?", [email, password]);
        
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



module.exports = { signUp, verifyCode, setPassword, giveDemo, signin };
