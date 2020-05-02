
const param = p =>{
  //Primero recogemos el indice donde se encuentra el parametro
  var index = process.argv.indexOf(p);
  //el index del parametro que quiero recoger
   return process.argv[index + 1];
  //console.log(index);
}

console.log(param('--nombre')); 
// console.log(process.argv);
