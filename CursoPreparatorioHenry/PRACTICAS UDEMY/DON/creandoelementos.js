/*
para poder agregar caja debemos seguir tres pasos.
*/
let conta=1;
const agregarcaja=()=>{
    /* 1. cramos un elemento con el motodo:
    createElement => recibe como parametro una cadena de texto con la etiqueta que queremos crear
    */
    const nuevacaja=document.createElement('div');

    /* 
    2. Agregamos texto y atributos
    */
   
   nuevacaja.innerText=`Caja Nueva ${conta}`;
   nuevacaja.setAttribute('class','caja')
   conta++

   /*
   3. Agregamos el elemento al DOM.
   */
  const contenedor=document.getElementById('contenedor1');

  /*
   4. Utilizamos el metodo  .appenChild()  => este agrega un elemento al final.
   hay otro metodo llamado insertAdjacentElement => este es el que nos va a permitir agragar  nuestra
   nueva caja en cuatro lugares diferentes.
   Los diferentes Valores que se le podrian trabajar:

   afterbegin => como primer elemento.
   beforebegin => Antes del elemento Padre.
   beforeend => como Ultimo elemento.
   afterend => Despues del elemento padre.

  */
    // contenedor.appendChild(nuevacaja); este codigo esta bien solo lo comentareo para poder ver la propiedad  insertAdjacentElement
   
    contenedor.insertAdjacentElement('beforeend',nuevacaja);

    /*
    Podemos utiliazr otro metodo que es reemplazar cajas este metodo tiene como nombre:
    .replaceWith() => Nos permite Reemplazar un elemento por Otro
    */

    document.querySelector('#contenedor1 .caja').replaceWith(nuevacaja)

}