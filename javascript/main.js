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

// console.log(numero_secreto);

var mensaje = "ingresa un numero para adivinar el numero magico";

// while(true){
//     var numero_del_usuario = prompt(mensaje, "0");

//     numero_del_usuario = parseInt(numero_del_usuario);
    
//     if(numero_del_usuario === numero_secreto){
//         alert("ganaste");
//         break;
//     }
//     else if(numero_del_usuario === 0){
//         break;
//     }
//     else if(numero_del_usuario > numero_secreto){
//         mensaje = "lo sentimos el numero es mayor a  el numero magico";
//     }
//     else if(numero_del_usuario < numero_secreto){
//         mensaje = "lo sentimos , el nmero es menor al numero magico";
//     }
    
// }

//selecionar elementos

// var div = document.getElementById("constent-div");

// div.classList.add("style"); 

//eventos en javascript

// document.getElementById('btn').onclick = function(){
//     alert('Hey Alerta Wey!');
// }


// var button = document.getElementById("btn");
//     button.onclick = function(){
//         alert("hola mundo")
//     }
 

// arreglos

// var arreglo = [20, 2, 5];
// var i = arreglo.length;
// for(;i>= 0; i--){
//     // console.log(arreglo[i]);
// }


// function suma (a, b){
//     return a * b;
    
//}
    // console.log(suma(5,100))

    // condiciones para arreglos

    // function ordenacion(a, b){
    //     return a -b;
    // }

    // var arreglo = [2,3,4,5,66,7]

    // arreglo.sort(ordenacion);
    
    // arreglo.reverse();

    // console.log(arreglo)


    // filter

    // var numeros = [10,24,33,44,80,16]
    // var nuemros_pares = numeros.filter(function(numeros){
    //     return numero % 2 ===0
    // })

    // console.log(nuemros_pares)

    //map funcion

    // var numero = [1,22,45,66,777]

    // var cuadado = numero.map(function(elemento){
    //     return elemento* elemento;
    // })

    // console.log(cuadado)

    //forEach

    // var numeros = [2,4,6,8];

    // numeros.forEach(function(element, index , arreglo){
    //     arreglo[index] = Math.pow(element,2)
    // })

    // console.log(numeros)

    // var letra = ["H","O","L","A"]

    // var numeross = [20,1,23,1,5]
    // var suma = numeross.reduce(function(valor_anterior_retornado, valor_actual, index, arreglo){
    //     return valor_anterior_retornado+ valor_actual;
    // });
    // console.log(suma)

    // var suma = 0;
    // for(var i =0; i<numeros.length;i++){
    //     suma += numeross[i]
    // }

    // console.log(suma)

// intro a nueva etapa
(function(){
    document.getElementById("btn").onclick = function(){
    console.log("hola ")
      
}

setTimeout(function(){
    console.log(hola_mundo(" dariel la maxima"));
},2000);

})();

function hola_mundo(nombre){
    function construct(){
        return "hola"+nombre;
    }
    return construct()
}