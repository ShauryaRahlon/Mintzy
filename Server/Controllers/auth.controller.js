const dotenv = require('dotenv');
const User = require('../models/user.model');
// const { model } = require('mongoose');
const nodemailer = require('nodemailer');
dotenv.config();

const register = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    try {
        const existingUser = await User.find({ email });
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create a new user
        const newUser = new User({ email });
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODE_MAIL,
                pass: process.env.NODE_PASS
            }
        })
        try {
            await transporter.sendMail({
                from: process.env.NODE_MAIL,
                to: process.env.RECIEVER_MAIL,
                subject: 'New Waitlist Registration',
                text: `Hello, New user's email is ${email}.`
            });
            console.log('Welcome email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send welcome email' });
        }
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = {
    register
};