//crie um programa que verifique o faturamento médio dos 3

//primeiro trimestre => 10650

//segundo trimestre => 20000

//terceiro trimestre => 35000

//se for maior que 25000, o faturamento médio é esperado. Mas, se o faturamento for menor que 25.000, o faturamento médio está abaixo do esperado

//utilize um objeto para registrar os detalhes. Utilize Desestruturação para facilitar o acesso aos elementos, e fazer os cálculos. Por fim, use um condiconal

const faturamentoTrimestral = {
    primeiroTrimestre: 10650,
    segundoTrimestre: 20000,
    terceiroTrimestre: 35000
}

const {primeiroTrimestre, segundoTrimestre, terceiroTrimestre} = faturamentoTrimestral

const mediaTrimestral = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(3)

if (mediaTrimestral >= 25000){
    console.log(`A média atingiu o esperado com o valor de: ${mediaTrimestral}`)
} else{
    console.log(`A média não atingiu o valor esperado com o valor de: ${mediaTrimestral}`)
}