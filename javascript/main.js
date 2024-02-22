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
// (function(){
//     document.getElementById("btn").onclick = function(){
//     console.log("hola ")
      
// }

// setTimeout(function(){
//     console.log(hola_mundo(" dariel la maxima"));
// },2000);

// })();

// function hola_mundo(nombre){
//     function construct(){
//         return "hola"+nombre;
//     }
//     return construct()
// }

//json => javascript object notation
// diccionario / hashe
// this tambien

// var arreglo= [1,2,3,4,5,]

// var curso = {
//     titulo: "curso de javascript",
//     videos: 19,
//     tutor: "Uriel",
//     introducion: function(){
//         console.log("bienvenido a:" + this.titulo, "hay mas de " +  this.videos, "videos", "u nuestro profesor es ", this.tutor )
//     }
// }


// console.log(curso.introducion());

//declaracion de objetos  con funciones

// function tutor (nombre, apellido) {
//     this.nombre = nombre;
//     this.saludar = function(){
//         console.log("hola a todos soy"+this.nombre)
//     }
//     if(typeof apellido !== "undefined"){
//         this.nombre_comleto = nombre+""+ apellido
//     }
// }

// var dariel = new tutor("dariel","mota");

// dariel.saludar();

// console.log(dariel.nombre_comleto);

// var jose = new tutor("jose");

// jose.saludar();

//prototupe


// function tutor (nombre, apellido) {
//     this.nombre = nombre;
//     this.saludar = function(){
//         console.log("hola a todos soy"+this.nombre)
//     }
//     if(typeof apellido !== "undefined"){
//         this.nombre_comleto = nombre+""+ apellido
//     }
// }

// var dariel = new tutor("dariel","mota");
// tutor.prototype.edad = 17
// tutor.proyecto.iniciar_tutorial = function (){
//     console.log("nienvenidos a este nuevo turtorial")
// }

// uriel.iniciar_tutorial();


//getters y setters

// var curso = {
//     titulo: "hola mundo",
//     tutor_value: "uriel",get tutor(){
// return this.tutor_value.toUpperCase()
//     } ,
//     set tutor(tutor){
//         if (tutor === "" || (typeof tutor === "undefined")){
//             return;
//         }
//         this.tutor_value = tutor;
//     }
// }


// curso.tutor="";
// console.log(curso.tutor);

(function(){
    self.Board = function(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null
    }

    self.Board.prototype = {
        get elements(){
            var elements = this.bars;
            elements.push(ball);
            return elements
        }
    }
})();

(function(){
    self.BoardView = function(canvas, board){
        this.canvas = canvas;
        this.canvas.width= board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d")
    }

    self.BoardView.prototype = {
        draw: function(){
            for (var i = this.board.element.length -1; i>= 0; i--){
                var el = this.board.elements[i];

                draw(this.ctx,el)
            }
        }
    }

    function draw(ctx, element){
        if(element !== null && element.hasOwnProperty("kind")){
            switch(element.kind){
                case "rectangle":
                    ctx.fillRect(element.x,element.y,element. width,element.height)
                    break;
            }
        }
        
    }

})();

(function(){
    self.Bar = function(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";
    }

    self.Board.prototype = {
        down: function(){

        },
        up: function(){

        }
    }
})

self.addEventListener("load",main);

function main(){
    console.log("hola mundo");
    var board = new Board(800,400);
    var bar = new Bar(20,100,40,100,board)
    var bar = new Bar(735,100,40,100,board)
    var canvas = document.getElementById("canvas");
    var board_view = new BoardView(canvas, board)
}

main()