const express = require('express');
const { TaskModel } = require('../model/item');
const { response } = require('../utility/utils');
const { ERROR_MESSAGE } = require('../constant/constant');
const router = express.Router();

// API to get all todo list items.
router.get('/', response(async (req, res) => {
    const todoItems = await TaskModel.find();
    if (!todoItems.length) {
        return res.status(404).send(ERROR_MESSAGE.ITEM_NOT_FOUND);
    }
    res.send(todoItems);
}))

// API to get single todo list item by it's id.
router.get('/:id', response(async (req, res) => {
    if (!req.params.id) {
        return res.status(400).send(ERROR_MESSAGE.INVALID_INPUT);
    }
    const todoItem = await TaskModel.findById(req.params.id);
    if (!todoItem) {
        return res.status(404).send(ERROR_MESSAGE.ITEM_NOT_FOUND);
    }
    res.send(todoItem);
}))

// API to add new item in todo list.
router.post('/', response(async (req, res) => {
    let todoItem = new TaskModel(req.body);
    todoItem = await todoItem.save();
    res.send(todoItem);
}))

// API to update todo list item title and status.
router.put('/:id', response(async (req, res) => {
    const todoItem = await TaskModel.findByIdAndUpdate(req.params.id, req.body);
    if (!todoItem) {
        return res.status(404).send(ERROR_MESSAGE.ITEM_NOT_FOUND);
    }
    res.send(todoItem);
}))

// API to delete todo list item.
router.delete('/:id', response(async (req, res) => {
    const todoItem = await TaskModel.findByIdAndRemove(req.params.id);
    if (!todoItem) {
        return res.status(404).send(ERROR_MESSAGE.ITEM_NOT_FOUND);
    }
    res.send('Successfully Deleted');
}));

module.exports = router;
