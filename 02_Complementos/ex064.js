/*
Exercício 064:

Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade 
de vezes que  o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá 
diferenciar maiúsculas de minúsculas.
*/

function contaCaracter(caractere, frase){
    let qntCaracteres = 0
    
    for (let letra of frase){
        if (letra == caractere) {
           qntCaracteres++ 
        }            
    }

    return qntCaracteres
}

console.log(contaCaracter("r", "A sorte favorece os audazes"))