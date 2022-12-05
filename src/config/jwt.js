const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET)
}

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) throw Error('Invalid Token')
        const decodeToken = jwt.verify(token, process.env.SECRET);
        req.token = decodeToken;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Unauthorized' })
    }
}

const checkRoles = (roles) => {
    return async (req, res, next) => {
        try {
            const token = req.token;
            console.log(token);
            if (!token) throw Error('Invalid Token')
            if (!roles.some((role) => role === token.role)) throw Error('Invalid Role')
            next();
        } catch (error) {
            res.status(400).json({ message: 'Unauthorized' })
        }
    }
}

module.exports = {
    generateToken,
    auth,
    checkRoles
}