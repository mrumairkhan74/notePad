const connection = require('../connection/connection');

const mongoose = require('mongoose');


const noteSchema = mongoose.Schema({
    title: String,
    content: String,
}, { timeStamps: true });


const noteModel = mongoose.model('note', noteSchema);

module.exports = noteModel;