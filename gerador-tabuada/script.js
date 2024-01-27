function calcular(){
    let num = document.getElementById('numero')
    let tabuada = document.getElementById('select')

    if (num.value.length == 0){
        alert('Por favor, informe um número!')
    }
    else {
        let numero = Number(num.value)
        let contador
        tabuada.innerHTML = ''
        for(contador = 1; contador <= 10; contador++){
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)
        }
    }
}