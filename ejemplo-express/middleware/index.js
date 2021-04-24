const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
	let url = req.url;
	url = url.substring(url.indexOf('?') + 1);

	const params = url.split('&');
	let texto = '';

	params.forEach(param => {
		let object = param.split('=');
		texto += object[0] + ' : ' + object[1] + '<br>';
	});
	res.send(`<h1>Tus datos son: <br> ${texto} </h1>`);
	console.log(text);
});

app.listen(port, ()=>{
	console.log(`Servidor corriendo en el puerto ${port}`);
});
