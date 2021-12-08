/*
Exercício 049:

Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, 
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repetir(elemento, vezes){
    let array = []
    
    for(let i = 0; i < vezes; i++){
        array.push(elemento)
    }

    return array
}

console.log(repetir('livro', 4))
console.log(repetir(0, 5))