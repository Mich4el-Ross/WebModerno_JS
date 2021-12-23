/*
Exercício 062:

Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado 
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada  foi igual  ao número 
sorteado internamente. Se atente as regras:

    - Se o valor fornecido foi o sorteado, deve retornar "Parabéns! O número sorteado foi o X". 
    - Se não for igual, retorne "Que pena! O número sorteado foi o X". 
*/

function numeroSorte(numEscolhido){
    const min = 1
    const max = 10
    let numSorteado = Math.floor(Math.random() * (max - min + 1) + min)

    if (numEscolhido == numSorteado) {
        return `Parabéns! O número sorteado foi o ${numSorteado}`
    } else {
        return `Que pena! O número sorteado foi o ${numSorteado}`
    }
}

console.log(numeroSorte(1))