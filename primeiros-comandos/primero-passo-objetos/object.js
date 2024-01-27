let amigo = {
    nome: 'Fernando',
    Idade: 18,
    sexo: 'M',
    Peso:62.5,
    emagreceu(peso = 0){
        this.Peso -= peso
    }
}
amigo.emagreceu()
console.log(`${amigo.nome} pesa ${amigo.Peso}Kg`)