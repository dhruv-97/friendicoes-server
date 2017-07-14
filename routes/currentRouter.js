var express = require('express');

var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//var currents= require('../models/current');
//var Verify=require('./verify');
var cur={
    current:1
};
var currentRouter = express.Router();

currentRouter.use(bodyParser.json());

currentRouter.route('/')
.get(function (req, res, next) {
    res.send(cur);
})
.put(function (req, res, next) {
    var io = req.app.get('socketio');
    cur.current=req.body.current;
    res.send(cur);
    io.emit('current',cur);
});

module.exports=currentRouter;