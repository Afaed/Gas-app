const { Schema, model } = require('mongoose');

const RegisterSchema = new Schema ({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    UserEmail: {
        type: String,
        required: true,
        unique: true
    },
    UserPassword: {
        type: String,
        required: true,
        unique: true
    }
})

const Register = model('Register', RegisterSchema);

module.exports = Register