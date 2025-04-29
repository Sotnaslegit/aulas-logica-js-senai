//crie uma função que recebe um parâmetro de nota e verifica em um condicional se a nota for maior que 7, o aluno está aprovado, senão, o aluno está reprovado

function media(x){
    if (x >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

const verifica = media(7)

console.log(verifica)