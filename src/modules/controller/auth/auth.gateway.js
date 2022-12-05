const { query } = require('../../../utils/MySQL');
const { generateToken } = require('../../../config/jwt');
const { hashPassword, validatePassword } = require('../../../utils/functions');

const login = async (user) => {
    const { email, password } = user;
    console.log(email, password);
    if (!email || !password) throw Error('Invalid credentials');

    const sql = `SELECT * FROM users WHERE email = ? AND status = 1`;
    const existsUser = await query(sql, [email]);
    console.log(existsUser[0]);
    console.log(await validatePassword(password, existsUser[0].PASSWORD));
    if (await validatePassword(password, existsUser[0].PASSWORD))
        return generateToken({
            id: existsUser[0].ID,
            email: email,
            role: existsUser[0].ROLE,
            isLogged: true,
        });
    throw Error('Invalid credentials');


}

module.exports = { login };