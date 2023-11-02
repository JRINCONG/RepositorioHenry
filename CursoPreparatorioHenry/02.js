function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
    // Tu código aca
  
    var a=[];
    var r=0;
    var z= longitud()
    console.log(z)
    r= Math.max(...z);
    console.log(r)

           for(var i=0;i<r;i++){
            if(strings[i].length===r){
                return strings[i]
            }

           }        
    
    function longitud(){
                    for (var i=0; i<strings.length; i++){
                        a[i]=strings[i].length
                       }                  
                    return a
    }  

  }
  var x=["hola","amigo","computador","mouse","marcador","parlantes","nahatadrstebrrm"]
  var z=stringMasLarga(x)
  console.log(z)