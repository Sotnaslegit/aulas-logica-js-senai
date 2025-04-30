const notasMatematica = {
    primeiroTrimestre: 6,
    segundoTrimestre: 8,
    terceiroTrimestre: 9
}

const{primeiroTrimestre, segundoTrimestre, terceiroTrimestre} = notasMatematica

const mediaDeMatematica = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(2)

console.log(mediaDeMatematica)

if(mediaDeMatematica >= 7){
    console.log("Aprovado")
} else{
    console.log("Reprovado")
}