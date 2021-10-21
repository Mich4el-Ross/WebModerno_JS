/*
Exercício 005:

Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000004 e retorne R$ 0,30 (observe a vírgula e o ponto).
*/

function formatacaoNumero(num){
    
    let numDecimal = num.toFixed(2);
    let numVirgula = numDecimal.replace('.', ',');

    return "R$ " + numVirgula;
}

console.log(formatacaoNumero(0.1 + 0.2));