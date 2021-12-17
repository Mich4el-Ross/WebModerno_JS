/*
Exercício 055:

Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

function arrayParDeIndicePar(array) {
    let arrayFinal = []

    for(const elemento of array){
        if(elemento % 2 == 0 && array.indexOf(elemento) % 2 == 0){
           arrayFinal.push(elemento) 
        }
    }

    return arrayFinal
}

console.log(arrayParDeIndicePar([1, 2, 3, 4]))
console.log(arrayParDeIndicePar([6, 80, 32, 53]))