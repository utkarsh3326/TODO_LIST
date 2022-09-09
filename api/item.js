const express = require('express');

const { TaskModel } = require('../model/item');
const router = express.Router();

const { ERROR_MESSAGE } = require('../constant/constant');

// API to get all todo list items.
router.get('/', async (req, res) => {
    const todoItems = await TaskModel.find();
    if (!todoItems.length) {
        return res.status(404).send(ERROR_MESSAGE.ITEM_NOT_FOUND);
    }
    res.send(todoItems);
})

// API to get single todo list item by its id.
router.get('/:id', async (req, res) => {
    console.log(' eq.params.id ',req.params.id);
    if (!req.params.id) {
        return res.status(400).send(ERROR_MESSAGE.INVALID_INPUT);
    }
    const todoItem = await TaskModel.findById(req.params.id);
    if (!todoItem) {
        return res.status(404).send(ERROR_MESSAGE.ITEM_NOT_FOUND);
    }
    res.send(todoItem);
})

// API to add new item in tood list.
router.post('/',async(req,res) => {
    console.log(' req.body',req.body);
    let todoItem = new TaskModel(req.body);
    todoItem = await todoItem.save();
    res.send(todoItem);
})

// API to update todo list item title or status.
router.put('/:id',async(req,res)=>{
    console.log(' req body : ',req.body);
    const todoItem = await TaskModel.findByIdAndUpdate(req.params.id, req.body);
    if (!todoItem) {
        return res.status(404).send(ERROR_MESSAGE.ITEM_NOT_FOUND);
    }
    res.send(todoItem);
})

// API to delete todo list item.
router.delete('/:id',async (req, res) => {
    const todoItem = await TaskModel.findByIdAndRemove(req.params.id);
    if (!todoItem) {
        return res.status(404).send(ERROR_MESSAGE.ITEM_NOT_FOUND);
    }
    res.send('Successfully Deleted');
});


module.exports = router;

