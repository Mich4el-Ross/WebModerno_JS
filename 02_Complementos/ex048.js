/*
Exercício 048:

Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize 
a multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicar(num1, num2){
    
    let resultado = 0

    for(let i = 0; i < num2; i++){
        resultado += num1    
    } 

    return resultado
}

console.log(multiplicar(8, 5))
console.log(multiplicar(11, 3))
console.log(multiplicar(27, 4))