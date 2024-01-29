function IMC() {

    var peso = document.querySelector('input#peso').value
    var altura = document.querySelector('input#altura').value
    var res = document.getElementById('res')

    var imc = peso / altura ** 2

    res.innerHTML = `Seu IMC é ${imc.toFixed(2)}`
}