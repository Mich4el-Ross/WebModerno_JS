/*
Exercício 004:

Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

function divisao(dividendo, divisor){
    
    let resultado = Math.floor(dividendo/divisor);
    let resto = dividendo % divisor;

    console.log(`Resultado: ${resultado}`);
    console.log(`Resto: ${resto}`);
}

divisao(8, 3)