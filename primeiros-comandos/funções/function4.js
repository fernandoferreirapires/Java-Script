function fatorial(numero) {
    let fat = 1
    for(let c = numero; c>1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))