const mongoose = require('mongoose');
const { Schema } = mongoose;

const habit = new Schema({
    name: String,
    description: String,
    days: [Boolean]
});

module.exports = mongoose.model('habit', habit);