const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

router.post('/signUp', authController.signUp);
router.post('/verifyCode', authController.verifyCode);
router.post('/setPassword', authController.setPassword);
router.post('/demo', authController.demo);
router.post('/signin', authController.signin);
router.post("/company", upload.single("companyLogo"), authController.companyProfile);
router.get("/company-details/:unique_company_id", authController.getCompnayProfileById);
router.post("/message-admin/:compnayUniqueId", authController.sendMessage);





module.exports = router;
