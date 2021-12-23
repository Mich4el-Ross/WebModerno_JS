/*
Exercício 061:

Crie uma função que receba um array de números e retorne o menor número desse array.
*/

function menorNumero(array){
   let menor = array[0]

   for(num in array){
       if (array[num] <= menor){
           menor = array[num]
       }
   }

   return menor
}

console.log(menorNumero([10, 5, 35, 65])) 
console.log(menorNumero([5, -15, 50, 3])) 