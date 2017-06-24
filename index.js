
// EJERCICIOS DE ARREGLOS
 //ejercicio 1

   var array = [4 , 4, 5, 12];
   var numero =  9;
  var  multiplicar = array.reduce(function( nume1 , arry2){
  
 var result =  nume1 * arry2;
  
 return result;
  
 })
 document.write(numero * multiplicar);
   // ejrcicios 2
   // me falta completar :(
   


     //ejercicio 3


var aleatorio = [ 7, 21 ,44, 80 ,77 ,35];
var mult = 7;
var res = [];
aleatorio.forEach(function multiplos(valor, index, aleatorio) {
    if( valor % mult == 0 ){
      res.push(valor);
          console.log(res);
  }
})
   document.write(res);


     //ejercicio 4

     var numbers = [2, 5, 7, 2, 3, 8, 10];
     var dobles = numbers.map(function(valor) {
   return (valor * 2) + 1;
});
    document.write(dobles);

     //ejercicio 5

    var celcius = [ 0, 45, 50, 75, 80, 120 ];
 
    var fahrenheit = celcius.map( function( elemento ) {
    return Math.round( ( elemento + 32 ) * 9/ 5 );
} ); 
    document.write(fahrenheit);

     //ejercicio 6


     var array2 = [1 , 2, 3, 4];
   
     var multi = array2.reduce(function (param1 ,param2){
    
  return param1 * param2;
})
    document.write(multi);   
 


    // ejerxicio 7
     var edades = [ 10, 21 , 100, 15 , 80 ,35];
     var res = [];
      edades.forEach(function personas(edad, indice, edades) {
    if( edad%2==0 && edad > 18 ){
      var fecNacimiento=2017-edad;
       res.push(fecNacimiento);
         
  }
})
    document.write(res);
     //EJERCICIOS DE OBJETOS 
     //ejercicio 1
     var _resultado = new rectangulo(40 , 12);

function rectangulo  ( base , altura){
  
 this.base = base;
 this.altura = altura ;

 this.calcular_area = function (){
    return this.base * this.altura ;
 }
 }
document.write(_resultado.calcular_area());



     //ejercicio 2

function caracter(nombre, dia, mes, aniodeNacimiento, anioActual){
  this.nombre = nombre;
   this.dia = dia;
   this.mes = mes;
   this.aniodeNac = aniodeNacimiento;
  this.anioActual = anioActual;
}
var resultado = new caracter("Su",23 , 8 ,1991 , 2017);

var edad = resultado.anioActual - resultado.aniodeNac;
var res ="La edad actual de " + resultado.nombre + " es "+ edad;

document.write(res);

     //ejercicio 3

     var mi_saludo = new persona (  " yudith", 18 , "leer");

function persona ( nombre, edad , pasatiempo){
  
 this.nombre = nombre;
 this.edad = edad ;
 this.pasatiempo = pasatiempo ;
}

    document.write("hola  soy"   +  mi_saludo.nombre +  " tengo"  +   mi_saludo.edad +" años y me gusta "+ mi_saludo.pasatiempo) ;
 
 

 

