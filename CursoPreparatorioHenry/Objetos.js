// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);
console.log(persona.estudios);
// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);


// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);


// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log("atuendos333333",atuendos);



var persona={};
var persona={
nombre: 'Jairo',
apellidos:'Rincon Gututierrez',
edad:41,
estado:'casado',
hijos:'2',
esposa:'Helen',
}


var carro={
marca:'Ch0evrolet',
tipo:'camioneta',
color:'roja',
}
console.log(persona.nombre, persona.apellidos, 'tiene un Carro marca:',carro.marca, carro.tipo,'de color ',carro.color);
console.log('===============================================================');
// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log('devuelve false o true el objero HAS OWN PROPERTY========>',tienePropiedad);

console.log('===============================================================');

// KEYS
console.log('=================FUNCION KEYS================ ')

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

console.log('=================FUNCION KEYS================ ')

console.log('============ for---in===================');

var mundo={
    continentes:7,
    oceanos:5,
    mares:2,
}

for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }

 console.log('============ for---in===================');


console.log('============uso de la funcion THIS======================================')

//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function () {
       console.log('Mi perro es un  ' + this.raza);
    },
 };

 mascota.info();

 for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
 }
 