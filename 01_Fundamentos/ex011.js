/*
Exercício 011:

As regras para o cálculo dos anos bissextos são as seguintes:

    - De 4 em 4 anos é ano bissexto;
    - De 100 em 100 anos não é ano bissexto;
    - De 400 em 400 anos é ano bissexto;

Lembrando que prevalecem as últimas regras sobre as primeiras elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false.
*/ 

function anoBissexto(ano){

    if (ano <= 0) {
        return false;
    } else if ( (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0) ) {
        return true;
    } else {
        return false;
    }
}

console.log(anoBissexto(0));
console.log(anoBissexto(1988));
console.log(anoBissexto(2005));
console.log(anoBissexto(2020));
console.log(anoBissexto(2060));