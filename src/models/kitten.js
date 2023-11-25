const mongoose = require('mongoose');

// create shape
const kittySchema = new mongoose.Schema({
    name: String,
});

//save down database
const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
