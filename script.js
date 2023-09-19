function attHora(){
data = new Date()
let dma = data.toLocaleTimeString('pt-BR', {
    hour12: false
})
console.log(dma)

let p = document.getElementById('p')
p.innerHTML = dma
}

attHora()

setInterval(attHora, 1000)