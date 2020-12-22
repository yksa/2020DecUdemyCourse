const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have name.'],
    trim: true,
    maxlength: [40, 'A name must have less or equal than 40 characters'],
    minlength: [10, 'A name must have more or equal to 10 characters'],
  },
  email: {
    type: String,
    required: [true, 'A user must have email'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'User must have password.'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'User must have password confirm.'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
