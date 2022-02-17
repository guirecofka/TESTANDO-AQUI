var a, b, c, d, maior, menor

a= prompt ("Primeiro valor: ")
maior = a
menor = a
b= prompt ("Segundo valor: ")
if (b>maior){
    maior=b
}
if (b<menor){
    menor=b
}
c= prompt ("Terceiro valor: ")
if (c>maior){
    maior=c
}
if (c<menor){
    menor=c
}
d= prompt ("Quarto valor: ")
if (d>maior){
    maior=d
}
if (d<menor){
    menor=d
}
e= prompt ("Quinto valor: ")
if (e>maior){
    maior=e
}
if (e<menor){
    menor=e
}
alert (" Os números digitados foram: "+a+", "+b+", "+c+", "+d+", "+e+".\n")
alert ("O menor número é: "+ menor+" e o maior é: "+ maior)