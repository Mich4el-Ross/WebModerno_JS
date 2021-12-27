/*
Exercício 068:

Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/

function qntdDigitos(numeros, algarismosDesejados){
    return numeros.filter( numero => {
        let qntAlgarismos = String(numero).length
        return qntAlgarismos === algarismosDesejados
    })
}

console.log(qntdDigitos([38, 2, 365, 10, 125, 11], 2))