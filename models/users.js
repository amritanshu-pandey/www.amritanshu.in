"use strict";
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    isAdmin: 'boolean',
    password: 'string'
});
exports.users = mongoose.model('users', userSchema);
