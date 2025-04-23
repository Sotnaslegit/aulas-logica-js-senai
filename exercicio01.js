//Crie uma variável que seja um array de objeto que tenha os seguintes pares: chave e valor

//nome da variável => users

//valores => um objeto com os valores login, password, cursos, sendo cursos um array com 2 valores

//renderizar no console a seguinte frase com o primeiro user do array `Meu login é ${login}, minha senha é ${password}, e faço os cursos x e y`

const users = [
    {
        login:"Erick",
        password:"1234",
        cursos:["web", "design"]
    },
    {
        login:"Carlos",
        password:"!@#$",
        cursos:["culinária", "word"]
    }
]

console.log(`Meu login é ${users[0].login}, minha senha é ${users[0].password}, e faço os cursos ${users[0].cursos[0]} e ${users[0].cursos[1]}`)