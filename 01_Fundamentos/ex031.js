/*
Exercício 031:

Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function vetorNegativo(vetor){

    let qntdNegativos = 0

    for (let valor = 0; valor < vetor.length; valor++){
        
        if(vetor[valor] < 0){
            qntdNegativos++
        }
    }

    return `Foi encontrado ${qntdNegativos} números negativos no vetor passado.`
}

let vetorNumeros = [0, -5, 8, 9, 6, -10, -75, -11, 15, -20, -36]
console.log(vetorNegativo(vetorNumeros))