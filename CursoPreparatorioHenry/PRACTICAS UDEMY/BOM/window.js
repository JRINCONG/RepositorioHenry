
let ventana;
let url;
let array=[]



let cuenta=0;
let id;
let kook;

const AbrirVentana=()=>{
   
 // console.log(`el tamaño de mi ventada de windows es en ${window.innerHeight} Alto px  y el ancho es ${window.innerWidth} px` )
  //ventana= window.open("blank","Mi nueva ventana","width=500,height=500")
  //ventana.document.write("<head><title>Mi primera pagina</title></head><body><h1>este es una nueva venta y escribimos directamente en la pagina.</h1></body>")
  //console.log(`El alto de mi monitor es:${window.screen.height}`)
 // console.log(`El ancho de mi monitor es:${window.screen.width}`)
 // console.log(`El alto real de mi monitor sin barras  de mi monitor es:${window.screen.availHeight}`)
  //console.log(`El ancho real de mi monitor sin barras de mi monitor es:${window.screen.availWidth}`)
 /*let dato= prompt("Estas de Acuerdo con lo acordado");
 console.log(dato);
  */
   //setTimeout(callback,5000)
  id=setInterval(()=>{
    console.log(cuenta);
    cuenta++;
  },1000)

}

const callback=()=>{
  alert("Hola Jhosua como estas... ");
 }
/*
Otro metodo para Windows, tal como comenta Pablo en uno de los comentarios y es usar AltGr + } y luego espacio,
 o Ctrl + Alt + } y luego espacio, ambos funcionan perfectamente en Windows segun pude probar, 
 y Linux me funciona bien el primero es decir AltGr + } y luego espacio, no asi Ctrl+Alt…

*/

const CerrarVentana=()=>{
//ventana.close()
console.log("parando cuenta!!!!")
alert("el ultimo numero que llego fue "+ cuenta);
clearInterval(id);
}


const crear=()=>{
  let nombre=prompt("Cual es su nombre de Usuario");

 document.cookie=`nombre=${nombre}; expires= 1 Dec 2023 01:00:00 UTC`;
 alert(`Sesion Iniciada como:  ${nombre}`);

}
//kook=document.cookie;
//console.log(kook)


const Eliminar=()=>{

  document.cookie=`nombre=""; expires= 1 Jul 2023 01:00:00 UTC`;
  alert(`Session Cerrada Gracias`);


}
const cargar=()=>{
   kook = document.cookie;  
   let separa=kook.split('=')[1]

  if(separa){
     console.log(`Hola como estas `+ separa);
  }else{
    console.log(`Debe iniciar session porfavor`);
  }
  
}
