const elemento=document.getElementById(`contenedor1`);
console.log(elemento);
console.log("Elementos Hijos")
console.log(elemento.children);
let elementohijos=elemento.children
let nombre=elementohijos.item
console.log(nombre)

let arreglo=[...elementohijos]
console.log(arreglo)

//for(var i=0;i<arreglo.length;i++){
    
   //arreglo.push(arreglo[0]);
    //arreglo[i].className="caja1";
//}

console.log(elemento.parentElement)
console.log("=============================")
let div=document.getElementsByTagName("div")
console.log(div)
//let div_arragelo=[...div]
//console.log(div_arragelo)
//console.log("=========")
//for(var i=0;i<div_arragelo.length;i++){
//    console.log(div_arragelo[i]);
//}

let contenedor=document.getElementsByClassName("contenedor");
console.log(contenedor);

console.log("========= video 64 ========")

let caja=document.querySelector("#contenedor1");
console.log(caja)
console.log("metdo querySelector========")
let caja1=document.querySelector("#contenedor1 .caja");
console.log(caja1)

console.log("======== metdo querySelectorAll() ========");

let cajas=document.querySelectorAll("#contenedor1 .caja")
console.log(cajas)

cajas.forEach((caj)=>{
    console.log(caj)

})
console.log("ITERACION CON NODELIST CON FOR NORMAL")
for(var i=0;i<cajas.length;i++){
    console.log(cajas[i])
}

console.log("========= Metodo CLOSEST ===========")

let ultimacaja=document.querySelector('.caja:last-child');
console.log(ultimacaja); 

// me busca la ultima caja del contenedor2
 console.log("me busca la ultima caja del contenedor2")

let ultimacaja_Cont2=document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimacaja_Cont2); 

//Buscamos con base la referencia de ultimacaja_Cont2 el contenedor principal con el metodo CLOSEST

console.log(ultimacaja_Cont2.closest('.contenedor-principal'));

/*
PODEMOS EN CADENAR TODOS LOS METODOS PARA OBTENER ELEMENTOS EJ:
*/
let contenedor2=document.getElementById('contenedor2');
console.log(contenedor2.querySelectorAll('.caja'));