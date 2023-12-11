const mongoose = require('mongoose');

// create shape
const customerSchema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    { timestamps: true }
);

//save down database
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
