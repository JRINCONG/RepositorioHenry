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


/*
ESCRIBE UNA FUNCION QUE RECIBA UN ARREGLO DE ENTEROS COMO PARAMETRO Y RETORNE
EL ENTERO QUE MAS VECES APARECE EN ESE ARREGLO.

TU CODIGO AQUI..
*/
function aparece(dato) {
    var f=[];
    var conta=1;
    var dt=[]
    var vt=[];
    var j=0


          for(var i=0;i<dato.length;i++){ 
                
                    dt[i]=dato[i]
            }
 console.log(dt)

            for(var i=0;i<dato.length;i++){
               
                    if(dato[i]!=dato[conta]){
                         f[i]=dato[i];
                         conta=conta+1
                    }else{
                       
                        vt[j]=dato[conta]
                        j=j+1
                    }

            }
             for(var x=0;x<f.length;x++){
                  if(f[x]===vt[0]){
                     vt.push(f[x])
                  }
             }

       console.log(dt)
       console.log(f)
       console.log(conta)
       console.log(vt)
                     


}
var d=[2,3,4,5,2,2,2]
var x=aparece(d)
console.log(x)

function orgflat(datos) {
    var r=[]
    let conta=0;
    var  objeto={
        numeros:numeros=[1,2,1,2,2],
    }

    console.log(objeto)
    
    datos.forEach(num => {
    if(num[0]==="c"){
        r[conta]=num;
        conta=conta+1   
        
    }
});
console.log(r)
 objeto.NombreNumeros=r;
 console.log(objeto)
 objeto.numeros.push(r);
 console.log(objeto)
 console.log(objeto.NombreNumeros.push('ocho'))
 console.log(objeto.numeros.flat())
 console.log(objeto.amigos=["andres","jhosua","helen","jairo"])
console.log(objeto)
objeto.saludo=(nombre)=>{
    return "Hola como estas "+ nombre
}
console.log(objeto.saludo("jairo"))
objeto.familia=[{nombre:"jairo",edad:41},{nombre:"andres",edad: 10}, {nombre:"jhosua",edad:5}]
console.log(objeto.amigos)
console.log(objeto)

/*
    const r= datos.find((num)=> {
        if(num[0]==="c"){
            return num
        }

    })
    return r
*/
    
}
var d=["uno","dos","tres","cuatro","cinco","seis","catorce"];
var x=orgflat(d);
console.log(x)

class Jugador{

    constructor(nombre,apellido,cc,tarjetas){
        this._nombre=nombre;
        this._apellido=apellido;
        this._cc=cc;
        this._tarjetas=tarjetas;

    }



    gettarjetas(color,cantidad){

        this.tarjetas=[{color:color,cantidad:cantidad}];


    }


    getequipo(nombre,cant){

        var equipos={
            nombre:nombre,
            judadores:cant,

                   }
        this['Equipos']=equipos;

    }

    objllenado (){

        return this.Equipos;

    }

    Tarjecolores(){
        
        
       const resul=this.tarjetas.filter((x)=>{
              if(x.color==="amarilla"){
                 return x.cantidad;
            }

       })
      return resul
      
    }


}
const r=new Jugador("Jhosua","Rincon","9587458","ninguna");
var d=new Jugador("Andres","Rincon","942558","una");
console.log(r)
console.log(d)
d.gettarjetas("amarilla",5)
r.gettarjetas("roja",6)
console.log(d)
r.getequipo("Colombia",12);
console.log(x)
var f= r.objllenado()
console.log(f);
r.gettarjetas("amarilla",5)
console.log(d)
const g = r.Tarjecolores();
console.log(g)


