// FUNCIÓN CONSTRUCTORA
function Auto1(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
 }
 let miPrimerAuto = new Auto1(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);

 // EXPRESIÓN DE CLASE
class Auto{
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
 }
 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);



 //PORTOTIPOS Y HERENCIA:

 Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
           if (this[ i ] > 3) {
                  arregloModificado.push(false);
           } else {
                  arregloModificado.push(this[ i ]);
           }
    }
    return arregloModificado;
 };
  
 var arreglo = [1, 2, 3, 4, 5];
 var nuevoArreglo = arreglo.mayorQueTres();
 console.log(nuevoArreglo);

//SEGUNDA FORMA
 class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};
 
//SE CREA EL METODO.....
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);


//EXTENSION DE CLASES:


class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log('Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad + ' Años');
    }
 }
 var mar = new Persona('Martin', 26);
 mar.saludar();


 class Programador extends Persona { // con  este palabra extends lo que hacemos es dicirle a javaScript
   // que vamos a extender la clase persona a la clase programador
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);//con este palabra clave super lo que hacemos es decirle que vamos a utilizar 
       // las prpiedades de la clase persona.
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log('Soy ' + this.nombre +' . Codeo desde hace  ' + this.añosDeExperiencia +' años');
    }
    
 }
 
 var mar = new Persona('Martín', 26);
 var programador = new Programador('María', 40, 4);
 mar.saludar();
 programador.codear();
 programador.saludar();

