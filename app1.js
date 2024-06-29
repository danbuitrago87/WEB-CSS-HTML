//FUNCION PARA ASIGNAR TEXTO A UN ELEMENTO HTML (HEADER h1) 
asignarTexto('h1', 'BIENVENIDO!');
function asignarTexto(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;    
}

/*Crear una función que muestre "¡Hola, mundo!" en la consola.*/
mostrarenConsola();
function mostrarenConsola(){
    console.log('Hola mundo!');
}

/*Crear una función que reciba un nombre como parámetro 
y muestre "¡Hola, [nombre]!" en la consola.*/
function peticionNombre(){
    let nombre=prompt("Digite su nombre: ");
    console.log(`Hola ${nombre}!`);
}
peticionNombre();

/*Crear una función que 
reciba un número como parámetro y devuelva el doble de ese número.*/
function peticionNumero(){
    let numero=parseInt(prompt("Digite un numero: "));
    res=numero*2;
    console.log(res);
}
peticionNumero();



