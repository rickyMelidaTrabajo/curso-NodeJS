const mongoose = require('mongoose');

const schema = mongoose.Schema;

let userSchema = schema({
	username: String,
	password: String
});

module.exports = mongoose.model('User', userSchema);
