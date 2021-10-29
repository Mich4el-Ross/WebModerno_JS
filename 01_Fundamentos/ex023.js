/*
Exercício 023:

Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function calculaMedia(cod, nota1, nota2, nota3){

    let notas = [nota1, nota2, nota3]
    notas = notas.sort()

    let resultado
    let media = (((notas[0] * 3) + (notas[1] * 3) + (notas[2] * 4)) / 10).toFixed(2)

    if (media >= 5) {
        resultado = 'APROVADO'
    } else{
        resultado = 'REPROVADO'
    }

    return `Código do aluno: ${cod} \nNota 1: ${nota1} \nNota 2: ${nota2} \nNota 3: ${nota3} \nMédia Final ${media} \nSituação: ${resultado}`
}

console.log(calculaMedia('001', 3.1, 5.2, 4.7))