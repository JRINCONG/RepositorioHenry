function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
     var x = array[0];
     return x;
 }
var y=['jairo',23,'helen','andres',8];
var z= devolverPrimerElemento(y);
console.log(z);

function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    var x= array.length;
    console.log (x)
    return array[x-1];
 }
 var r=[5,3,5,9,8,7,4,6];
 var resul=devolverUltimoElemento(r);
 console.log(resul);

 function obtenerLargoDelArray(array) {
    // Retornar la longitud del arreglo recibido por parámetro.
    // Tu código:
    return array.length
 }
 var ar=["helen","ana","andres",23,45];
 var r=obtenerLargoDelArray(ar)
 console.log(r);

 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:      
      return  array.map(function (r){
        return r + 1    
      });   
  }  
var z=[4,52,8,6,9,8,7,1];
var d =incrementarPorUno(z);
console.log(d)

function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    
    array.push(elemento);
    return array;
 }
 var x=[2,3,5,8,9];
 var resul=agregarItemAlFinalDelArray(x,20);
 console.log(resul)

 function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.unshift(elemento);
    return array;
 }
 var x=[2,3,5,8,9,5];
 var r=agregarItemAlComienzoDelArray(x,"jairo");
 console.log(r)

 function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
         return  palabras.join(' ')     
 }
 var x=["Hola","Jairo","Como estas"];
 var r=dePalabrasAFrase(x);
 console.log(r);

 function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
    return array.includes(elemento)
 }
 var x=[2,3,4,5,9,8,7,0];
 var z=arrayContiene(x,1);
 console.log(z)

 function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    var suma=0;
     for(var i=0; i< arrayOfNums.length; i++){
         suma=suma + arrayOfNums[i];
     }
     return suma;
 }
 var x=[4,5,9,8,7,2,3];
 var z=agregarNumeros(x);
 console.log(z)

 function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
    var suma =0;
      for(var i=0; i< resultadosTest.length; i++){
        suma= suma+resultadosTest[i];        
      }
      return suma/resultadosTest.length;
 }
var x=[4.5,5.0,6.3,2.0,2.3,9,2.5];
var z=promedioResultadosTest(x);
console.log(z)

function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
    var r= Math.max(...arrayOfNums);
    return r;       
 }
 var x=[7,8,9,2,10];
 var z=numeroMasGrande(x);
 console.log(z);

 function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    
console.log(arguments.length)
var mul=1;

  if (arguments.length==0){
   return arguments.length
  }
   for(var i=0; i<arguments[0].length; i++){
      mul=mul * arguments[0][i];
   }
     return mul;    
         }
var z=[5,2,8,7,55,45,12];
 var x=multiplicarArgumentos(z)
 console.log(x)
 
 function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   return elemen(array);    

   function elemen (){      
       var may=arguments[0].map(function(num){
          if(num > 18){
             return num
            }     
          });
          //Como Boolean es, además de un constructor, una función, devuelve true o false según el 
          //valor de su argumento. De este modo, aquellos elementos del array vacíos o nulos,
          // son evaluados como false y excluidos del resultado:
      var t= may.filter(Boolean)
      return t
      
   }
 }
var d=[5,20,10,1,78,63,21,5,12];
var z=cuentoElementos(d);
console.log(z);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   return findesemana(numeroDeDia);
 
   function findesemana(){

      switch (arguments[0]) {
         case 1:
            return "Es fin de semana";
            
         case 2:
             return "Es dia laboral";
         case 3:
            return"Es dia laboral";
         case 4:
            return"Es dia laboral"
         case 5:
            return"Es dia laboral"
         case 6:
            return"Es dia laboral"
         case 7:
            return"Es fin de semana"          
      
         default:
            return "No indico un dia de la semana Valido";
      }
   }
}
var x =diaDeLaSemana(5);
console.log(x)  

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var z=num.toString();
   var x=z.split("");
         if(x[0]==="9"){
            return true
         }
   return false
}
var x= empiezaConNueve(8);
console.log(x);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:   
    var x=array[0]
    var igual=[];
    for(var i=0; i<array.length;i++){
            if(x===array[i]){
               igual[i]=array[i];
            }else{
               return false;
            }
    }
      return true;
}
var x=["pedro","pedro","pedro","pedro",20];
var z =todosIguales(x)
console.log(z)

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var conta=0;
   var reto=[];
                  for(var i=0; i<array.length;i++){
                     if(array[i]==="Enero"){
                        reto[conta]=array[i];
                        conta=conta+1;
                     }else if(array[i]==="Marzo"){
                        reto[conta]=array[i];
                        conta=conta+1;
                     }else if(array[i]==="Noviembre"){
                        reto[conta]=array[i];
                        conta=conta+1;
                     }
                  }
   console.log(reto)
         if(conta===3){
            return reto;
         }else{
            return "No se encontraron los meses pedidos";
         }       
}
var x=["Julio","Noviembre","Octubre","Abril","Marzo","Agosto","Enero"];
var z=mesesDelAño(x);
console.log(z);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   return multiplicar();

               function multiplicar(){
                  var tabla=[];
                  for(var i=0;i<=60;i++){
                     tabla[i]= 6 * i;
                  }       
                    return tabla;
                }
}
var x= tablaDelSeis();
console.log(x)

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
  var r=[];
   var r= array.map(function(x){
      if( x>100){
        return x;
      }      
   })
   var c=r.filter(Boolean);
   return c
   

}
var x=[];
for(var i=0;i<=200;i++){
    x[i]=i;
}
var z= mayorACien(x)
console.log(z)