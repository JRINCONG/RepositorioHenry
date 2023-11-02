/* Escribir un programa que escriba en pantalla los divisores de un número dado

Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad) */


function numeros(num){
    console.log(num)
     console.log(num.length)
    for(var i=0; i<num.length; i++){
         console.log(num[0]/2)
         if(num[i]%2===0){
            return"Numero "+ num[i] + " es divisible por dos";
         }else{
            return "numero "+num[i]+" no es divisible por 2";
         }

    }

}
var z=[1]
var x= numeros(z)
console.log(x)

/* 1. Contraseña válida
Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

// escribe tu respuesta acá

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false*/
function contrasenaValida(string){
    console.log(string)

    if(string[0]==='eoZiugBf&g9' || string[0]==='2Fj(jjbFsuj'){
        return true

    }else{
        return false
      }
}
var z=['eoZiugBf&g9']
var x=contrasenaValida(z)
console.log(x)

/* 2. Calcular impuestos
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: 
edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son
iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0 */
function calcularImpuestos(edad,ingresos){
    console.log(edad)
     if(edad>=18 && ingresos>=1000){
        var TotalIngresos= ingresos*40/100
        var Total=ingresos + TotalIngresos;
        return TotalIngresos;
     }else{
        return 0;
     }
}
var x=calcularImpuestos(25,90000);
console.log(x)

/*3. IMC (ïndice de masa corporal)
El índice de masa corporal (IMC), o BMI por sus siglas en inglés,
es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura,
y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
// escribe la función bmi acá

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"*/

function bmi(peso,altura) {
   var PesoTotal=0;
   
   var calculo=Math.pow(altura,2)
   PesoTotal=peso/calculo

   console.log(PesoTotal)
  
   
   if(PesoTotal<18.5){
      return "Su BMI es " + PesoTotal + " esta Bajo de Peso"
   }
    else if(PesoTotal>18.5 && PesoTotal<24.5 ){
      return "Su BMI es " + PesoTotal + " esta Normal.."
    }
    else if(PesoTotal>=25 && PesoTotal <= 29.9){
      return "Su BMI es "+PesoTotal+" Esta con Sobrepeso.";
   }else if(PesoTotal >= 30){
      return "Su BMI es " + PesoTotal + " Esta Obeso.";
   }
   
}
var x= bmi(72,1.6)
console.log(x);

/* 10. Número de caracteres
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.

// escribe tu respuesta acá

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4 */
function numeroDeCaracteres(string,str){
   var conta=0;
   var letra="";

   console.log(string)
   console.log(str)
var z=string.split('')
console.log(z)
console.log(z.length)
for(var i=0 ; i<z.length;i++){
    if(z[i]===str){
      conta=conta+1
      letra=z[i];
    }

}
return "La letra "+ "("+str+")" + " se encontro "+conta+" Veces";

}
var x=numeroDeCaracteres("celular","l");
console.log(x)

function soloNumeros(array) {
   // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
   // Debe devolver un arreglo con solo los enteros.
   // Ej: 
   // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
 
   // Tu código aca:
   var conta=0;
   var conta1=0;
   var nuevo=[];
   var letras=[];
   for(var i=0; i<array.length;i++){

      if(Number.isInteger(array[i])){
         nuevo[conta]=array[i];
         conta=conta+1;
      }else{letras[conta1]=array[i]; conta1=conta1+1;}
   }
    return nuevo;
 
 }
 var z=[2,5,"hola",5,"como estas",1];
 var x=soloNumeros(z)
 console.log(x)

 function stringMasLarga(strings) {
   // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
   // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
   // Ej:
   // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
   // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
 
   // Tu código aca
   console.log(strings)
   console.log(strings.length)
   var temp=[];
   var conta=0;
   
    for(var i=0;i<strings.length;i++){
        temp[conta]=strings[i].length
        conta=conta+1;
    }
    console.log(temp)
    var t=Math.max(...temp)
    console.log(t)
      
       for(var i=0;i<strings.length;i++){
          if(strings[i].length===t){
            return strings[i];
          }
       }
    


 }
 var z=['hi', 'hello', 'ni hao', 'guten tag']
 var x=stringMasLarga(z)
 console.log(x)


 function buscarAmigo(amigos, nombre) {
   // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
   // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
   // recibe un string llamado 'nombre'.
   // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
   // Ej:
   //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
   //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
 
   // Tu código aca:
   console.log(amigos);
   console.log(nombre);
   var str=[];
   var ss=[]
   
   str=amigos.map(function(x){
       if(nombre===x.nombre){
           ss= x                 
       }  
       
   })
   return ss;
 }
 var z=[{nombre:"jairo",edad:41},{nombre:"andres",edad:9},{nombre:"jhosua",edad:5}]
 var x=buscarAmigo(z,"jhosua");
 console.log(x)
 
 
 function numeroSimetrico(num) {
   // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
   // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
   // Un número es simétrico cuando es igual a su reverso.
   // Ej:
   // numeroSimetrico(11711) devuelve true
 
   // Tu código:
      var f=num.toString()
      console.log(f)
      var t= f.split('').reverse("").join("")

      console.log(t)
      if(num==t){
         return true
      }else{return false}
 
 }
 var x=numeroSimetrico(121)
 console.log(x)

 function pluck(array, propiedad) {
   // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
   // propiedad.
   // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
   // Ej:
   // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
   // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
   // Pista: es una buena oportunidad para usar map.
 
   // Tu código acá:
   var srt=[]
   var z=array.map(function(x){
      console.log(x)
              
         return x[propiedad]
      
   })
     return z


 
 }

 

 var produ = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
 var x=pluck(produ,"name")
console.log(x) 

class Persona {
   constructor(nombre, edad, hobbies, amigos) {
     // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
     // Inicializar las propiedades de la persona con los valores recibidos como argumento

     // Tu código aca:
     this.nombre=nombre;
     this.edad=edad;
     this.hobbies=hobbies;
     this.amigos=amigos;

   }
   addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:
      
console.log(nombre)
            
        var amigos={
         nombre:nombre,
         edad:edad
        }
        this.amigos=amigos
       

   
      
    } 
}
var x= new Persona();
console.log(x.amigos)
var s =x.addFriend("jhosua",5)
console.log(s)
