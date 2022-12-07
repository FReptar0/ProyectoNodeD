'strict'
const { query } = require('../../../utils/MySQL');

const findAll = async () => {
    const sql = `SELECT pe.*, po.description
    FROM personal pe JOIN position po ON po.id=pe.position_id`;

    return await query(sql, []);
}

const findById = async (id) => {
    if (!id) throw Error('Missing fields');
    if (Number.isNaN(id)) throw Error('Wrong type');
    const sql = `SELECT pe.*, po.description FROM personal pe JOIN position po ON po.id=pe.position_id WHERE pe.id=?`;
    return await query(sql, [id]);
}

const save = async (personal) => {
    if (!personal) throw Error('Missing fields');
    const { name, lastname, birthday, position_id, salary } = personal;
    
    const sql = `INSERT INTO personal (name, lastname, birthday, position_id, salary) VALUES (?,?,?,?,?)`;
    return await query(sql, [name, lastname, birthday, position_id, salary]);
}

const update = async (personal, id) => {
    if (!personal) throw Error('Missing fields');
    if (!id) throw Error('Missing fields');
    if (Number.isNaN(id)) throw Error('Wrong type');
    const { name, lastname, position_id, salary } = personal;
    const sql = `UPDATE personal SET name=?, lastname=?, position_id=?, salary=? WHERE id=?`;
    return await query(sql, [name, lastname, position_id, salary, id]);
}

const remove = async (id) => {
    if (!id) throw Error('Missing fields');
    if (Number.isNaN(id)) throw ("Wrong Type");
    const sql = `DELETE FROM personal WHERE id=?`;
    await query(sql, [id]);
    return { idDeleted: id }
}

module.exports = {
    findAll,
    findById,
    save,
    update,
    remove
}