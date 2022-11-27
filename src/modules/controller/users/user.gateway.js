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
    try {
        const { email, password, role, status, personal_id } = user;
        const sql = `INSERT INTO users (email, password, role, status, personal_id) VALUES (?,?,?,?,?)`;
        const userSaved = await query(sql, [email, password, role, status, personal_id]);
        return userSaved;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const update = async (user, id) => {
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