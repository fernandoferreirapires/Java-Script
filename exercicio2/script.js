function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var resultado = document.getElementById('resultado')

    if(fano.value.length == 0 || fano.value > ano){
        alert('ERROR')
    }
    else {
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'imagens/homem-bebe.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        }
        else if(fsexo[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'imagens/mulher-bebe.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }  
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
    resultado.appendChild(img)
    }
}
