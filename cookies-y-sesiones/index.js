const express = require('express');
const session = require('express-session');

//const MONGO_URL = 'mongodb://127.0.0.1:27017/auth';
const app = express();

//Agregamos el middleware de session
app.use(session({
		key: 'user',
		secret: 'Esto es secreto',
		resave: true,
		saveUninitialized: true
	})
)

app.get('/', (req, res)=>{
	//Creamos nuestras propias variables de sesiones
	req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;  
	req.session.usuario = 'Ricardo Melida';
	req.session.rol = 'Admin';
	console.log(req.session);	

	res.send(
		` El usuaro <strong> ${req.session.usuario} </strong>
		  con el rol <strong> ${req.session.rol} </strong>
		  ha visitado esta pagina <strong> ${req.session.cuenta} </strong> veces

		`
	);	

});

app.get('/cerrar-sesion', (req, res)=>{
	//Cerramos la session
	req.session.destroy(error=>{
		if(!error) {
			res.send('Sesion cerrada');
		}
	})
});

app.listen(3000, ()=> {
	console.log('Escuchando en el puerto 3000');
});

