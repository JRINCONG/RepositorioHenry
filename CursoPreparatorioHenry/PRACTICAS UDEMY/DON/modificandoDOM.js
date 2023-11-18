let modcaja=document.querySelectorAll('.caja');
console.log(modcaja);

modcaja.forEach((caja)=>{
    if(caja.innerHTML==="Caja 3"){
        caja.innerHTML="Ultimas Cajas";
    }

})

/*
elemento.attribute:
Nos permite acceder y cambiar atributos del elemento.
*/

modcaja.forEach((caja)=>{
    if(caja.innerHTML==="Ultimas Cajas"){
        caja.id="id-123"
    }

})


/*
elemento.setAttribute():
Nos permite Agregar o establecer el valor de un atributo del elemento.
este elemento va ser mas especifico y decirle que queremos modificar o agregar un  atributo.
nos va a permitir todo mas controlado y agregar atributos personalizados.
a este metodo se le pasan dos parametros 1. se coloca el atributo que queremos modificar o
que queremos agregar, por ejemplo la clase y el 2. va hacer el valor ejemplo:  
*/
let primerelemento=document.querySelector('#contenedor2 .caja')
console.log("====")
primerelemento.setAttribute('class', 'caja activa')
console.log(primerelemento)

/*
podemos agregar atributos personalizados: estos atributos se agregan  mediante la palabra data, seguidode un - y
luego el nombre que uno quiera. ejemplo
*/

primerelemento.setAttribute('data-id', '123-123')
console.log(primerelemento)

/*
elemento.stye.property:
nos permite cambiar los estilos css de un elemento
*/
console.log("==================")
let propiedadstile=document.querySelectorAll('#contenedor1 .caja');

propiedadstile.forEach((caja)=>{
    caja.style.background="red"
    caja.style.color="White"
    caja.style.textTransform='uppercase'// nos convierte las cajas en mayusculas
})
