const db = require('../../config/database');

const todoSchema = new db.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Todo = db.model('Todo', todoSchema);

module.exports = Todo;