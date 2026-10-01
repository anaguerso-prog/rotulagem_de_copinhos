const Copo = require('./js/copo')

let resposta = document.getElementById('resposta')
let principal = document.getElementById('principal')

principal.addEventListener('click', ()=>{

    let raioMaior = Number(document.getElementById('raioMaior').value)
    let raioMenor = Number(document.getElementById('raioMenor').value)
    let altura = Number(document.getElementById('altura').value)

    console.log(`--> ${raioMaior}`)
    console.log(`--> ${raioMenor}`)
    console.log(`--> ${altura}`)

    let copo = new Copo(raioMaior, raioMenor, altura)

    console.log(copo)

    let calcG = copo.calcGeratris()
    let calcABM = copo.calcABMaior()
    let calcABm = copo.calcABMenor()
    let calcAL = copo.calcAreaLateral()
    let calcV = copo.calcVolume()
    let classificar = copo.classificar()

    console.log(`o calculo da geratris ficou em: ${calcG.toFixed(2)}`)
    console.log(`o calculo da base maior ficou em: ${calcABM.toFixed(2)}`)
    console.log(`o calculo da base menor ficou em: ${calcABm.toFixed(2)}`)
    console.log(`o calculo da area lateral ficou em: ${calcAL.toFixed(2)}`)
    console.log(`o calculo do volume ficou em: ${calcV.toFixed(2)}`)
    console.log(`este copo é classificado como ${classificar}`)

    resposta.innerHTML = ''
    resposta.innerHTML += `<p> o calculo da geratris ficou em: ${calcG.toFixed(2)}</p>`
    resposta.innerHTML += `<p> o calculo da base maior ficou em: ${calcABM.toFixed(2)}</p>`
    resposta.innerHTML += `<p> o calculo da base menor ficou em: ${calcABm.toFixed(2)}</p>`
    resposta.innerHTML += `<p> o calculo da area lateral ficou em: ${calcAL.toFixed(2)}</p>`
    resposta.innerHTML += `<p> o calculo do volume ficou em: ${calcV.toFixed(2)}</p>`
    resposta.innerHTML += `<p> este copo é classificado como ${classificar}</p>`

})