/*
Exercício 002:

Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

    - Equilátero: Os três lados são iguais. 
    - Isósceles: Dois lados iguais. 
    - Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. 

(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function classificaTriangulo(lado1, lado2, lado3){
    
    if(lado1 == lado2 &&  lado1 == lado3){
        return "O triângulo é EQUILATÉRO";
    }
    else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return "O triângulo é ISÓSCELES";
    }
    else{
        return "O triângulo é ESCALENO";
    }
}

console.log(classificaTriangulo(3, 3, 3));
console.log(classificaTriangulo(4, 8, 4));
console.log(classificaTriangulo(5, 3, 2));