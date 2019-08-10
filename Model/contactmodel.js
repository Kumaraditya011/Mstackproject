var mongoose = require('mongoose');
var con = new mongoose.Schema({
    FName:{type: String},
    LName:{type: String},
    mobile:{type: String},
    email:{type: String},
    msg:{type: String},



});




module.exports = mongoose.model('Employees', con);
