/*
Exercício 069:

Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
*/

function segundoMaior(numeros){
    let numerosDecrescentes = numeros.sort((a, b) => b - a)
    let segundoMaiorNumero = numerosDecrescentes[1]
    return segundoMaiorNumero
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))