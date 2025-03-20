const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    date: String,
    password: String,
    gender: String
});

const User = mongoose.model('User', userSchema);

// Endpoint to save user data
app.post('/api/saveDate', async (req, res) => {
    const { name, email, date, password, gender } = req.body;
    const user = new User({ name, email, date, password, gender });
    
    try {
        await user.save();
        res.status(200).send({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error saving data', error });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
