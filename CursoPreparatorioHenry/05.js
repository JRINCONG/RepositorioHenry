function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    // propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.
  
    // Tu código acá:
    var productos= array.map(function(x) {
       return x.nombre
        
    })
    return productos
    
  
  }
  var z=[{ nombre: 'TV LCD', price: 100}, { nombre: 'Computadora', price: 500 }]
 var x= pluck(z,'producto')
 console.log(x)
