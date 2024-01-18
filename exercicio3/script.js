function contar(){
    var inicio1 = document.getElementById('inicio')
    var fim1 = document.getElementById('fim')
    var passo1 = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio1.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0){
        resultado.innerHTML = 'Impossivel contar!'
    }
    else{
        resultado.innerHTML = 'Contando: <br>'
        let inicio = Number(inicio1.value)
        let fim = Number(fim1.value)
        let passo = Number(passo1.value)
        if (passo <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim){
            //contagem crescente
            for(var contador = inicio; contador <= fim; contador += passo){
            resultado.innerHTML += ` \u{1F449} ${contador} `
        }
    }
    else{
        //contagem regressiva
        for (var contador = inicio; contador >= fim; contador -= passo){
        resultado.innerHTML += ` \u{1F449} ${contador} `
    }
    }
}
}