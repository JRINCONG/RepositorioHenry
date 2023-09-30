function crearGato(nombre, edad) {
    // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
    // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
    // Además, agregar una propiedad con el nombre "meow".
    // La propiedad "meow" será una función que retorne el string: "Meow!".
    // Retornar el objeto.
    // Tu código:
var valores={
   nombre:'',
   edad:0,
   meow:{
      meow: "Meow!"},
};
valores.nombre=nombre;
valores.edad=edad;
return valores;
 }
 var nom =crearGato('lucas',45);
 console.log(nom);

 function nuevoUsuario(nombre, email, password) {
    // Debes crear un nuevo objeto.
    // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
    // Retornar el objeto.
    // Tu código:
    var usuario={
      nombre:'jairo',
      mail:'rincon303@hotmail.com',
      password:123456,
      };
      return usuario;
 }
 console.log (nuevoUsuario());

 function agregarPropiedad(objeto, propiedad) {
    // Recibirás un objeto por parámetro.
    // Debes agregarle una propiedad con el nombre recibido por parámetro.
    // Esta propiedad será igual al valor `null`.
    // Retornar el objeto.
    // Tu código:
    objeto[propiedad]="null";
    return objeto.propiedad;
     }
     var car ={};
     agregarPropiedad(car,'color');
     console.log("este es el valor del OBJETO===>",car);
      

 function invocarMetodo(objeto, metodo) {
    // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
    // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
    // [NOTA]: no necesitar retornar nada.
    // Tu código:

    console.log(metodo);

    objeto.comercial();

 }
  var avion={
   comercial: function(){
      console.log('este es un avion comercial');
   },
  };
  var tipo="comercial";
  invocarMetodo(avion,tipo);
 
 function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
    // Debes multiplicar este número por 5 y retornar el resultado.
    // Tu código:
    return objetoMisterioso.numeroMisterioso * 5;
 }
 var numero = (Math.random()*10);
 var numero1=Math.floor(numero);
 var val={
   numeroMisterioso:numero1,
    }
    var total =multiplicarNumeroDesconocidoPorCinco(val);
    console.log('Resultado del numero misterioso',total);

 function eliminarPropiedad(objeto, propiedad) {
    // El parámetro "propiedad" es una propiedad del objeto que recibes.
    // Debes eliminarla del objeto y retornarlo finalmente.
    // Tu código:
    console.log('Objeto antes de Eliminar la propiedad=======>',objeto);
    var exist= objeto.hasOwnProperty(propiedad);
    if (exist === true){
      delete objeto.propiedad;
      return objeto;
    }else{
      console.log('Propiedad no existe....',propiedad);
    }
 }
   var carro={
      pintura:'AZUL',
      llantas:4,
      propiedad:'automovil',
   }
 var p= eliminarPropiedad(carro,'propiedad');
 console.log('Valor del objeto despues de eliminar la propiedad.....',p);

 function tieneEmail(objetoUsuario) {
    // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
    var cont= objetoUsuario.hasOwnProperty('email');
       if(cont===true){
             for (let i in objetoUsuario) {
                if (i === 'email' && objetoUsuario[i]!='') {
                   return cont;         
                  }
               }
       }else{
         return console.log('Propiedad no Existe...!!!');
       }
   }
 var ob={
   nombre:'jairo',
   Apellido:'Rincon',
   email:'rincon303@hotmail.com'
 }
 var p =tieneEmail(ob);
 console.log(p);

 function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
    console.log('VALOR DEL OBJETO=======>',objeto);
    var c= objeto.hasOwnProperty(propiedad);
      if (c=== true){
               for (let i in objeto) {
                     if (i === propiedad){
                        return c;
                     }         
               }
      }else{ 
         return c;
        }         
    }
 var vaso={
   color:'verde',
   propiedad:'plastico',
   dimenciones:'32x45',
 }
 var d=tienePropiedad(vaso,'color');
 console.log("resultado===================>",d);
 
 function verificarPassword(objetoUsuario, password) {
    // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
    // En ese caso retornar true. Caso contrario, false.
        // Tu código:
    console.log(objetoUsuario.Password);
    console.log(password);
    if (objetoUsuario.Password===password){
         return true;

    }else{ 
          return false;
      }
 }

 var validar_user={
   usuario:'jairo',
   Password:'123456',
 }
 var res=verificarPassword(validar_user,'123456');
 console.log('Entrada=====>',res);

 function actualizarPassword(objetoUsuario, nuevaPassword) {
    // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
    // La nueva contraseña la recibes por parámetro.
    // Retornar el objeto.
    // Tu código:
    objetoUsuario.Password=nuevaPassword;
    return objetoUsuario;
 }
 var validar_user={
   usuario:'jairo',
   Password:123458,
 }
 var x=actualizarPassword(validar_user,'456123');
 console.log('Contraseña Cambiada correctamente===>',x);
 
 function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:

    
    console.log("Propiedad amigos Actual:=======>",objetoUsuario);
    objetoUsuario.amigos.push(nuevoAmigo);
     return objetoUsuario;
 }

 var x={
   amigos:["ana","maria","jairo"],
 }
 var c = agregarAmigo(x,'andres');
 console.log(c);
 
 function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como true.
    // Retornar el arreglo.
    // Tu código:
    return objetoMuchosUsuarios;
 }
 
 var MuchosUsuarios=[usuarios={
   user1:{nombre:"jairo",esPremium:true},
   user2:{nombre:"ana",esPremium:true},
   user3:{nombre:"andres",esPremium:true}
}];
var x=pasarUsuarioAPremium(MuchosUsuarios);
console.log("Array con varios objetos usuarios:====>",x);
 
 function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
    var suma1=0;
    console.log('================================================');
    for (var i = 0; i < objetoUsuario.posts.length; i++) {
      var valor1 = objetoUsuario.posts[i].likes;
      var suma1=suma1 + valor1;      
    }
       return suma1;  
   }      
 var p={
            posts:[post={likes:15},post={likes:4},post={likes:3}]
         }
 var x= sumarLikesDeUsuario(p);
 console.log('Suma de arraglo y objetos =',x);
 console.log('<============================================================>')
 
 function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
    // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
    // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
    // Luego debes restar del precio total del producto ese valor de descuento.
    // Retornar el precio final.
    // Ejemplo:
    // Precio ---> 10
    // PorcentajeDeDescuento ---> 0.2
    // Precio final ---> 8
    // Tu código:
    var tal=0;
    var final=0;
     //Agregamos las propiedades
    objetoProducto.precio=70;
    objetoProducto.procentajedeDescuento=0.9;    
    //agregamos l apropiedad y funcion calculardescuento
    objetoProducto.calcularprecioDescuento= function(){
      var tal= this.precio * this.procentajedeDescuento      
      return tal;
       }
    var resul = objetoProducto.calcularprecioDescuento();
    console.log('Precio del Articulo ===========>',objetoProducto.precio);
    console.log('Procetntaje de Descuento ======>',objetoProducto.procentajedeDescuento);    
    var final= objetoProducto.precio - resul;
    return final;
    }
 var precio_tienda={};
 var valor2=agregarMetodoCalculoDescuento(precio_tienda);
 console.log('Precio Final =========> ',valor2);
 console.log('<=============================================================>')


 