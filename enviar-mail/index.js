const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.post('/send-email', (req, res)=> {
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		post: 587,
		secure: false,
		auth: {
			user: "leila.rempel87@ethereal.email",
			pass: "yQEJReFFYD4tQgPuqc"
		},
	});

	let mailOptions = {
		from: "Remitente",
		to: "ricardomelida92@gmail.com",
		subject: "Enviado desde nodemailer",
		text: "Hola mundo desde nodemailer"
	};

	transporter.sendMail(mailOptions, (err, info)=> {
		if(err) {
			res.status(500).send(err.message);
		}else {
			res.status(200).send({
				text: "Email enviado",
				info
			})
		}
	});
});

app.listen(3000, ()=> {
	console.log('Servidor corriendo en puerto 3000');
});
