var email = document.getElementById("Email")
var senha = document.getElementById("senha")


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        entrar()
    }
})

function cadastro(){
    window.location.href="index.html"
    var email_cad = document.getElementById("email_cad")
    var senha_cad = document.getElementById("senha_cad")
    return email_cad
}

function entrar(){
    email_cad = cadastro()
    alert(email_cad)
}
