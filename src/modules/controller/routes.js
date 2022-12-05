const { personalRouter } = require('./personal/personal.controller');
const { userRouter } = require('./users/user.controller');
const { authRouter } = require('./auth/auth.controller');

module.exports = { personalRouter, userRouter, authRouter };