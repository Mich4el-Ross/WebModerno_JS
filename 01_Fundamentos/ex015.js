/*
Exercício 015:

Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Para tanto, utilize uma estrutura switch, atendendo as seguintes recomendações:

    - Caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. 
    - Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. 
    - Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.
*/

function revendaCarros(modelo){

    modelo = modelo[0].toUpperCase() + modelo.substring(1);

    switch(modelo){
        case 'Hatch':
            return 'Compra efetuada com sucesso';
        case 'Sedan':
        case 'Motocicletas':
        case 'Caminhonetes':
            return 'Tem certeza que não prefere este modelo?';
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui';
    }
}

console.log(revendaCarros('hatch'));
console.log(revendaCarros('sedan'));
console.log(revendaCarros('Motocicletas'));
console.log(revendaCarros('Caminhonetes'));
console.log(revendaCarros('Jetski'));