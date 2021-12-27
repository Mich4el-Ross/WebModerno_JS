/*
Exercício 067:

Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
    
    - Ao lançarmos esse objeto { a: 1, b: 2, c: 3} deverá ser retornado { 1: "a", 2: "b", 3: "c"}
*/

function inverteObj(objeto){
    let parChaveValor = Object.entries(objeto)
    let objetoInvertido = {}

    for( let elemento of parChaveValor){
        let chave = elemento[0]
        let valor = elemento[1]
        objetoInvertido[valor] = chave
    }

    return objetoInvertido
}

console.log(inverteObj({ a: 1, b: 2, c: 3}))