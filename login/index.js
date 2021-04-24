const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./user');

const mongo_uri = 'mongodb://localhost:27017/todos';

mongoose.connect(mongo_uri, (err)=> {
	if(err){
		throw err;
	} else {
		console.log('Se conecto correctamente a la BD');
	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res)=> {
	const { username, password } = req.body;

	const user = new User({ username, password });

	user.save(err => {
		if(err) {
			res.status(500).send('ERROR AL REGISTRAR AL USUARIO');
		}else {
			res.status(200).send('USUARIO REGISTRADO');
		}
	});
});

app.post('/autenticate', (req, res)=> {
	const { username, password } = req.body;
	
	User.findOne({username}, (err, user)=>{
		if(err) {
			res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
		}else if(!user) {
			res.status(500).send('EL USUARIO NO ESTA REGISTRADO');
		}else {
			user.isCorrectPassword(password, (err, result)=> {
				if(err) {
					res.status(500).send('ERROR AL AUTENTICAR');
					console.log(err);
				}else if(result) {
					res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
				}else {
					res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
				}
			})
		}
	})
});

app.listen(3000, ()=> {
	console.log('Servidor corriendo');
});
