// EJERCICIO 01:

function crearUsuario() {
    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
    // El valor de cada propiedad la recibirá por parámetro.
    // Además, esta clase debe tener un método llamado "saludar".
    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
    // Retornar la clase.
        // Tu código:
            function Usuario(usuario,nombre,email,password){

                     this.usuario=usuario;
                     this.nombre=nombre;
                     this.email=email;
                     this.password=password;
                     
                     this.saludar= function(){
                        console.log('Hola, mi Nombre es ===> '+ this.nombre);
      
                        }        
        }                
   var crear_user= new Usuario('rincon','jairo','rincon303@hotmail.com','1232456');
   console.log(crear_user);
   console.log(crear_user.saludar());
}
crearUsuario();
 
 function agregarMetodoPrototype(Usuario) {
    // Agrega un método al prototipo de "Usuario".
    // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
    // Tu código:
    Usuario.prototype.Saludar= function(){
      return "Hello World!";
    }  
    
  }
  class user{
   constructor(){
      
      }
   }  
   var et= new user();
   agregarMetodoPrototype(user);
   console.log (et.Saludar());

 function agregarStringInvertida() {
    // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse".
    // [PISTA]: necesitarás utilizar el objeto "this".
         class Cad{
            constructor(){
               this.elem=[];
            }
         }

                  String.prototype.reverse=function(elem){
                     var rrr =this.split("");
                     var alreves=rrr.reverse("");
                     var final=alreves.join("");
                     return final;
                     }

var el= new Cad();
var cd="Desarrollo";
var re=cd.reverse(cd);
console.log(re);
 }
 agregarStringInvertida();


 //EJERCICIO 02


 class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
    constructor(nombre,apellido,edad,domicilio,estado){
       this._nombre=nombre;
       this._apellido=apellido;
       this._edad=edad;
       this._domicilio=domicilio;
       this._estado=estado;
    }

    Detalle(){
      console.log('Se llama',this._nombre , this._apellido,'Tiene la edad de :',this._edad,'y su domicilio es:',this._domicilio);
    }   

 }
     var datos1 = new Persona('Juan','Perez',35,'Colombia (city: Cartagena)');
     datos1.Detalle();
 
 function crearInstanciaPersona(nombre, apellido, edad, domicilio,estado) {
    // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
    // Recibirás las propiedades por parámetro.
    // Retornar la instancia creada.
    // Tu código:
    var int= new Persona(nombre,apellido,edad,domicilio,estado);
    return int;
 }
 var x =crearInstanciaPersona('ANA','GOMEZ',40,'MEXICO','MONTERREY');
 console.log(x);

 function agregarMetodo() {
    // La función agrega un método "datos" a la clase "Persona".
    // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
    // Ejemplo: "Juan, 22 años".
    // Tu código:
    datos1.datos= function(){
          console.log ('Su Nombre es: ',this._nombre ,'y tiene la edad de: ',this._edad,'Años');
       }
      datos1.datos();
 }
 agregarMetodo();
 