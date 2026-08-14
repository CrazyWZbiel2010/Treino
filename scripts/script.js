var email = document.getElementById("Email")
var senha = document.getElementById("senha")


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        entrar()
    }
})

function entrar(){
    if(email.value == "gabrieldonato303@gmail.com" && senha.value == "Blizz1705"){
        window.location.href="../abas/home.html";
    }else{
        alert("Email ou senha invalidos")
    }
}