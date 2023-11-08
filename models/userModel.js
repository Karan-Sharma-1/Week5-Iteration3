const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  age: {
    type: Number,
  },
  // You can add more fields as needed.
});

const User = mongoose.model('User', userSchema);

module.exports = User;