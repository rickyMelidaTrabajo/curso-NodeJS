const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
	res.send(req.query.nombre);
	console.log(req.query);
});


app.listen(port, ()=>{
	console.log('Corriendo servidor con body-parser');
});
