/*
Exercício 052:

Escreva uma função que receba um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de 
uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade 
especificada no segundo parâmetro.
*/

function removerPropriedade(objeto, propriedade){

    let copiaObjeto = Object.assign({}, objeto) 
    delete copiaObjeto[propriedade]

    return copiaObjeto
}

console.log(removerPropriedade({nome: "João Carlos", idade: 26, estadoCivil: "solteiro"}, "estadoCivil"))