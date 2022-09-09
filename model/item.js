const mongoose = require('mongoose');

// All Possible Task Status of TODO List.
const TASK_STATUS = {
  DONE: 'done',
  PENDING: 'pending'
};

// Define Schema of TODO List Item.
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: Object.values(TASK_STATUS),
    default: TASK_STATUS.PENDING
  }
});

const TaskModel = mongoose.model('tasks', schema);

module.exports = {
  TaskModel
};
