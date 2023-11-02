//Dios eres Fiel 


function frases(frases){
    var valor=[];
    var rt=[];
    var j=[]
    var conta=0;
    var d=[];
   console.log(frases)
    var j=frases.flat()
    console.log(j[0].split(' '))
   
  for(var i=0; i <j.length; i++){
       d[i]=j[i].length;
       valor[i]=j[i].split(' ');                 
  }   
  console.log(valor)
  for(var i=0;i<valor.length;i++){
       for(var j=0; j<valor[i].length; j++){  
           rt[conta]=valor[i][j].length
           conta=conta +1;  
 }  
 console.log(rt)

}
var t=Math.max(...rt)
console.log(t)
for(var i=0;i<valor.length;i++){
    for(var j=0; j<valor[i].length; j++){  
        if(valor[i][j].length===t){
            return valor[i][j];
        }
}  

}

}
var z=["hola como esta jairo rincon","casa rodante","casa","hhhhhh2321321323"]
var x= frases(z);
console.log(x)


function arreglo(string){


    var h=encontrar()
 function encontrar(){
    var x=[];
    var z=[];
    console.log(string.length)
   var num=0;
   var min=1

        for(var i=0;i<string.length;i++){
             if (num<string[i]){
                num=string[i];
             } else if(min>string[i]){
                   men=string[i]
             }                  
                             

             } 
             console.log(num)
             console.log(men)

    }
    
   
    //console.log(r)
} 
  

var x=[123,45,2,1,52,0,125]
var x=arreglo(x)
console.log(x)


function recibir(valor){

    var c=cambiar()
    
    function cambiar(){

        console.log(valor)
           
        var d={};
            for (const x in valor) {
                if (Object.hasOwnProperty.call(valor,x)) {
                    var g= valor[x]
                    if(!d.hasOwnProperty(x)){
                        d[g]=x
                        console.log(d)
                    }
                    
                }
            }   
          return d
        }

        return c
    }
var mundo={
    nombre:"jairo",
    apellido:"rincon",
} 
var x=recibir(mundo);
console.log(x);

function pedircomida(array){
    var conta=0;
    var conta1=0;
    console.log(array)
    var d= array.map(function(x){
         return x.dieta
    })
    console.log(d.length)
     for(var i=0;i<d.length;i++){
          if(d[i]==="vegana"){
           var  conta=conta+1
          }else if(d[i]==="standar"){
            var conta1=conta1+1;
        }
            
          }
          var ob=new Object();
          ob.vegana=conta;
          ob.standar=conta1

           return ob
          

     }
     
    



var z=[{nombre:"jairo",dieta:"vegana"},{nombre:"andres",dieta:"standar"},{nombre:"jhosua",dieta:"standar"}]
var x=pedircomida(z);
console.log(x)