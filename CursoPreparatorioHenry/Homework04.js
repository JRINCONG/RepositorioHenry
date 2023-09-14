function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
          if(x > y){
            console.log('X es Mayor que Y el valor de X es..',x);

          }else{
            console.log('Y es Mayor que X valor Y es..',y);
          } if(x === y){
            console.log('Los dos numero son Iguales','El valor X es', x, 'El Valor Y', y);

          }

 }
 obtenerMayor(20,9);



 function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años ó más debe retornar el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
        if (edad >=18 ){
            var permitir="Allowed";
            console.log('Usted puede Ingrezar',permitir);
        }else{
                var denegar="Not allowed";
                console.log('No puede ingrezar',denegar);
            }
    }
    mayoriaDeEdad(17);


    function conection(status) {
        // El argumento "status" representa el estado de conexión de un usuario.
        // Si el estado es igual a 1, el usuario está "Online".
        // Si el estado es igual a 2, el usuario está "Away".
        // De lo contrario, presumimos que el usuario está "Offline".
        // Retornar el estado de conexión del usuario.
        // Tu código:
        if(status === 1){
            var on="Online";
            console.log('Su estatus es',on);
        }else if(status ===2){
            var on="Away";
            console.log('Su estatus es',on);

        }else{
            var on="Offline";
            console.log('Su estado es',on);
        }
     }

     conection(2);

     function saludo(idioma) {
        // Retornar un saludo en tres diferentes lenguajes:
        // Si "idioma" es "aleman", devuelve "Guten Tag!".
        // Si "idioma" es "mandarin", devuelve "Ni Hao!".
        // Si "idioma" es "ingles", devuelve "Hello!".
        // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
        // Tu código:
       
        switch (idioma){

            case"aleman":
                console.log('Guten Tag!');
            break;

            case "mandarin":
                console.log('Ni Hao!');
                break;

                case "ingles":
                    console.log('Hello!');
                    break;

                    default:
                        console.log('Este Idioma no esta en nuestro sistema');
        
        }
   console.log('Gracias por su visita!!!');

     }
saludo("mandarin");

function colors(color) {
    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // IMPORTANTE: utilizar el statement SWITCH.
    // Tu código:

    switch (color){

        case "blue":
            console.log('this is Blue');
            break;

        case"red":
            console.log('This is Red');
            break;
        
        case"green":
            console.log('This is Green');
            break;
        
        case"orange":
            console.log('This is Orange');
            break;

            default:
                console.log('Color Not Found');
                
    }
 console.log('Gracias por visitarnos');

 }
 colors("red");

 function esDiezOCinco(num) {
    // Retornar true si "num" es 10 o 5.
    // De lo contrario, retornar false.
    // Tu código:
    if (num===10){
        console.log('TRUE is TEN');
    }else if(num===5){
        console.log('TRUE is five');
    }else{
        console.log('Para devolver TRUE el numero debe ser 10 o 5');
    }
    return num;
 }
 esDiezOCinco(5);

 function estaEnRango(num) {
    // Retornar true si "num" es menor que 50 y mayor que 20.
    // De lo contrario, retornar false.
    // Tu código:
    if (num > 20 && num < 50){
        console.log('esta en el rango el numero ',num);
    }else{
        console.log('no esta en el rango');
    }
    return num;
 }
 estaEnRango(51);

 function esEntero(num1) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    if (Number.isInteger(num1)){
        console.log(Number.isInteger(num1));
        return num1;

    }else{
        console.log(Number.isInteger(num1));
    }
    return num1;
 }
 esEntero(3.5);

 function fizzBuzz(num2) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:
    var dato1= (num2 % 3);
    var dato2=(num2 % 5);
        
    if (dato1===0){
        console.log('Fizz');
    }else if(dato2===0){
        console.log('Buzz');
    }if(dato1===0 && dato2===0){
        console.log('FizzBuzz');
    }else if(dato1 != 0 && dato2 != 0) {
        console.log('Numero no es divisible por 3 o 5');
    }

    }
    
    
 
 fizzBuzz(45);


 function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:
    var d=1;

        if(num1 > num2 && num1>num3 && num1>0){
            console.log('Nuemero 1 es mayor y Positivo');
          }else if(num1<0 || num2<0 || num3 <0){
            console.log('Hay Negativos');
          }else if(num3>num2 && num3>num1){
            var vnum3=num3 +1;
            console.log('el nuevo valor de Num3 es..',vnum3);
          }else if(num1===0 && num2===0 && num3===0){
            console.log('Estado..¡¡..ERROR...!!');
          }else if(num1===num2 && num3==num1 ){
            console.log('Los numeros son iguales');

          }else{
            return console.log('false');

          }
          
           }

    operadoresLogicos(1,2,8)

 function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   var conta=0;
   var primo=true;
    for(var i=1; i<=num ; i++){
             
        var resul2=num/i;
        if (Number.isInteger(resul2)){
            var conta=conta + 1;
            }
        
     }

     if(conta<=2){
        return console.log('El',num,'Si es Numero Primo');

    }else{
        return console.log('El Numero',num,'No es primo')
    }
}   
esPrimo(89);



function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   var par= true;
   var impar=false;
   var numero=valor%2;
   if( numero==0){
    return console.log(par);
   }else{
    return console.log(impar);
   }
   
}

esVerdadero(7);


function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   var dato=num;
   var valor=0;
  var valor=dato.length;
  if (valor===3){
    
    return console.log(true);
    
  }else{
    
    return console.log(false);
    

  }

}

tieneTresDigitos("123");

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
var vl=num;
var con=1;
   do{
    var vl=vl+5;
    var con=con+1;
   }while(con<8);
 return vl;
}
doWhile(9);