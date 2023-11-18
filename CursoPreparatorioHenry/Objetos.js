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
    luna: 'false',
    raza: 'true',
    amistoso: 'true',
    dueño: 'María López',
    info: function () {
       console.log('Mi perro es un  ' + this.raza);
    },
 };

 mascota.info();
 var conta=0
 
 var invitados={
    luna:{
        vegan: false
    },
    andres:{
        vegan: false
    },
    helen:{
        vegan: false
    },
    jhosua:{
        vegan: true
    }
 }

 for (const key in invitados) {
    console.log(invitados[key].vegan)
    
        if (invitados[key].vegan===true){
            conta = conta+1;
        };
        
 }
 console.log(conta)

function repite(f){
console.log(f)
var conta =1 
var ct=0
var r=[]
for(i=0;i<f.length;i++){
    if(f[i]===f[conta]){
        r[ct]=f[i]
        var ct=ct+1
        
           }
           conta=conta+1
}
console.log(r)
console.log(conta)
console.log(ct)
   
 
 }
var d=[1,2,3,4,1,1,1,1,1]
var x=repite(d)
console.log(x)
 function personajes(perso){
    var t=[]
    var dt=[]
    var ft=[]
    var str=[]
    console.log(perso)
   var d=perso.map(function(x){
           return x.split(' ').join(' ')
   })
   console.log(d)
   var g=d.map(function(x){
         if(x.includes('targaryen')){
            return dt= x.join(' ')
         }
        
   })
    var ft=g.join('') + " of Hause Targaryen"
   
   str.push(ft.toUpperCase())
   return str


 }
 var d=['jairo','show','Lannister']
 var x= personajes(d)
 console.log(x)


 function ordenar(dat){
    var dr= dat.join(' ')
    var d= dr.trim()
    return d


 }
 var d=[' jairo','show','Lannister!']
 var x=ordenar(d)
 console.log(x)