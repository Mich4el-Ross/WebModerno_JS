/*
Exercício 066:

Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente 
com as consoantes, ou seja, sem as vogais.
*/

function removeVogais(palavra){
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let palavraFinal = ''
    palavra = palavra.toLowerCase();

    for (let letra of palavra) {
        if (vogais.includes(letra)){
            continue
        } else {
            palavraFinal+= letra
        }
    }

    return palavraFinal
}

console.log(removeVogais('Fundamentos'))