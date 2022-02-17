function Enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")
    var dn= document.getElementById("dn")
    var cm= document.getElementById("cm")
    var i

    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOf("@")!=-1){
            if(dn.value!="" && dn.value<='2010'){
                if(cm.value.length>=50){
                    alert(nome.value +", obrigado!")
                    i=true
                }
                else{
                    alert("Comentário de no mínimo 50 caracteres.")
                    i=false
                }
            }
            else
            {
                alert("Sua data de nascimento está em branco ou superior a 2010.")
                i=false
            }
        }
        else{
            alert("Ooops, este email não é válido! Tente novamente.")
            i=false
        }
    }
    else{
        alert("Seu nome precisa estar completo e sem abreviações.")
        i=false
    }
return i
}