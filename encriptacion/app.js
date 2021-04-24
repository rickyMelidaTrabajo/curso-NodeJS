const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); 

const User = require('./model');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var BCRYPT_SALT_ROUNDS = 12;
app.post('/register', (req, res)=>{
	//var username = req.body.username;
	//var password = req.body.password;
/*
	bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(()=>{
		let user = new User();
		user.username = username;
		user.password = password;
		user.save((err, success) => {
			if(err) {
				return err;
			}else {
				return success;
			}

		});
	}).catch((error) => {
		console.log('Ha ocurriso un error');

	});*/

	//console.log(`El usuario es ${username} y el password ${password}`);
	console.log(req.body);
});

module.exports = app;
