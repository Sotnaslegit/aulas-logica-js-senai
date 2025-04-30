//crie uma função que receba um array chamada desmembraArray que execute um laço e exiba todos os itens um abaixo do outro

let desmembraArray = ["1", "2", "3", "4", "5"]

let exibeNumeros = (x) => {
    for(numero of x){
        console.log(numero)
    }
}

exibeNumeros(desmembraArray)