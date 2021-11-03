/*
Exercício 039:

Crie uma função que receba dois vetores inteiros de igual tamanho e troque seus elementos de modo 
que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim 
sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
*/

function trocarVetores(vetorA, vetorB){

    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log(`Novo vetor A: ${[vetorA]}`)
    console.log(`Novo vetor B: ${[vetorB]}`)
}

let vetor1 = [0, 0, 0, 0]
let vetor2 = [1, 2, 3, 4]
trocarVetores(vetor1, vetor2)