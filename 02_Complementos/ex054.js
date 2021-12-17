/*
Exercício 054:

Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.
*/

function objetoArray(objeto) {
    
    let arrayPropriedades = []
    let arrayValores = []

    for (let elemento in objeto) {
        arrayPropriedades.push(elemento)
        arrayValores.push(objeto[elemento])
    }

    return [arrayPropriedades, arrayValores]
}

console.log(
    objetoArray({nome: "José", idade: 35, profissao: "Desenvolvedor FrontEnd"})
)