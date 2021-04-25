const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res)=> {
	res.json({
		text: "api work!"
	});
});

app.post('/api/login', (req, res)=> {
	const user = {id:3};
	//Generamos el token para este usuario unico
	const token = jwt.sign({user}, 'my_secret_key');
	res.json({ token });
});

app.get('/api/protected', ensureToken, (req, res)=> {
	jwt.verify(req.token, 'my_secret_key', (err, data)=> {
		if(err) {
			res.sendStatus(403);
			console.log(err);
		}else {
			res.json({
				text: 'protected',
				data
			});
		}
	});
	
});

//Creamos nuestro middleware para que la misma se asegure que
//el token fue creado anteriormente
function ensureToken(req, res, next) {
	//Verificamos si en los header existe la autorizacion
	//Si la cabecera no es generada o la aplicacion no la esta
	//enviando, no puedo acceder a la ruta a la cual se le esta
	//enviando la cabecera
	//para que la misma pueda continuar le deberiamos decir next()
	const bearerHeader = req.headers['authorization'];
	console.log(bearerHeader);

	if(typeof bearerHeader != 'undefined') {
		//Aqui debemos de separar el token ya que envia con el 
		//siguiente formato:
		//Bearer 2ssgsfcsvdfsv65c6svsssv
		//y debemos de separar el Bearer del token con el sigte codigo
		
		const bearer = bearerHeader.split(" ");
		//con la linea de arriba separamos el hash de la palabra Bearer
		//y me devuelve un arreglo con la separacion
		
		const bearerToken = bearer[1];
		//guardamos en el objeto de la peticion la variable declarada
		//previamente en una variable llamada token
		req.token = bearerToken;
		console.log(`el token es: ${bearerToken}`);
		next();
	}else {
		//Le enviamos un estado de no permitido, si es que no
		//esta usando el token
		res.sendStatus(403);
	}
}

app.listen(3000, ()=>{
	console.log('Servidor corriendo en el puerto 3000');
});
