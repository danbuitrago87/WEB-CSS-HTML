/*Crear una función que muestre "¡Hola, mundo!" en la consola.*/
mostrarenConsola();
function mostrarenConsola(){
    console.log('Hola mundo!');
}

/*Crear una función que reciba un nombre como parámetro 
y muestre "¡Hola, [nombre]!" en la consola.*/
let nombre=prompt("Digite su nombre: ");
function peticionNombre(){    
    console.log(`Hola ${nombre}!`);
}
peticionNombre();

/*Crear una función que 
reciba un número como parámetro y devuelva el doble de ese número.*/
let numero=parseInt(prompt("Digite un numero: "));
function peticionNumero(){
    res=numero*2;
    console.log("El doble del número es: " +res);
}
peticionNumero();

/*Crear una función que reciba un número como parámetro 
y devuelva el resultado de multiplicar ese número por sí mismo.*/
function cuadrado(){
    let cuad=numero*numero;
    console.log("El cuadrado del número es: " +cuad);
}
cuadrado();

//FUNCION PARA ASIGNAR TEXTO A UN ELEMENTO HTML (HEADER h1) 
function asignarTexto(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;    
}
asignarTexto('h1', 'BIENVENIDO!');
asignarTexto('p',nombre);

/*Crear una función 
que reciba tres números como parámetros y devuelva su promedio.*/
alert("PROGRAMA PARA HACER PROMEDIO DE TRES NÚMEROS")
let num1=parseInt(prompt("Digite el primer número: "));
let num2=parseInt(prompt("Digite el segundo número: "));
let num3=parseInt(prompt("Digite el tercer número: "));
function promedio(){
    let prom=(num1+num2+num3)/3;
    console.log("El promedio es: " +prom);
    console.log(typeof(prom));
    return prom;
}
promedio();

/*Crear una función que 
reciba dos números como parámetros y devuelva el mayor de ellos.*/
function comparar(){
    if (num1>num2>num3){
        console.log("El número mayor es: " +num1);
    }else if(num2>num1>num3){
        console.log("El número mayor es: " +num2);
    }else {
        console.log("El número " +num3+ " es mayor");
    }
}
comparar();


