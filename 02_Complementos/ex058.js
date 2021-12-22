/*
Exercício 058:

Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa 
aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma 
funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas. Crie 
uma função que receba um array de produtos e retorne o total das despesas.
*/

function somarDespesas(array){   
    let somarDespesas = 0

    array.forEach(element => {
       somarDespesas += element.preco 
    });

    return somarDespesas
}

console.log(somarDespesas([
    {
        nome: "Galaxy S20",
        categoria: "Eletrônicos",
        preco: 3599.99
    }, {
        nome: "Macbook Pro",
        categoria: "Eletrônicos",
        preco: 30999.90
    }
]))