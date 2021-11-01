/*
Exercício 035:

Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao 
vetor pilha e mostrá-los no console.  Ao
final das operações imprima os vetores no console.
*/

function addVetor(vetorInicial, vetorAdicionar){

    let vetorFinal = vetorInicial

    for (let i = 0; i < vetorAdicionar.length; i++){
        vetorFinal.push(vetorAdicionar[i])
    }

    return `Vetor Adicionado: [${vetorAdicionar}] \nVetor Final: [${vetorFinal}]`
}

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

console.log(addVetor(vetorPilha, vetorAdiciona))