/*
Exercício 050:

Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

function simboloMais(quantidade){
    let string = ''

    for(let cont = 0; cont < quantidade; cont++){
        string += '+'
    }

    return string
}

console.log(simboloMais(5))