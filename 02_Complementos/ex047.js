/*
Exercício 047:

Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) 
e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Considere o quarto 
valor para:

    - True: A verificação deverá verificar se o número está entre o intervalo e se é igual ao 
            minimo e máximo.
    - False: A verificação deve ver se o número está entre o intervalo, mas desconsiderando a
             opção de ser igual ao mínimo e máximo. 
*/

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo){
        return numero >= minimo && numero <= maximo
    } else {
        return numero > minimo && numero < maximo
    }
}

console.log(estaEntre(10, 100, 50)) 
console.log(estaEntre(3, 150, 3, true)) 
console.log(estaEntre(3, 150, 3)) 