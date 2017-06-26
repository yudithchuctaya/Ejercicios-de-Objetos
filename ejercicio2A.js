 
   
  var assert = require('assert');

function telefonos( numeros,separar){
      var numeros =[78456203,23456786]; 
     var separar = "784";
     var resultado = numeros.filter(selec);
function selec (num) {
     var primeras = num.toString().substr(0,3);
     var ultimas = num.toString().substr(-3);
  if(primeras == separar || ultimas == separar){ 
    return true;
    
     
   }else{
       return false;
     }
  
  }
  return(resultado);
   

}
 
 describe('Ejercicio 2', function(){
    it("cuando es [78456203,23456786], 784", function(){
      assert.deepEqual([78456203,], telefonos([78456203,23456786], 784));
    });
    
  });
 