var edades = [ 10, 21 , 100, 15 , 80 ,35];
var res = [];
edades.forEach(function personas(edad, indice, edades) {
    if( edad%2==0 && edad > 18 ){
      var fecNacimiento=2017-edad;
       res.push(fecNacimiento);
         
  }
})
 document.write(res);