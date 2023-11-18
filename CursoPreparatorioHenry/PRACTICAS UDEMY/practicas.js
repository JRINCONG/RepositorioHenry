//const numero1=parseInt(prompt("Escribe el primer Numero.."));
//const numero2=parseInt(prompt("Escribe el segundo Numero.."));
//console.log(numero1 + numero2);


const numero=Math.random()
const aleatorio=Math.floor(numero*100);
console.log(aleatorio)


const x=["manzana","pera","banano","uvas","piña"];
x.push("patilla");
const comidafavorita=["pizza","arros de coco",...x];
console.log(comidafavorita)
const array=[]
console.log(comidafavorita.length)
for(var i=0;i<comidafavorita.length;i++){
     array[i]=comidafavorita[i];
}
console.log(array)



const registrar=(nombre,mail,...datosAdi)=>{
    console.log(nombre, mail, datosAdi);
    console.log(datosAdi)

}
 registrar("jairo","rincon303@hotmail.com",41,"colombia","programador","canada");

 const Datos={
    nombre:"jairo",
    edad:41,
    pais:"colombia",
    Ocupacion:"Programador"
 }

 const {nombre,pais,Ocupacion}=Datos;
 console.log(nombre,pais,Ocupacion)


 for(var i=50;i>=1;i--){
    console.log(i)
 }