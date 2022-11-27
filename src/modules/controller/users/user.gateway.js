const { query } = require('../../../utils/MySQL');

const findAll = async () => {
    try {
        const sql = `SELECT * FROM users`;
        const user = await query(sql);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const findById = async (id) => {
    if (!id) throw Error('Missing fields');
    if (Number.isNaN(id)) throw Error('Wrong type');
    try {
        const sql = `SELECT * FROM users WHERE id=?`;
        const user = await query(sql, [id]);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const save = async (user) => {
    if (!user) throw Error('Missing fields');
    if (user.role != 'admin' && user.role != 'user') throw Error('Wrong type of role');
    if (user.status != 1 && user.status != 0) throw Error('Wrong type status');
    try {
        const { email, password, role, personal_id } = user;
        // make an insert query with the status in 1
        const sql = `INSERT INTO users (email, password, role, status, personal_id) VALUES (?,?,?,?,?)`;
        const newUser = await query(sql, [email, password, role, 1, personal_id]);
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (user, id) => {
    if (!user) throw Error('Missing fields (user)');
    if (!id) throw Error('Missing fields (id)');
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (user.role != 'admin' && user.role != 'user') throw Error('Wrong type of role');
    if (user.status != 1 && user.status != 0) throw Error('Wrong type status');
    try {
        const { email, password, role, status, personal_id } = user;
        const sql = `UPDATE users SET email=?, password=?, role=?, status=?, personal_id=? WHERE id=?`;
        const userUpdated = await query(sql, [email, password, role, status, personal_id, id]);
        return userUpdated;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const remove = async (id) => {
    if (!id) throw Error('Missing fields');
    if (Number.isNaN(id)) throw ("Wrong Type");
    try {
        const sql = `DELETE FROM users WHERE id=?`;
        await query(sql, [id]);
        return { idDeleted: id };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { findAll, findById, save, update, remove }