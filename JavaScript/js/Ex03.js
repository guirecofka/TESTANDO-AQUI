var n1, n2, n3, n4, media, conc

n1=prompt("Primeiro  valor: ")
n2=prompt("Segundo   valor: ")
n3=prompt("Terceiro  valor: ")
n4=prompt("Quarto    valor: ")

media=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4
if (media <7){
    alert("D. Média: "+media)
}
if (media >7, media<7.9){
    alert("C. Média: "+media)
}
if (media >7.9, media<8.9){
    alert("B. Média: "+media)
}
if (media >8.9, media<=10){
    alert("A. Média: "+media)
}
