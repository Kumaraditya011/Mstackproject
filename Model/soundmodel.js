var mongoose = require('mongoose');
var so = new mongoose.Schema({
    title:{type: String},
    field:{type: String},



});

module.exports = mongoose.model('Audio', so);