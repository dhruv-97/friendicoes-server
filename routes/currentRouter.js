var express = require('express');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var currents= require('../models/current');
var Verify=require('./verify');
var currentRouter = express.Router();

currentRouter.use(bodyParser.json());

currentRouter.route('/')
.get(function (req, res, next) {
    currents.findById("59073e448e403333605ac454",function (err, current) {
        if (err) next(err);
        res.json(current);
        });
})
.put(function (req, res, next) {
    currents.findByIdAndUpdate("59073e448e403333605ac454", {
        $set: req.body
    }, function (err, current) {
        if (err) next(err);
        res.json(current);
    });
});

module.exports=currentRouter;