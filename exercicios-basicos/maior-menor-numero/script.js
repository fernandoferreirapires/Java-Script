var a = 0
var b = 0
var c = 0
var i 
for (i = 0; i < 3; i++) {
    a = Number(prompt('Por favor, digite um número: '))
    
    if (b == 0) {
        b = a
    }
    else if (c == 0) {
        c = a
    }
}

alert(`Os números informados foram ${a} ${b} ${c}`)

if (a == b || b == c || a ==c) {
    alert('[ERROR] Informe números diferentes')
}
else if (a > b && a > c) {
    document.write(`O número ${a} é o maior! <br>`)
    if (b < c) {
        document.write(`E o número ${b} é o menor!`)
    }else{
        document.write(`E o número ${c} é o menor!`)
    }
}
else if (b > a && b > c) {
    document.write(`O número ${b} é o maior! <br>`)
    if (a < c) {
        document.write(`E o número ${a} é o menor!`)
    }else{
        document.write(`E o número ${c} é o menor!`)
    }
}
else {
    document.write(`O número ${c} é o maior! <br>`)
    if (a < b) {
        document.write(`E o número ${a} é o menor!`)
    }else{
        document.write(`E o número ${b} é o menor!`)
    }
}