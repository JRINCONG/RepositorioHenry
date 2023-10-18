function numeroSimetrico(num) {
    // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
    // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
    // Un número es simétrico cuando es igual a su reverso.
    // Ej:
    // numeroSimetrico(11711) devuelve true
    // Tu código:

    console.log(num)
    var x=num*(-1);
    console.log(x)   

    if (x<0){
               for(var i=0 ; i=>x ; i--){
                     if(x===i){
                        return true
                     }
                  }
   }else{
            for(var i=0;i<=x;i++){
               if(x===i){
                  return true
               }
         }
   }


}
var x =numeroSimetrico(11715)
console.log(x)