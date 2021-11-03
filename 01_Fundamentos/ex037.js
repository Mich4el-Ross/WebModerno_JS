/*
Exercício 037:

Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n 
termos, bem como a soma dos elementos.
*/

function PA(n, a1, r){
    
    let vetorPA = []

    for(let i = 0; i < n; i++){
        vetorPA.push(a1 + r*i)
    }

    let somaPA = (a1 + (a1 + (n-1) * r)) / 2 * n

    console.log('----------------------')
    console.log('Progressão Aritmética')
    console.log('----------------------')
    console.log(`Termos: [${vetorPA}]`)
    console.log(`Soma: ${somaPA}`)
}

function PG(n, a1, r){

    let vetorPG = []

    for(let i = 0; i < n; i++){
        vetorPG.push(a1 * (r**i))
    }

    let somaPG = a1 * ((r**n) - 1) / (r-1)

    console.log('----------------------')
    console.log('Progressão Geométrica')
    console.log('----------------------')
    console.log(`Termos: [${vetorPG}]`)
    console.log(`Soma: ${somaPG}`)
}

PA(5, 5, 2)
PG(5, 1, 3)