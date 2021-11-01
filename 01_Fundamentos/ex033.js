/*
Exercício 033:

Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. 

OBS: Todos os elementos do vetor resultado deverão aparecer no console.
*/

function concatenarVetores(...args){

    let vetorFinal = []

    for (let i = 0; i < arguments.length; i++) {
        vetorFinal = vetorFinal.concat(arguments[i])
    }

    return vetorFinal
}

let vetorString = ['A', 'B', 'C', 'D']
let vetorInteiro = [1, 2, 3, 4]
let vetorDouble = [5.1, 6.1, 7.1, 8.1]

console.log(concatenarVetores(vetorString, vetorInteiro))
console.log(concatenarVetores(vetorString, vetorDouble))
console.log(concatenarVetores(vetorInteiro, vetorDouble))