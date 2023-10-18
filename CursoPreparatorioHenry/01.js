function soloNumeros(array) {
    // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
    // Debe devolver un arreglo con solo los enteros.
    // Ej: 
    // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  
    // Tu código aca:
    conta=0
    var num=[];
    for(var i=0;i<array.length;i++){
         if (Number.isInteger(array[i])){
            console.log (array[i])
            num[conta]=array[i];
            conta=conta +1;
           }
         
      }
    return num;
  
  }

  var x=[45,"jairo",8,"d",23,"j"];
  var v=soloNumeros(x);
  console.log(v)
  