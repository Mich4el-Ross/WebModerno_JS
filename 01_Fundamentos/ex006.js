/*
Exercício 006:

Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capital, taxa, tempo){

    // Montante = Capital + Juros
    // Juros    = Capital x taxa x tempo
    
    let montanteSimples = capital + (capital * taxa * tempo);
    
    return 'R$ ' + montanteSimples;
}

function jurosCompostos(capital, taxa, tempo){

    // Montante = Capital x (1 + taxa) ^ tempo

    let montanteComposto = capital * ((1 + taxa) ** tempo);

    return 'R$ ' + montanteComposto;
}

console.log(jurosSimples(350, 30/100, 3));
console.log(jurosCompostos(350, 30/100, 3));