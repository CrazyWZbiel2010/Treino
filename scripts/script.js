let telefone = document.getElementById("Telefone")
telefone.addEventListener('input', function() {
    telefone.value = telefone.value.replace(/\D/g, "")
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        entrar()
    }
})
document.addEventListener('keydown', function (event){
    if (event.key === 'Enter'){
        cadastro()
    }
})
function verificaEmail(email){
     if(email.endsWith("@gmail.com")){
        return true
     }else{
        return false
     }
}

function verificaData(dia, mes, ano){
    if(dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano > new Date().getFullYear() || ano < 1800){
        return false
    }else{
        return true
    }
}

function verificaTelefone(telefone){
    if(telefone.length < 11){
        return false
    }else{
        return true
    }
}
function esqueceuSenha(){
    var esqueceuSenha = document.getElementById('esqueceuSenha')
    senha = localStorage.getItem('senha_salvar')
    esqueceuSenha.innerHTML = senha
}
function cadastro(){
    let Todospreenchidos = true
    let email_cad = document.getElementById("email_cad").value
    let senha_cad = document.getElementById("senha_cad").value
    let aviso = document.getElementById('aviso')
    let inputs = document.querySelectorAll('input')
    let telefone = document.getElementById("Telefone").value
    let dia = document.getElementById('dia').value
    let mes = document.getElementById('mes').value
    let ano = document.getElementById('ano').value
    let nome = document.getElementById('nome').value
    let usuario = document.getElementById('usuario').value
    
    for(let i = 0; i <inputs.length; i++){
        if(inputs[i].value !== ""){
            Todospreenchidos = true
        }else{
            Todospreenchidos = false
        }
    }
    if(!verificaEmail(email_cad)){
        Todospreenchidos = false   
    }
    if(!verificaTelefone(telefone)){
        Todospreenchidos = false
    }
    if(!verificaData(dia, mes, ano)){
        Todospreenchidos = false
    }
    if (!Todospreenchidos) {
        aviso.style.visibility="visible"
    }else{
        localStorage.setItem("email_salvar", email_cad)
        localStorage.setItem("senha_salvar", senha_cad)
        window.location.href='../abas/index.html'
    }
    aviso.animate([
            {transform: 'transalateX(1px)', opacity: 1},
            {transform: 'transalateX(0px)', opacity: 0.5},
            {transform: 'translateX(1px)', opacity: 1},
            {transform: 'translateX(0px)', opacity: 0.5},
        ], {
            duration: 100,
            iterations: 1
        }
        )
    
    

}


function entrar(){
    let email = document.getElementById("Email")
    let senha = document.getElementById("senha")
    let aviso1 = document.getElementById("aviso_1ºinput")
    let aviso2 = document.getElementById("aviso_2ºinput")
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
