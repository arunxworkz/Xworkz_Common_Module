const authService = require('../services/authService');

const signUp = async (req, res) => {
    const { email } = req.body;
    console.log(email)
    const result = await authService.signUp(email);

    switch (result.status) {
        case 'EMPTY_EMAIL':
            res.status(400).send('Email cannot be empty');
            break;
        case 'EMAIL_EXISTS':
            res.status(200).send('Email already Exists');
            break;
        case 'COMPANY_EXISTS':
            res.status(200).json({ status: 'COMPANY_EXISTS', message: 'Company exists. Ask admin for access.', unique_company_id: result.unique_company_id });
            break;
        case 'NEW_COMPANY':
            res.status(200).json({ status: 'NEW_COMPANY', message: 'New company signup. Verify email and create company profile.' });
            break;
        case 'ERROR':
            res.status(500).send('SignUp failed. Please try again.');
            break;
        default:
            res.status(500).send('SignUP Failed');
    }
};

const verifyCode = async (req, res) => {
    const { email, code } = req.body;
    const result = await authService.verifyCode(email, code);
    console.log(result.email +"" + result.code)
    switch (result.status) {
        case 'SUCCESS':
            res.status(200).send('Email is verified. Redirecting to Password Setup page');
            break;
        case 'INVALID_OTP':
            res.status(400).send('Invalid code. Please sign up again.');
            break;
        case 'INVALID_EMAIL':
            res.status(400).send('Email not found. Please sign up first.');
            break;
        default:
            res.status(500).send('Verification failed');
    }
};

const setPassword = async (req, res) => {
    const { email, password } = req.body;
    const result = await authService.setPassword(email, password);

    switch (result.status) {
        case 'SUCCESS':
            res.status(200).send('Password set successfully. You can now login.');
            break;
        case 'NOT_VERIFIED':
            res.status(400).send('Email is not verified. Please verify first.');
            break;
        case 'INVALID_EMAIL':
            res.status(400).send('Invalid email. Please sign up first.');
            break;
        default:
            res.status(500).send('Error setting password');
    }
};

const demo = async(req, res) => {
    const { fullName, businessEmail, phoneNumber, companyName, companySize, jobTitle } = req.body;
    const result = await authService.giveDemo(fullName, businessEmail, phoneNumber, companyName, companySize, jobTitle);
    switch(result.status){
        case 'DEMO_SAVED':
            res.status(200).send("Request of Demo is submitted. We will reach you out soon");
            break;
        default:
            res.status(500).send("Demo Request is unsuccessful.");
    }
}

const signin = async(req, res) => {
    const { email, password } = req.body;
    console.log("this is from controller: ", email, password);
    const result = await authService.signin(email, password);
    switch(result.status){
        case 'USER_EXISTS':
            res.status(200).json({message: "Login Successful"});
            break;
        case 'WRONG_CREDIENTILAS':
            res.status(401).json({message: "Check credientilas"});
            break;
        case 'NO_USER':
            res.status(404).json({message: "No user. Please SignUp"});
            break
        default:
            res.status(500).send("Server Error");
    }
}

const resetPassword = async(req, res)=>{
    const { email, password, confirmPassword } = req.body;
    const result = authService.resetPassword(email, password, confirmPassword);
    switch(result){
        case 'PASSWORD_SET':
            res.status(200).json({message : "Password set successfully"});
            break;
        case 'USER_NOT_EXISTS':
            res.status(404).json({message: "USer not found. Please SignUp"});
            break;
        case 'PASSWORD_MISSMATCH':
            res.status(400).json({message: "Password dosen' t match"})
        default:
            res.status(500).send("Server Error");
    }
}

const companyProfile = async (req, res) => {
  try {
    const {
      companyName,
      companySize,
      companyAddress,
      website,
      linkedin,
      telephoneNumber,
    } = req.body;

    const companyLogo = req.file; // multer provides this
    console.log("Body:", req.body);
    console.log("File:", companyLogo);

    const result = await authService.companyProfile(
      companyName,
      companySize,
      companyLogo,
      companyAddress,
      website,
      linkedin,
      telephoneNumber
    );

    if (result.status === "DETAILS_SAVED") {
      return res.status(200).json({ message: "Company profile data saved" });
    } else {
      return res.status(500).json({ message: "Failed to save company profile" });
    }
  } catch (err) {
    console.error("Controller Error:", err);
    return res.status(500).json({ message: "Server error in controller" });
  }
};

const getCompnayProfileById = async (req, res) => {
  const { unique_company_id  } = req.params;
  console.log("Id from controller is:", unique_company_id);

  try {
    const rows = await authService.getCompnayProfileById(unique_company_id);

    console.log("Thsi is from Controller:", rows)


    if (rows.length === 0) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res.status(200).json(rows[0]); // send only the first company
  } catch (error) {
    console.error("Error in controller:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const sendMessage = async(req, res) => {
    try{
        const { compnayUniqueId } = req.params;
        const { message } = req.body;

        console.log("This is from controller adminId and message: ", compnayUniqueId, message);

        const getAdminEmail = await authService.findAdminByCompanyId(compnayUniqueId);

        if(!getAdminEmail){
            return res.status(404).json({message: "No Admin found for this Compnay"});
        }

        const adminEmail = getAdminEmail.business_email_id;
        console.log("Admin email to send message:", adminEmail);

        const sendMail = await authService.sendMessage(adminEmail, message);

        res.status(200).json({success: true, message: "Message sent successfully"})
    }catch(error){
        res.status(500).json({ message: "Server error", error });
    }

}

module.exports = { signUp, verifyCode, setPassword, demo, signin, resetPassword, companyProfile, getCompnayProfileById, sendMessage };
