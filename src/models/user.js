const mongoose = require('mongoose');

// create shape
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});

//save down database
const User = mongoose.model('user', userSchema);

module.exports = User;
