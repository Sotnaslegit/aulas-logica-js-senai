//crie um array de objetos em que cada objeto é um produto, tendo como chave (nome, preco, decricao). Crie pelo menos 3 produtos

//crie uma variável que irá armazenar o array com nomes dos produtos

//crie uma segunda variável que irá armazenar o array com os preços do produtos

//use o laço for ou for of para exibir cada item do array da variável de nome no console

const produtos = [
    {
        nome: "fruki de cola",
        preco: 6.50,
        descricao:"muito gás"
    },
    {
        nome: "baconzitos da vó",
        preco: 5.50,
        descricao: "gosto de sal"
    },
    {
        nome: "bono",
        preco: 2,
        descricao:"dá dor de barriga"
    }
]

const nomeProduto = produtos.map(produto => produto.nome)

const precoProduto = produtos.map(produto => produto.preco)

for(nome of nomeProduto){

    console.log("Produto:",nome)

}

