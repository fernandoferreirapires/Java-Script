let valores = [9, 8, 6 , 7, 5, 3, 4, 1, 2]
var i
console.log (valores)
valores.sort()


for(i = 0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)            
}
/*
for(i in valores){
    console.log('A posição '+ i + ' tem o valor ' + valores[i])
}
*/
var pos = valores.indexOf(11)
if (pos == -1){
    console.log('A posição não foi encontrada!')
}
else{
    console.log(`O valor esta na posiçãao ${pos}`)
}