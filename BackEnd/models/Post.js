const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    integer1: {
        type: Number,
        require: true
    },
    integer2: {
        type: Number,
        require: true
    },
    operation: {
        type: String,
        require: true
    },
    result: {
        type: Number,
        require: true
    },
    date:  {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Post', PostSchema);