/*
Exercício 030:

Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorMenor(vetor){
    
    let maior = vetor[0]
    let menor = vetor[0]

    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if ( vetor[i] < menor ) {
            menor = vetor[i]
        }
    }
    
    return `Maior valor: ${maior} \nMenor valor: ${menor}`
}

let vetorNumeros = [5, 8, 6, 7, 34, 15, 26, 0, 31, 14]
console.log(maiorMenor(vetorNumeros))