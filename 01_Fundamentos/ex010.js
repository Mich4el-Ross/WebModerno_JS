/*
Exercício 010:

Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
*/

function verificaNumero(num){
    
    if(num % 3 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(verificaNumero(150));
console.log(verificaNumero(8));
console.log(verificaNumero(3));