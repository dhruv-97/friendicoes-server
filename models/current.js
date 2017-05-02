// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var currentSchema = new Schema({
	current:{
		type: Number,
		default: 1
	}
}, {
    timestamps: true
});
var currents = mongoose.model('current', currentSchema);


// make this available to our Node applications
module.exports = currents;