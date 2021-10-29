/*
Exercício 018:

Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use 
o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function lerExtenso(num){
    
    switch (num) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo'
    }
}

console.log(lerExtenso(1))
console.log(lerExtenso(2))
console.log(lerExtenso(3))
console.log(lerExtenso(4))
console.log(lerExtenso(5))
console.log(lerExtenso(6))
console.log(lerExtenso(7))
console.log(lerExtenso(8))
console.log(lerExtenso(9))
console.log(lerExtenso(10))
console.log(lerExtenso(15))