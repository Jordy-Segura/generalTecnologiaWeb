let cajaDeAndy = 'Woody'
console.log(cajaDeAndy)


let nombre = 'Jordy'
let edad = 20

console.log(nombre)
console.log(edad)

let carro = {
    marca: 'Tesla',
    modelo: 'Model S'
}
console.log(carro)
let frutas = ['manzana', 'banano', 'uvas']
console.log(frutas)


function saludar () {
    console.log('Hola, soy ' + nombre)
}
saludar()



let string1 = 'Hola Mundo'
let string2 = "Javascript es genial"
let string3 = `${string1} feliz :D`
let string4 = 'El carro es un ' + carro.marca + ' ' + carro.modelo

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

let frase = 'Javascript es un lenguaje de programación muy popular'
console.log(frase)
console.log(frase.length)
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(frase.substring(0, 10))

const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

const suma = 3 + 4
const resta = 10 - 5
const multiplicacion = 6 * 7
const division = 20 / 4
const modulo = 10 % 3
const potencia = 2 ** 3
console.log(suma, resta, multiplicacion, division, modulo, potencia)

const resultado = 0.1 + 0.2
console.log(resultado) 
const  resultado2 = resultado.toFixed(2)
console.log(resultado2) 
console.log(resultado2 == 0.30) 
console.log(typeof resultado2) 

