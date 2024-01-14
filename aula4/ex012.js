var hora = new Date()
hora = hora.getHours()

if (hora <= 4) {
    console.log ('Boa madrugada!')
}
else if (hora > 4 && hora <= 12){
    console.log ('Bom dia!')
}
else if (hora < 18){
    console.log ('Boa tarde!')
}
else {
    console.log ('Boa noite!')
}  