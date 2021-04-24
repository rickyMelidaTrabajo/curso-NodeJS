const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/nacimiento', (req, res)=>{
	console.log(req.body);
});

app.listen(port, ()=>{
	console.log('Servidor corriendo');
});
