// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var displaySchema = new Schema({
    display: {
        type: Number
    }
}, {
    timestamps: true
});
var displays = mongoose.model('display', displaySchema);

// make this available to our Node applications
module.exports = displays;