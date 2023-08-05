// customerModel.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  street: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  email: { type: String },
  phone: { type: String },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
