/*
Exercício 001:

Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores. 
*/

function CalcularOperacoes(num1, num2){

    num1 = Number(num1);
    num2 = Number(num2);

    console.log(`A soma é: ${num1 + num2}`);
    console.log(`A subtração é: ${num1 - num2}`);
    console.log(`A multiplicação é: ${num1 * num2}`);
    console.log(`A divisão é: ${num1 / num2}`);
}

CalcularOperacoes(7, 5)