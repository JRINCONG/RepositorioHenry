function crearGato(nombre, edad) {
    // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
    // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
    // Además, agregar una propiedad con el nombre "meow".
    // La propiedad "meow" será una función que retorne el string: "Meow!".
    // Retornar el objeto.
    // Tu código:
    var gato={
        nombre:nombre,
        edad:edad,
        meow: function(){
            return "Meow!"
        }
    }
    return gato
 }

 var x=crearGato('jairo',45);
 console.log(x)
 
 function nuevoUsuario(nombre, email, password) {
    // Debes crear un nuevo objeto.
    // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
    // Retornar el objeto.
    // Tu código:
    var usuario={
        nombre:nombre,
        email:email,
        password:password,
    }

    return usuario;

 }
 
 function agregarPropiedad(objeto, propiedad) {
    // Recibirás un objeto por parámetro.
    // Debes agregarle una propiedad con el nombre recibido por parámetro.
    // Esta propiedad será igual al valor `null`.
    // Retornar el objeto.
    // Tu código:
    objeto[propiedad]=null

    return objeto
 }
 
 function invocarMetodo(objeto, metodo) {
    // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
    // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
    // [NOTA]: no necesitar retornar nada.
    // Tu código:

    var x= objeto[metodo]()

 }
 
 function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
    // Debes multiplicar este número por 5 y retornar el resultado.
    // Tu código:
    return objetoMisterioso.numeroMisterioso * 5
      
 }
 
 function eliminarPropiedad(objeto, propiedad) {
    // El parámetro "propiedad" es una propiedad del objeto que recibes.
    // Debes eliminarla del objeto y retornarlo finalmente.
    // Tu código:
    delete objeto[propiedad]
    return objeto
 }
 
 function tieneEmail(objetoUsuario) {
    // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:

     if (objetoUsuario.email !=""){
        return true

     }else {return false}
    }
 function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
       var v =objeto.hasOwnProperty(propiedad)
         if (v=== true){
            return true
         }else{
            return false
         }
 }
 var x={
    nombre:'jairo',
    edad:45,
 }
 var x=tienePropiedad(x,'nombre')
 console.log(x)
 
 function verificarPassword(objetoUsuario, password) {
    // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:

    if(objetoUsuario.password===password){
        return true
    }else{
        return false
      }
 }
 
 function actualizarPassword(objetoUsuario, nuevaPassword) {
    // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
    // La nueva contraseña la recibes por parámetro.
    // Retornar el objeto.
    // Tu código:
    objetoUsuario.password=nuevaPassword;
     return objetoUsuario


 }
 
 function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:
       
  objetoUsuario.amigos.push(nuevoAmigo)

    return objetoUsuario

 }
 var obj={
    amigos:["andres","jhosua","jesus"],
 }
 var x=agregarAmigo(obj,'jairo')
 console.log(x)
 
 function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como true.
    // Retornar el arreglo.
    // Tu código:
        var x=objetoMuchosUsuarios.map(function(x){
            console.log(x)
            return  x.esPremiun=true

        })
        console.log(objetoMuchosUsuarios)
        return objetoMuchosUsuarios

 }

 var x=[usuarios={esPremiun:false},{esPremiun:false}]
 var z=pasarUsuarioAPremium(x)
 console.log(z)
 
 function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
    console.log(objetoUsuario)
    var sum=0 

       var x=objetoUsuario.posts.map(function(x){
          sum=sum + x.likes
        })
       return sum      
       
 }
 var obje={
    posts:[post={likes:45},{likes:50},{likes:80}]
 }
 var x=sumarLikesDeUsuario(obje)
console.log(x)
 
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
    var resul=0;   

        objetoProducto.calcularPrecioDescuento= function(){
            resul=objetoProducto.precio * objetoProducto.PorcentajeDeDescuento;
            return resul
        }
        var r= objetoProducto.calcularPrecioDescuento()
             
        var total=objetoProducto.precio-r;
     return total
 }
 var obj={
    precio:10,
    PorcentajeDeDescuento:0.2,    
 }
 var d=agregarMetodoCalculoDescuento(obj)
 console.log(d)