// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

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
console.log(atuendos);



var persona={};
var persona={
nombre: 'Jairo',
apellidos:'Rincon Gututierrez',
edad:41,
estado:'casado',
hijos:'2',
esposa:'Helen',
}

var carro={};
var carro={
marca:'Ch0evrolet',
tipo:'camioneta',
color:'roja',
}
console.log(persona.nombre, persona.apellidos, 'tiene un Carro marca:',carro.marca, carro.tipo,'de color ',carro.color);
