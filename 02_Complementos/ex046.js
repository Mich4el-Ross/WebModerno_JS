/*
Exercício 046:

Escreva uma função que receba um valor booleano ou numérico. Seguindo as recomendações abaixo:
    
    - Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso.  
    - Se o parâmetro for numérico, o retorno será o número inverso. 
    - Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperado, mas o parâmetro é do tipo ______".
*/


function inverso(valor){

    let tipo = typeof valor

    if(tipo == 'boolean'){
       return !valor
    } else if (tipo == 'number'){
        return valor * -1
    } else {
        return "booleano ou número esperado, mas o parâmetro é do tipo string"
    }
    
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(-500))