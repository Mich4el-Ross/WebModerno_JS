/*
Exercício 053:

Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

function filtrarArray(array){
    return array.filter(elemento => typeof elemento === "number")
}

console.log(filtrarArray(["Javascript", 1, "3", "Web", 20])) 
console.log(filtrarArray(["a", "c"]))