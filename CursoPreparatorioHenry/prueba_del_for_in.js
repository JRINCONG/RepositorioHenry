var mundo={
    continentes:7,
    oceanos:5,
    mares:2,
}

for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }