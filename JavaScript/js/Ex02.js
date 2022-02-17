var n1, n2

n1=prompt("Qual moeda? (1 para real e 2 para dólar)")
alert("PS: Dólar hoje: R$5,14 (16/02/2022")
if (parseFloat(n1)==1){
    n2= n1*5.51
    alert("R$"+n2)
}
else {
    n2=n1/5.51
print("US$"+n2)
}
