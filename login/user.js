const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Con esto le decimos cuantas veces se va a encriptar la contrasenha
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//Antes que se guarden los datos
//Este metodo no reconoce la funcion de flecha
UserSchema.pre('save', function(next){
    //Si el dato ingresado es nuevo o esta siendo modificado
    if(this.isNew || this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, saltRounds, (err, hashedPassword)=> {
            if(err) {
                next(err);
            }else {
                document.password = hashedPassword;
                next();
            }
        })
    }else {
        next();
    }
});

//Este metodo no reconoce la funcion de flecha
UserSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, (err, same)=> {
        if(err) {
            callback(err);
        }else {
            callback(err, same);
        }
    })
}


module.exports = mongoose.model('User', UserSchema);