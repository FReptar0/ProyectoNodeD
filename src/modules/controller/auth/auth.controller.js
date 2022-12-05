const { Response, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { login } = require('./auth.gateway');

const signIn = async (req, res = Response) => {
    try {
        const { email, password } = req.body;
        const token = await login({ email, password });
        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
}

const authRouter = Router();

authRouter.post('/', signIn);

module.exports = { authRouter };