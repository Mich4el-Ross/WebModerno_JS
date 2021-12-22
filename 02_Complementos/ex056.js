/*
Exercício 056:
 
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo
de 100, exceto se for também múltiplo de 400. Com isso em mente, desenvolva uma função que recebe um 
número correspondente a um ano e retorna se ele é bissexto ou não.
*/

function checarAnoBissexto(ano){
    if (ano <= 0) {
        return false;
    } else if ( (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0) ) {
        return true;
    } else {
        return false;
    }
}

console.log(checarAnoBissexto(2016))
console.log(checarAnoBissexto(2100))