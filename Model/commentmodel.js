var mongoose = require('mongoose');
var ct = new mongoose.Schema({
    nm:{type: String},
    cm:{type: String},



});

module.exports = mongoose.model('Comment', ct);