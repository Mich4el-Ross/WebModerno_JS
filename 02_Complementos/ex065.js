/*
Exercício 065:

A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes. Escreva uma função que recebe como primeiro parâmetro uma palavra e, 
como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm 
nelas a string do primeiro parâmetro.
*/

function palavrasSemelhantes(stringBusca, palavras){
    let resultado = []
    stringBusca= stringBusca.toLowerCase()
    
    for (let palavra of palavras){
        palavra = palavra.toLowerCase()
        if (palavra.includes(stringBusca)) {
            resultado.push(palavra)
        }
    }

    return resultado
}

console.log(palavrasSemelhantes("pro", ["programação", "mobile", "profissional", 'linguagem', 'programador']))
console.log(palavrasSemelhantes("JAVA", ["javascript", 'PHP' ,"java", "c++"]))