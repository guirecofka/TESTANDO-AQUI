var n1, n2, num, cont, W
prompt("Fibonacci")
n1=prompt("Primeiro valor: ")
n2=prompt("Segundo valor: ")
cont=prompt("Total de repetições: ")
W=0
if (W<=cont){
    num = n1 + n2
    n1 = n2
    n2 = num
    W=W+1
}
