/*
Exercício 057:

Escreva uma função que receba um array de números e retornará a soma de todos os números desse array
*/

function somarValores(array){    
    let soma = 0
    array.forEach(elemento => soma += elemento);
    return soma
}

console.log(somarValores([10, 15, 20, 25]))