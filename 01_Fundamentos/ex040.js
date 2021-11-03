/*
Exercício 040:

Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que:

    - De 0,0 a 4,9 seja atribuído o conceito D
    - De 5,0 a 6,9 seja atribuído o conceito C
    - De 7,0 a 8,9 o conceito B 
    - De 9,0 a 10,0 o conceito A
*/

function conceitoNotas(vetor){
    
    let vetorConceito = []

    vetor.forEach(elemento => {
        if (elemento >= 0.0 && elemento <= 4.9) {
            vetorConceito.push('D')
        } else if (elemento >= 5.0 && elemento <= 6.9){
            vetorConceito.push('C')
        } else if (elemento >= 7.0 && elemento <= 8.9){
            vetorConceito.push('B')
        } else if (elemento >= 9.0 && elemento <= 10){
            vetorConceito.push('A')
        } else{
            vetorConceito.push('Nota Inválida')
        }
    })

    return vetorConceito
}

let notas = [5.4, 15, 9, 6.9 , 2.5, 7.7, 6.8]
console.log(conceitoNotas(notas))