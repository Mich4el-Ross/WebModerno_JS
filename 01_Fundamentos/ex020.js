/*
Exercício 020:

Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e 
R$ 1. Seu programa deve mostrar apenas as notas utilizadas. 

Por exemplo:

    Ao solicitar R$18, o programa deve retornar a seguinte informação:
    
    1 nota(s) de R$ 10. 
    1 nota(s) de R$ 5. 
    3 nota(s) de R$ 1.

OBS: Note que não foram exibidas informações sobre as demais cédulas
*/

function sacarDinheiro(valorSaque){

    let tot100 = 0
    let tot50 = 0
    let tot10 = 0
    let tot5 = 0
    let tot1 = 0  

    while (true) {
        if (valorSaque >= 100){
        
            valorSaque -= 100 
            tot100 += 1

        } else if (valorSaque >= 50){

            valorSaque -= 50 
            tot50 += 1

        } else if (valorSaque >= 10){
            
            valorSaque -= 10 
            tot10 += 1

        } else if (valorSaque >= 5){
            
            valorSaque -= 5 
            tot5 += 1

        } else if (valorSaque >= 1){
            
            valorSaque -= 1
            tot1 += 1
        }

        if (valorSaque == 0)
            break
    }

    return contarNotas(tot100, tot50, tot10, tot5, tot1)
}

function contarNotas(tot100, tot50, tot10, tot5, tot1){

    let resultado = ''

    if (tot100 > 0) {
        resultado += `${tot100} nota(s) de R$ 100. \n`
    }

    if (tot50 > 0) {
        resultado += `${tot50} nota(s) de R$ 50. \n`
    }

    if (tot10 > 0) {
        resultado += `${tot10} nota(s) de R$ 10. \n`
    }

    if (tot5 > 0) {
        resultado += `${tot5} nota(s) de R$ 5. \n`
    }

    if (tot1 > 0) {
        resultado += `${tot1} nota(s) de R$ 1. \n`
    }

    return resultado
}

console.log(sacarDinheiro(253));