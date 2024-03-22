const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const User = require('../models/User');

const isValidEmail = (value) => {
    // Simple email regex for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};

// Custom validation function for password length
const isValidPassword = (value) => {
    return value.length >= 5;
};

// Custom validation middleware

router.use(express.json());
router.post('/createuser', async (req, res, body) => {
    // Custom validation
    if (!isValidEmail(req.body.email)) {
        return res.status(400).json({ errors: [{ msg: 'Invalid email format', param: 'email', location: 'body' }] });
    }
    if (!isValidPassword(req.body.password)) {
        return res.status(400).json({ errors: [{ msg: 'Password must be at least 5 characters long', param: 'password', location: 'body' }] });
    }
    if (req.body.name.length < 3) {
        return res.status(400).json({ errors: [{ msg: 'Name must be at least 3 characters long', param: 'name', location: 'body' }] });
    }
    
    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;