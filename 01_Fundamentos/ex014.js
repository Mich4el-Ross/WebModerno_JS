/* 
Exercício 014:

Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: 

    - Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
    - Caso kiwi, retorne: “Estamos com escassez de kiwis”. 
    - Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 
    
Teste com estas três opções e crie também um default, que retornará uma mensagem de erro no console.
*/

function vendaFruta(fruta){

    fruta = fruta[0].toUpperCase() + fruta.substring(1);
    
    switch(fruta){
        case 'Maça':
            return 'Não vendemos esta fruta aqui';
        case 'Kiwi':
            return 'Estamos com escassez de kiwis';
        case 'Melancia':
            return 'Aqui está, são 3 reais o quilo';
        default:
            return '[ERRO]: Fruta inválida...';
    }
}

console.log(vendaFruta('Maça'));
console.log(vendaFruta('Kiwi'));
console.log(vendaFruta('melancia'));
console.log(vendaFruta('Picanha'));