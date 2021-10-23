/*
Exercício 009:

Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: 

    - Todo aluno recebe uma nota de 0 a 100. 
    - Alunos com nota abaixo de 40 são reprovados. 

As notas possuem a seguinte regra de arredondamento: 

    - Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
    - Se a nota for abaixo de 38, não é feito nenhum arredondamento.
    
Por exemplo: A nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/

function classificacaoAluno(nota){

    let notaArrumada = arrendondaNotas(nota)

    if(notaArrumada >= 40){
        return `Aprovado com nota ${notaArrumada}`;
    }else{
        return `Reprovado com nota ${notaArrumada}`;
    }
}

function arrendondaNotas(nota){

    if (nota % 5 > 2){
        return nota + (5 - (nota % 5));
    }else{
        return nota;
    }
}

console.log(classificacaoAluno(38))
console.log(classificacaoAluno(87))
console.log(classificacaoAluno(62))
console.log(classificacaoAluno(29))