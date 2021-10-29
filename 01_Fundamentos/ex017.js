/*
Exercício 017:

Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela 
abaixo:

| Plano | Aumento |
| ----- | ------- |
|   A   |   10%   |
|   B   |   15%   |
|   C   |   20%   |

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime 
o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentoSalarial(plano, salario){
    
    plano = plano.toUpperCase()

    switch (plano) {
        case 'A':
            return salario + (salario * 10/100)
        case 'B':
            return salario + (salario * 15/100)
        case 'C':
            return salario + (salario * 20/100)
        default:
            return 'Plano inválido'
    }
}

console.log(aumentoSalarial('A', 1250))
console.log(aumentoSalarial('B', 1250))
console.log(aumentoSalarial('C', 1250))
console.log(aumentoSalarial('D', 1250))