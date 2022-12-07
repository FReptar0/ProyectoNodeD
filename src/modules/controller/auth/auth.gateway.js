const { query } = require('../../../utils/MySQL');
const { generateToken } = require('../../../config/jwt');
const { validatePassword } = require('../../../utils/functions');

const login = async (user) => {
    const { email, password } = user;
    console.log(email, password);
    if (!email || !password) throw Error('Invalid credentials');

    const sql = `SELECT * FROM users WHERE email = ? AND status = 1`;
    const existsUser = await query(sql, [email]);
    console.log(existsUser[0]);
    console.log(await validatePassword(password, existsUser[0].password));
    if (await validatePassword(password, existsUser[0].password))
        return generateToken({
            id: existsUser[0].id,
            email: email,
            role: existsUser[0].role,
            isLogged: true,
        });
    throw Error('Invalid credentials');
}

module.exports = { login };