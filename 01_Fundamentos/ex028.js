/*
Exercício 028:

Ler um vetor de números inteiros e imprimir quantos são pares e quantos são 
ímpares, mostrando eles ao final.
*/

function analisaVetor(vetor){

    let contPar = 0
    let contImpar = 0
    let vetorPar = []
    let vetorImpar = []
    
    for (let valor of vetor) {
        if (valor % 2 == 0) {
            vetorPar.push(valor)
            contPar++
        } else {
            vetorImpar.push(valor)
            contImpar++   
        }
    }

    return `Temos ${contPar} valores pares, sendo eles: [${vetorPar}] \nTemos ${contImpar} valores impares, sendo eles: [${vetorImpar}]`
}

let vetorNumeros = [1, 6, 9, 16, 68, 3, 12, 5]
console.log(analisaVetor(vetorNumeros))