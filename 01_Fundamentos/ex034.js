/*
Exercício 034:

Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function verificaString(string1, string2){

    let estaContido = true

    for (let i = 0; i < string1.length; i++) {
        caracterString1 = string1.charAt(i).toUpperCase()

        for (let j = 0; j < string2.length; j++) {
            caracterString2 = string2.charAt(j).toUpperCase()

            if(caracterString1 === caracterString2){
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }

        if(!estaContido){
            return estaContido
        }
    }
    
    return estaContido
}

console.log(verificaString('abcd', 'cbda'))
console.log(verificaString('afght', 'dftha'))