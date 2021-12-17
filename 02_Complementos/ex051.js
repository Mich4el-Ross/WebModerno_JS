/*
Exercício 051:

Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array.
*/

function novoArray(array){
    
    let primeiroEl = array[0]
    let ultimoEl = array[array.length - 1]

    return [primeiroEl, ultimoEl]
}

console.log(novoArray([-100, "aplicativo", 16]))