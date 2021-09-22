const mongoose = require('mongoose');
const { Schema } = mongoose;

const task = new Schema({
    habit_id: mongoose.ObjectId,
    name: String,
    description: String,
    date: String,
    complete: Boolean
});

module.exports = mongoose.model('task', task);