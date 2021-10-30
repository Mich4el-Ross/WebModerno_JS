/*
Exercício 026:

Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function contadorPares(){
    for(let cont = 1; cont <= 100; cont++){
        if(cont % 2 == 0){
            console.log(cont);
        }
    }
}

contadorPares()