var express = require('express');

var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//var displays= require('../models/display');
//var Verify=require('./verify');
var dis={
    display:1
};
var displayRouter = express.Router();

displayRouter.use(bodyParser.json());

displayRouter.route('/')
.get(function (req, res, next) {
    res.send(dis);
})
.put(function (req, res, next) {
    var io = req.app.get('socketio');
    dis.display=req.body.display;
    res.send(dis);
    io.emit('display',dis);
});

module.exports=displayRouter;