function NumMayor_menor(x){

    if(x>=1 && x<10 && x % 2 === 0){
        console.log('El numero es menor de 10 y es par');

    }else if(x < 0){
        console.log('El numero debe ser mayor a 0');
    }else if(x >10){
        console.log('El numero es mayor a 10');
    }

    }
    NumMayor_menor(56);


    //Operador OR

    function cadena(cade){

        if (cade==='salsa' || cade.length < 5 ){
            console.log('la condicion es TRUE');

        }else{
            console.log('no es salsa');
        }
    }
    cadena('salmo');
//NEGACION

function negacion(permiso) {
    if (permiso){
     console.log('Tiene permiso');
     }else{
        console.log('no tiene permiso');
     }
    }
 negacion(true);
 //negacion(false);