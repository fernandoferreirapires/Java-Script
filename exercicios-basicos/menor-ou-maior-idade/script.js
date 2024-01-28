var anoAtual = new Date()
anoAtual = anoAtual.getFullYear()

var ano = Number(prompt('Por favor informe seu ano de nascimento'))
if (ano < 1 || ano > anoAtual) {
    alert('Ano inválido')
}else{
    var idade = anoAtual - ano

    if (idade < 18) {
        alert('Você tem ' + idade + ' anos, é menos de idade')
    }else{
        alert('Você tem ' + idade + ' anos, é maior de idade')
    }
}