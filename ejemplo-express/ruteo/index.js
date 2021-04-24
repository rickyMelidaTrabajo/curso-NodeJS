const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
	res.send('Hola a todos');
});

app.get('/home', (req, res)=>{
	res.send('Hola a todos otra vez');
});

app.listen(port, ()=>{
	console.log('Servidor corriendo');
})
