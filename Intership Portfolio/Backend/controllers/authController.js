const authService = require('../services/authService');

const signUp = async (req, res) => {
    const { email } = req.body;
    const result = await authService.signUp(email);

    switch (result.status) {
        case 'OTP_SENT':
            res.status(200).send('Verification code is sent to your email');
            break;
        case 'EMPTY_EMAIL':
            res.status(400).send('Email cannot be empty');
            break;
        case 'EMAIL_EXISTS':
            res.status(400).send('Email already Exists')
        case 'INVALID_EMAIL':
            res.status(400).send('Please enter a valid business Email ID');
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



module.exports = { signUp, verifyCode, setPassword, demo, signin };
