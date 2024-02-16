//intro a javascript

var palabra = "dariel";
var palabra2 = "mota";
// document.querySelector("body").innerHTML = " Hola Mundo";

// operadores aritmeticos :suma"+", resta"-" multiplicacion"*", divicion"/";

 var nuemro = 16;
 var numero2 = 587;
 var resultado = nuemro / numero2;
//  console.log(resultado + 5)


// cadenas

var nombre = "juan";
if( nombre.indexOf("dariel") != -1){
    // console.log(" wellcome to the one piece")
} else{
    // console.log("fuck you")
}

//operadores logicos:and"&&", not"!", igual"=", igual estricto"===", igual o diferente"!=", igual o diferente estricto"!==";

var primero = 30;
var segundo = 150;
var numero = 500;

if(primero < segundo && numero > segundo ){
    // console .log("si")
}

else if (true) {
    // console.log("no mio la maco")
};

//ciclo while

var contador = 0;
while (  contador <= 100) {
    contador++
    // console.log(contador)
}

do{
    contador++ 
    // console.log(contador)
} 
   
while(contador < 1000)

//typeof null underfile

var nombre = "hola";

// console.log(typeof nombre)

var num = null;

if (typeof hola == "undefined") {
//     console.log("hola que hace")
// console.log(undefined)
}

//ciclo for

for (let i = 0; i < 10; i++){
    // console.log(i)
}

//practica 1

//numero maximo
var max = 100;

//numero minimo
var min = 1;

//numero aleatorio
var numero_secreto = Math.random() * (max-min) + min;
numero_secreto = parseInt(numero_secreto);
//0.....1 esto es de la propiedad math es a los numero o cantidad que llega

console.log(numero_secreto);

var mensaje = "ingresa un numero para adivinar el numero magico";

while(true){
    var numero_del_usuario = prompt(mensaje, "0");

    numero_del_usuario = parseInt(numero_del_usuario);
    
    if(numero_del_usuario === numero_secreto){
        alert("ganaste");
        break;
    }
    else if(numero_del_usuario === 0){
        break;
    }
    else if(numero_del_usuario > numero_secreto){
        mensaje = "lo sentimos el numero es mayor a  el numero magico";
    }
    else if(numero_del_usuario < numero_secreto){
        mensaje = "lo sentimos , el nmero es menor al numero magico";
    }
    
}