/*
Exercício 063:

Crie uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/

function contarPalavras(frase){
    let arrayPalavras = frase.split(' ')
    let qntdPalavras = arrayPalavras.length
    return qntdPalavras
}

console.log(contarPalavras("JavaScript é uma linguagem de programação muito versátil")) 
console.log(contarPalavras("Me divirto aprendendo a programar")) 