const express = require('express');
const authRoutes = require('./Routes/auth.routes');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        exposedHeaders: ['Content-Length', 'X-Requested-With'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(process.env.FRONTEND_URL)
});


console.log('Connecting to MongoDB...');
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log('Connected to MongoDB', process.env.MONGO_URI);
    console.log('MongoDB connection successful');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


app.use('/api/v1', authRoutes);