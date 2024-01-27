function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var hora = new Date()
    var hora = hora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        imagem.src = 'imagens/imagem-manha.png'
        document.body.style.background = '#c4927d'
    }
    else if (hora >= 12 && hora <= 17){
        imagem.src = 'imagens/imagem-tarde.png'
        document.body.style.background = '#f7c36e'
    }
    else {
        imagem.src = 'imagens/imagem-noite.png'
        document.body.style.background = '#1b485b'
    }
}
