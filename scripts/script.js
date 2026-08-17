document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        entrar()
    }
})

function cadastro(){
    if (window.location.pathname === '/abas/Cadastre-se.html') {
        window.location.href="index.html"
    }
    var email_cad = document.getElementById("email_cad").value
    var senha_cad = document.getElementById("senha_cad").value
    localStorage.setItem("email_salvar", email_cad)
    localStorage.setItem("senha_salvar", senha_cad)
}


function entrar(){
    var email = document.getElementById("Email")
    var senha = document.getElementById("senha")
    var aviso1 = document.getElementById("aviso_1ºinput")
    var aviso2 = document.getElementById("aviso_2ºinput")
    email = email.value
    senha = senha.value
    email_cad = localStorage.getItem('email_salvar')
    senha_cad = localStorage.getItem('senha_salvar')
    if(email.length == 0 || senha.length == 0){
        
        aviso1.style.visibility="visible"
        aviso2.style.visibility="visible"
        aviso1.animate([
            { transform: 'translateX(1px)', opacity: 1 },
            { transform: 'translateX(0px)', opacity: 0.5 },
            { transform: 'translateX(-1px)', opacity: 1 },
            { transform: 'translateX(0px)', opacity: 0.5 }
        ] , {
            duration: 100,      // Duração em milissegundos (1 segundo)
            iterations: 1 // Quantas vezes vai repetir
        })
        aviso2.animate([
            { transform: 'translateX(1px)', opacity: 1 },
            { transform: 'translateX(0px)', opacity: 0.5 },
            { transform: 'translateX(-1px)', opacity: 1 },
            { transform: 'translateX(0px)', opacity: 0.5 }
        ] , {
            duration: 100,      // Duração em milissegundos (1 segundo)
            iterations: 1 // Quantas vezes vai repetir
        })
        
    }else if(email != email_cad || senha != senha_cad){
        aviso1.style.visibility="visible"
        aviso2.style.visibility="visible"
        aviso1.animate([
            { transform: 'translateX(1px)', opacity: 1 },
            { transform: 'translateX(0px)', opacity: 0.5 },
            { transform: 'translateX(-1px)', opacity: 1 },
            { transform: 'translateX(0px)', opacity: 0.5 }
        ] , {
            duration: 100,      // Duração em milissegundos (1 segundo)
            iterations: 1 // Quantas vezes vai repetir
        })
        aviso2.animate([
            { transform: 'translateX(1px)', opacity: 1 },
            { transform: 'translateX(0px)', opacity: 0.5 },
            { transform: 'translateX(-1px)', opacity: 1 },
            { transform: 'translateX(0px)', opacity: 0.5 }
        ] , {
            duration: 100,      // Duração em milissegundos (1 segundo)
            iterations: 1 // Quantas vezes vai repetir
        })
        
    }else{
        window.location.href="home.html"
    }
}
