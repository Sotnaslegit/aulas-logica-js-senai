//declaração variável com var
/*var nome = "Erick"

var nome = "João"*/

//declaração variável com let
/*let nome = "Erick"

nome = "João"*/

//declaração variável com const
const nome = "Erick" //string

const sobrenome = "Rodrigues dos Santos"

const valor = 21.90 //number

const isLogin = false //bolean

let preco //undefined

const endereco = null //null

const alunos = ["João", "Maria", "José"] //array

const alunoDoSenai = {
    nome:"Luciano",
    sobrenome:"Rocha",
    turno:"noturno",
    idade:42,
    cursos:["games", "programação web"]
}

//const não pode mudar de valor

const alunosDoSenai = [
    {
        login:"João",
        email:"joao@gmail.com",
        cursos:["games", "web"]
    },
    {
        nome:"maria",
        email:"maria@gmail.com",
        cursos:["design", "games"]
    }
]

console.log(`Meu nome completo é ${nome} ${sobrenome}`)

//console.log(alunos[0]) //pega o valor do índice do array