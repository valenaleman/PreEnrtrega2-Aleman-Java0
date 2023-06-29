// Almaceno valores

let numerocero;


// Asigno un dato a una vriable 

let numeroone= 2023; // Número almacena La - placita - Pañalera

// Datos

let frase;
frase = "La placita - Pañalera";

// Inicializo variables

let numerotwo= 2023;

// Constante

const PI = 6;

// Operación con strings

let texto1 = 'La placita';
let texto2 = ' - Pañalera';

let texto3 = texto1 + texto2; // 'La placita - Pañalera'

// Visualización de datos en la consola
let numero3 = 2023;
let txt = 'La placita - Pañalera'

console.log(txt);
console.log(numero3);

// Agrego popup

alert('Te vamos a pedir que ingreses el correo electronico');

let correo = prompt('Ingrese su correo electronico');

if (correo) {
    correo = prompt('Ingrese su correo electrónico');
    console.log('Verificando correo electrónico');
}else {
    alert('Por favor ingresar correo electrónico en el caso de no haberlo hecho');
}

// Tipo de dato booleano

let dato = true; // Tipo de dato booleano
dato = false; // tipo de dato booleano

if (true){
    console.log('Correo ingresado')
}

// Operadores de comparación

let a = 'Correo ingresado';
let b = 'Correo ingresado';
let resultado = a == b;

console.log(resultado);

if (a == b) {
    console.log('Correo ingresado')
}

// Estrictamente distinto
// resultado = a !== b;
// console.log(resultado);

resultado = a !== b;
console.log(resultado);

if (a !==b) {
    console.log('Son distintos')
}

// Para que necesita comprar en la pañalera

let necesidad = prompt ('Ingrese ingrese la palabra Madre si es para su hijo o ingrese la palabra Adulto si es para algun familiar')
const Madre = 'Madres que necesitan pañales o accesorios para bebés';

if (necesidad >= Madre) {
    console.log ('Le mostraremos nuestros productos para bebés') 
}else {
    console.log('Le mostraremos productos para adultos')
}

// Declaración de una función

function saludar() {
    alert('Hola');
}

// Ejecuto la función

saludar();
console.log('En esta página se mostraran pañales');
saludar();

// Declaración de la función 
function saludar () {
    alert('Hola como va!')
}

// Usando parametros

// Parametros de entrada

function saludarAUnCliente(nombreCliente) {
    alert('Hola' + nombreCliente + 'como va!');
}

let nombrethree;
nombrethree = prompt('Ingrese su nombre');

saludarAUnCliente(Cliente);

console.log('Hago otras cosas...')

// Ejemplo con parametros

function suma(num1,num2) {
 console.log(num1 + num2)
}

suma(3000,6000);

suma(5000,600);

suma('Hola','cliente');

let x;
let y;


x = 80;
y = 25;

// Validación de datos para no enviar cualquier valor por parametro

if (Number(x) && Number(y)) {
    suma(x,y);
}else {
    console.log('Parametros invalidos!');
}

// Retorno de un valor

// Ejemplo agregando a un carrito de compras un elemento

let total;


function agregarItemCarrito(totalCarrito, precio, cantidad); {
    return totalCarrito + precio*cantidad;
}

function mostrarTotalCarrito(totalCarrito) {
    console.log('Total con el nuevo item añadido' + total);
}

function vaciarCarrito() {
    console.log('Vaciamos los items del carrito');
    return 0;
}

console.log('total del carrito:' + total);

total = agregarItemCarrito(total, 5000, 600);
mostrarTotalCarrito(total);
total = agregarItemCarrito(total, 3000, 6000);
mostrarTotalCarrito(total);
total = vaciarCarrito();


// Función con error 

function calculadora(num1, num2, operacion) {
    switch(operacion) {
        case '+' :
                 return num1 + num2;
                 console.log('Hola');
                 break;
        case '-' :
                 return num1 - num2;
                 break;
    }
}

// Expresión de función - función anonima

function saludar() {
    alert('Hola, ¿cómo va?')
}

// En forma de expreción de función

const saludar = function () {
    alert('Hola, ¿cómo va?');
}

saludar();

function usarLaFuncion(unaFuncion) {
    unaFuncion();
}

usarLaFuncion(function() {
    alert('Hola, ¿cómo va?');
})

// Otra expresión de función - Arrow function

const saludar = () => {alert('Hola, ¿cómo va?')};

saludar();

// Nos planteamos una calculadora
/*
 1- + sumar
 2- - restar
 3- / dividir
 4- * multiplicar
*/

const SUMAR = 1; 
const RESTAR = 2;
const DIVIDIR = 3;
const MULTIPLICAR = 4;

let num1;
let num2;
let resultado0 = 0;
let opcion;
let operacion = 

alert('Bienvenido a la calculadora');
num1 = parseFloat(prompt('Ingrese un número'));
num2 = parseFloat(prompt('Ingrese otro número'));
opcion = parseInt(prompt(` 1- + sumar \n
                  2- - restar \n
                  3- / dividir \n
                  4- * multiplicar \n
                  Ingrese su opción:`));

if (opcion === 1) {
    resultado = num1 + num2;
} else {
    if (opcion === RESTAR) {
        resultado = num1 - num2
    } else {
        if (opcion === DIVIDIR) {
            resultado = num1 / num2;
        } else {
            if (opcion === MULTIPLICAR) {
                resultado0 = num1 * num2
            }
        }
    }
}

console.log('El resultado es:' + resultado0)

// Una persona

let nombre;
let apellido;
let producto;
let mail;

// Un contacto de una persona

nombre = 'Maria'
apellido = 'Gonzales'
producto = 'Pañales'
mail = 'mariagonzales00@gmail.com'

// Forma literal de declaración de objetos 
const persona1 = {nombre: 'Maria', apellido: 'Gonzales', producto: 'Pañales', mail: 'mariagonzales00@gmail.com'}

console.log(persona1); 