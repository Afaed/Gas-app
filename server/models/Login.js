const { Schema, model } = require('mongoose');

const LoginSchema = new Schema ({
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

const Login = model('Login', LoginSchema);
module.exports = Login;
