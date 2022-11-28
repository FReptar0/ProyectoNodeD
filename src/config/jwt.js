const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' });
};

const auth = () => {

};

const checkRoles = () => {

};

module.exports = { generateToken, auth, checkRoles };