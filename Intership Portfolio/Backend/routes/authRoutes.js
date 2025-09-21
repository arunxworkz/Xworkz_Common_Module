const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signUp', authController.signUp);
router.post('/verifyCode', authController.verifyCode);
router.post('/setPassword', authController.setPassword);
router.post('/demo', authController.demo);
router.post('/signin', authController.signin);

module.exports = router;
