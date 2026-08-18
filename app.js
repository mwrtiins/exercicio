
const preco = document.getElementById("preco")
const quantidade = document.getElementById("quantidade")
const dinheiro = document.getElementById("dinheiro")
const resultado = document.getElementById("resultado")
const button = document.querySelector("button")

button.addEventListener("click", calcularTroco)
function calcularTroco(){
    let total = preco.valueAsNumber * quantidade.valueAsNumber
    let troco = dinheiro.valueAsNumber - total
    resultado.innerHTML = "Dinheiro recebido: R$ " + dinheiro.valueAsNumber 
    if (troco >= 0){
        
        trocoResultado.textContent = "Troco: " + troco  
    }
    
}