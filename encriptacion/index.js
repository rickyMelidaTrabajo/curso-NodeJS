const mongoose = require('mongoose');
const app = require('./app');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/test-encryptation', { useNewUrlParser: true }).then(() => {
	console.log('Conexion exitosa');
	app.listen(3500, ()=> {
		console.log('Conexion al puerto 3500');
	});
});
