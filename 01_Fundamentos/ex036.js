/*
Exercício 036:

Crie uma função que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que essa função retorne outro vetor que será resultado da multiplicação de 
cada elemento pelo número passado como parâmetro. 
*/

function multiplicadorVetor(vetor, multiplicador){

    let vetorResultado = []

    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    });

    return vetorResultado
}

let vetorNumeros = [1, 2, 3, 4, 5]
console.log(multiplicadorVetor(vetorNumeros, 3))