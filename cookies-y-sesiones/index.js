const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const MONGO_URL = 'mongodb://127.0.0.1:27017/auth';
const app = express();

//Agregamos el middleware de session
app.use(session({
	secret: 'Esto es secreto',
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({
		url: MONGO_URL,
		autoReconnect: true
	})
}));

app.get('/', (req, res)=>{
	req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;  
	res.send(`Hola, has visto esta pagina: ${req.session.cuenta }`);	
});

app.listen(3000, ()=> {
	console.log('Escuchando en el puerto 3000');
});

