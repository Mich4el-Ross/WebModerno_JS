/*
Exercício 008:

Pedro joga N jogos de basquete por temporada e para saber como está ele está progredindo, ele mantém o registro de todos as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. 

Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”. Escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo (posição do pior jogo), respectivamente. Segue exemplo abaixo:

    String: “10, 20, 20, 8, 25, 3, 0, 30, 1”

    Retorno: [3, 7] 
    
    O retorno significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.

Obs: O primeiro jogo não conta como novo recorde do melhor.
*/

function verificaPontuacao(string){

    let vetorPontos = string.split(', ');
    
    let maiorPontuacao = parseInt(vetorPontos[1]);
    let piorJogo = vetorPontos.indexOf(String(Math.min(...vetorPontos))) + 1;
    let vezesRecorde = -1;      // Já desconta uma unidade que será repetida no laço

    for(valor of vetorPontos){
        if(valor >= maiorPontuacao){
            vezesRecorde++;
        }
    }
    
    return [vezesRecorde, piorJogo];
}

console.log(verificaPontuacao("25, 30, 20, 4, 31, 50, 42, 35, 6, 0"));