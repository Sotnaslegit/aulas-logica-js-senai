let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementaValor = document.querySelector("#btnIncrementar")

const btnDiminuiValor = document.querySelector("#btnDiminui")

btnDiminuiValor.addEventListener("click", () => {
    if(contador >= 1){
    contador--
    resultado.textContent = `Contador: ${contador}`
}
})

btnIncrementaValor.addEventListener("click", () =>{
    contador++
    resultado.textContent = `Contador: ${contador}`
})