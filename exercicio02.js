const produto01 = {
    nome: "garrafa",
    preco: 20.00,
    quantidade: 3
}
const produto02 = {
    nome: "abridor",
    preco: 5.00,
    quantidade: 2
}

const totalproduto01 = produto01.preco * produto01.quantidade

const totalproduto02 = produto02.preco * produto02.quantidade

const total =  totalproduto01 + totalproduto02

console.log(`O resultado do cálculo é ${total}`)