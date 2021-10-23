/*
Exercício 007:

Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros para receber o valor de a, b e c, como pode ser visto na demonstração abaixo:

    Equação:  3x² - 5x + 12

    - Valor de a:  3
    - Valor de b: -5
    - Valor de c: 12
    
Como retorno deve ser passado um vetor que tem 2 valores (x¹ e x²) um para cada possível resultado, mesmo que os resultados sejam iguais. Além do mais, caso o delta seja negativo, retorne, ao invés do vetor, uma string com a frase: “Delta é negativo”.
*/

function bhaskara(a, b, c){
    
    let delta = b ** 2 - (4*a*c);

    if(delta < 0){
        return "Delta negativo";
    }
    else{
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);

        return  [x1, x2];  
    }
}

console.log(bhaskara(3, -15, 12));
console.log(bhaskara(1, 3, 16));