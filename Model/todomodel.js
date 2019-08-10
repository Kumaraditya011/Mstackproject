var mongoose = require('mongoose');
var tod = new mongoose.Schema({
    tox:{type: String},


});

module.exports = mongoose.model("Todolist", tod);
