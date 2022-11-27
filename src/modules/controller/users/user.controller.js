const { Response, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { findAll, findById, save, update, remove } = require('./user.gateway');

const getAll = async (req, res = Response) => {
    try {
        const personal = await findAll();
        res.status(200).json(personal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message }); //{ message:""}
    }
}

const getById = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const person = await findById(id);
        res.status(200).json(person)
    } catch (error) {
        console.log(error)
        const message = validateError(error);
        res.status(400).json({ message });
    }
}

const create = async (req, res = Response) => {
    try {
        const { email, password, role, personal_id } = req.body;
        const user = { email, password, role, personal_id };
        const newUser = await save(user);
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
}

const modify = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const { email, password, role, status, personal_id } = req.body;
        const personal = { email, password, role, status, personal_id };
        const newPersonal = await update(personal, id);
        res.status(200).json(newPersonal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
}

const eliminate = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const person = await remove(id);
        res.status(200).json(person);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
}


const userRouter = Router();

userRouter.get('/', getAll);
userRouter.get('/:id', getById);
userRouter.post('/', create);
userRouter.put('/:id', modify);
userRouter.delete('/:id', eliminate);

module.exports = { userRouter };