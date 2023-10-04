function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:

        var my= nombre[0].toUpperCase()+ nombre.substring(1);
        return my;   
     }
     var letra="ana"
  var r= mayuscula(letra);
  console.log('Nombre enviado',letra,'==========>',r);   
 
 function invocarCallback(cb) {
    // Invoca/ejecuta el callback `cb`.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:
    return cb();
    function cb(){

    }

 }
invocarCallback();
 
 function operacionMatematica(num1, num2, cb) {
    // En este ejercicio recibirás dos números y un callback.
    // El callback realiza una operación matemática, por lo que necesita de los dos números.
    // Retorna el resultado del callback pasándole como parámetros los números.
    // Tu código:  
    console.log('Numero Uno por parametro es:==>',num1,'Numero Dos por parametro es:===>',num2);

    return cb(num1,num2);

     function cb(dato1,dato2){
        var tal =dato1 + dato2;
        return tal;
     }          
 }
 var t= operacionMatematica(4,5);

 console.log('La suma de los dos numeros +  Callback es:===>',t);

 function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:
    var f = 0;
    var tota=0;
    //console.log(arrayOfNumbers);
     var f= arrayOfNumbers.length
 

    console.log(f);
    for(var i=0;i < arrayOfNumbers.length; i++){
         var tota = tota + arrayOfNumbers[i];
    }
    cb(tota);

    function cb(vlr){
        console.log('Valor retornado a CallBack (cb) es:===>',vlr);
    }
 }
 var a = [2,6,3,4,5,5,6];
 var rx= sumarArray(a);

 
 function forEach(array, cb) {
    // Recibes un arreglo y un callback.
    // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
    // Debes pasarle el elemento como argumento al callback.
    // Tu código:
    
    array.forEach(ele => { cb(ele)     
    });

    function cb(x){
        console.log(x);
    }
 }
 var arr=[5,6,4,5,6];
 forEach(arr);
 
 function map(array, cb) {
    // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:
    var tt=0;
    var te=[];
    var c=0;
                var elemt= array.map( function(el){
                    tt=el * 4;
                    cb(tt);
                })

                            function cb(arr){                                
                                te[c]=arr;
                                c = c+1;                                    
                            }
                            return te;
  
 }
 var tr=[12,13,14,15,1,9];
 var p =map(tr);
 console.log(p);
 
 function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    var ar=[];
    var r=0;
    console.log("Este es array:===>",arrayOfStrings);
    

    for (var i=0; i< arrayOfStrings.length; i++){
    
            var x= arrayOfStrings[i];
           // console.log("valor de x",x);
            var s = x.split("");
            //console.log("Valor de s",s);
            if(s[0]=="a"){            
            //console.log(arrayOfStrings[i]);
            ar[r]=arrayOfStrings[i];
            r=r+1;            
            }
    }
    return ar;
   
   
    //console.log(separa);
 }
 var x=['ana','maria','anay','helen','camilo','andres','veronica','america'];
 var s= filter(x);
 console.log('Los nombres comenzados con la letra "a" son:===>',s);