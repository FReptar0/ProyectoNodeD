'strict'
const { Response, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { findAll, findById, save, update, remove } = require('./personal.gateway');

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
        const { name, lastname, position_id, salary } = req.body;
        const personal = { name, lastname, position_id, salary };
        const newPersonal = await save(personal);
        res.status(201).json(newPersonal);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
}

const modify = async (req, res = Response) => {
    try {
        const { id } = req.params;
        const { name, lastname, position_id, salary } = req.body;
        const personal = { name, lastname, position_id, salary };
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
        console.log(error)
        const message = validateError(error);
        res.status(400).json({ message });
    }
}



const personalRouter = Router();
personalRouter.get('/', getAll);
personalRouter.get('/:id', getById);
personalRouter.post('/', create);
personalRouter.put('/:id', modify);
personalRouter.delete('/:id', eliminate);
module.exports = {
    personalRouter
}