var x

x= prompt ("Um número para ver se é múltiplo de 3 ou 7: ")
if(x/3==0, x/7==0){
    alert ("O número é divisível por 3 e por 7 ao mesmo tempo!")
}
if(x/3==0){
    alert ("O número divisível apenas por 3!")
}
if(x/7==0){
    alert ("O número divisível apenas por 7!")
}
else{
    alert ("O número não divisível por 3 e nem por 7!")
}