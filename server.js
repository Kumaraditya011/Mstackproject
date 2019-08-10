const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb+srv://aditya:kumar123@cluster0-fltlr.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true});
const app = express();

app.use(cors());

const myapi = require('./Rest/myapi');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', myapi);

app.use(express.static('./dist/mstack'));
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/mstack/index.html'));
})



http.createServer(app).listen(process.env.PORT|| 3000);
console.log("Backend Server Is On=", process.env.PORT|| 3000);