function Entrar(){
    var nick= document.getElementById("nick")
    var senha= document.getElementById("senha")
    var i

    if(nick.value.indexOf("Aluno")!=-1){
        if(senha.value=="1234"){
            alert("Parabéns! Você pode acessar nosso sistema!")
            i=true
        }
        else{
            alert("Sua senha esta incorreta. Atente-se aos números.")
            i=false
        }
    }
    else{
        alert("Seu usuário esta incorreto. Atente-se as maíusculas e minúsculas.")
        i=false
    }
}
