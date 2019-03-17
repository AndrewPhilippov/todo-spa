const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema and model

const todoSchema = new Schema({
    name: {
        type: String,
        required: 'Name can not be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    current_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;