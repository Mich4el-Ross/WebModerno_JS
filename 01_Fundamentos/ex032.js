/*
Exercício 032:

Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function media(vetor){
    
    let soma = 0
    let qntdNotas = vetor.length

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    let media = soma / qntdNotas

    return `A média é ${media}`
}

let vetorNotas = [5, 8, 9, 7]
console.log(media(vetorNotas))