function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
    var miArray=['Uno','Dos','Tres','Cuatro','Cinco'];
    console.log(miArray[array]);
 }
 devolverPrimerElemento(2); 

 function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código: 
    return array.at(-1);   
 }
 var miArray=['CHEVROLET','RENAULT','MAZDA','AUDI','BMW','FORD'];
 var valor= devolverUltimoElemento(miArray);
 console.log(valor);

 
 function obtenerLargoDelArray(array) {
    // Retornar la longitud del arreglo recibido por parámetro.
    // Tu código:
    return array.length
 }
 var datos=['PERA','MANZANA','MANGO','LIMON'];
 var f= obtenerLargoDelArray(datos);
 console.log(f);

 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    console.log(array);
    console.log('=========================')

    var sumar1= array.map((num)=>{
      return num + 1;
    })
        return sumar1;
     
   }
    var dato='123456789';
    var info= dato.split('');
    var resul=incrementarPorUno(info);
    console.log(resul);


 function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.push(elemento);
    return array;
 }
 var d=['uno','dos','tres','cuatro'];
 var x=agregarItemAlFinalDelArray(d,'cinco');
 console.log(x);
 
 function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.unshift(elemento);
    return array;
 }
 var jrray=['CHEVROLET','MAZDA','RENAULT','AUDI','BMW'];
 var z=agregarItemAlComienzoDelArray(jrray,'PEGEO');
 console.log(z);

 
 function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
    var zt =palabras.join('');
    return zt;
 }
 var d=['Hola',' ','como',' ','estas'];
 var c=dePalabrasAFrase(d);
 console.log(c);



 function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
    var l = array.includes(elemento);
    return l;
 }
 var y=['casa','carro','portatil','pc','avion','arroz'];
 var p=arrayContiene(y,'pan');
 console.log(p);

 function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu có0igo:
    var b=arrayOfNums.length;
    var xt=0;   
console.log('=================================');
    
     for(let index = 0; index < arrayOfNums.length; index++) {
               
     var xt = xt + arrayOfNums[index];
     }
     return xt;
 }    
 var g=[4,5,6,7,8,9,10];
 var x=agregarNumeros(g);
 console.log('Suma total de los elementos del array==>',x);

 
 function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
    var el=0;
    var cant=resultadosTest.length;

    for (let index = 0; index < resultadosTest.length; index++) {
     var el = el + resultadosTest[index];
     }
    return el/resultadosTest.length;
 } 
 var not=[7.5,6.5,6.8,10,8.3,9];
 var result=promedioResultadosTest(not);
 console.log('Promedio de Notas es ==>',result);



 function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código     
       var t = Math.max(...arrayOfNums);
       return t;      
    }
      var ar=[8,10,3,30,5,60];
      var z=numeroMasGrande(ar);
      console.log('El valor mayor del array ===>',z);

 
 function multiplicarArgumentos(arguments) {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:

    var tx=1;


if (arguments.length<=0) {
   return 0;
   
}else if(arguments.length===1){
   return arguments[0];
}else if(arguments.length>1){

         for (let index = 0; index < arguments.length; index++) {
            var tx = tx * arguments[index];
            
         }
return tx;
      }
//var re =Math.imul(...arguments);
//if (re===0){
 //  return 0;
//}else if(re===1){
// return re;
}
//return re;
 
 var c=[6,5,9,8,7,6,5,8];
 var z=multiplicarArgumentos(c);
 console.log('El valor de la Multiplicacion es==> ',z);
 
 function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    var may=[];
    var l=0;
     for (let index = 0; index < array.length; index++) {
      if (array[index] > 18){
         may[index] = array[index];
         //console.log('EL VALOR DE MAY',may);

      }else{
         var men=array[index];
         
      }
    }
    return may;
   
 }
 var r=[10,5,30,70,15,18,3];
 var z=cuentoElementos(r);
 console.log('Numeros mayores a 18 son ===>',z);

 
 function diaDeLaSemana(numeroDeDia) {
    // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
    // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
    // Tu código:
    if(numeroDeDia <=5){
      var t='Es dia Laboral...';
      return t;
    }else{
      var t='Feliz fin de Semana';
      return t;
    }
 }
 var z=[6];
 var x=diaDeLaSemana(z);
 console.log('El dia de la semana es =====>',x);
 
 function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    console.log('valor de num====>',num);
    var p=9;
    var vl= num.includes(p);
    return vl;          
 }
 var x=[10];
 var z= empiezaConNueve(x);
 console.log('Si inicia con 9 el TRUE si no False===>',z);
 
 function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
    var x=[];
    var cont=0;
    var conta=0;
    var zz=0;
    console.log('Valor de longitid del array',array.length)
    for (let index = 1; index < array.length; index++) {
       
           if (array[0]===array[index]){
            var cont= cont +1;
            x[cont]=array[index];
           }   
            
           }if(x.length===array.length){
            return true;

           }else{
            return false;
           }           
   }

   var x=['carro','carro','carro','ca4ro'];
   var z= todosIguales(x);
   console.log('Los elementos del array son iguales si es TRUE si no es FALSE====>R/:',z);
 
 function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:

    var ar=[];
    var cont=0;
    for (let index = 0; index < array.length; index++) {
          if(array[index]==='enero'){            
            ar[cont]=array[index];
            cont=cont+1;
          }else if(array[index]==='marzo'){
            ar[cont]=array[index];
            cont=cont+1;
          }else if(array[index]==='noviembre'){
            ar[cont]=array[index];
            cont=cont+1;
          }

          
    } if(ar.length>0 && ar.length < 3){
      return console.log('No se encontraron los meses solicitados');
    }else{
      return ar;
    }

 }
 var xr=[];
 var z=['enero','abril','junio','mayo','febrero','marzo','noviembre','septiembre','julio','agosto','diciembre','octubre'];
 var xr=mesesDelAño(z);
 console.log('Meses encontrados',xr);
 
 function tablaDelSeis(valor) {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:

    var tabla=0;
    var art=[];
    
    for (let index = 0; index <=60; index++) {
             tabla= valor* index;
             art[index]=valor + 'X'+ index +'='+ tabla;
      
    }
    return art;



 }
 var ts=tablaDelSeis(6);
 console.log('tabla del 6',ts);
 
 
 function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:

var d=[];
var cc=[];
var cont=0;
   for (let index = 0; index < array.length; index++) {
      if (array[index]>100 && array[index]<=200){
         cont=cont+1;
         d[cont]=array[index];
        
         }else{
         cc[index]=array[index];

      }
      
   }
   return d;
     }

var tx=[];
 for (let index = 0; index < 200; index++) {
   tx[index] = index;   
 } 
 var r=mayorACien(tx);
 console.log('Valores Mayores a 100 sin incluirlo',r);

 /* ----------------------------------------------------------------------------------
 💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
 -------------------------------------------------------------------------------------*/
 
 function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    var t=[];
    var cont=num;
    var st="Se interrunpio la ejecucion";
     for (let index = 1; index <= 10; index++) {
        cont=cont +2;
        t[index]=cont;
        console.log('Valor de i===>',index);
        console.log('valor de CONTADOR===>',cont);
         if (t[index]===index){
            
               break;
            }
           
      }
        return t;
    }
 var v= breakStatement(4);
 console.log('Valor',v);
 
 function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:
    var cont=num;
    var ar=[];
    for (let index = 0; index < 10; index++) {
      
      if (index===5){
         continue;

      }else{
         cont=cont + 2;
         console.log('valor de index======>',index);
         ar[index]=cont;
         console.log('Valor de Ar===>',ar[index]);

      }
      
      
    }
 return ar;

 }
 var f= continueStatement(1);
 console.log('Valor',f);