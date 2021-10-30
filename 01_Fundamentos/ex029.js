/*
Exercício 029:

Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste 
vetor estão no intervalo [10,20] e quantos deles estão fora do intervalo, escrevendo estas informações.

OBS: Repare que o intervalo é fechado, ou seja, inclui o 10 e o 20.
*/

function intervaloNumeros(vetor){

    let vetorIntervalo = []
    let qntdIntervalo = 0

    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            vetorIntervalo.push(vetor[i])
            qntdIntervalo++
        }
    }

    return `Temos ${qntdIntervalo} valores no intervalo entre 10 e 20, sendo: [${vetorIntervalo}]`
}

let vetorNumeros = [7, 8, , 10, 11, 12, 16, 17, 18, 19, 20, 35, 42]
console.log(intervaloNumeros(vetorNumeros))