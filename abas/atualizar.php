<?php
    include "conexao.php";
    include "../scripts/script.js";
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $telefone = $_POST['tel'];
    $nome = $_POST['Nome'];
    $usuario = $_POST['usuario'];

    $sql = "INSERT INTO usuario(email, senha, tel, nome, usuario) values('$email', '$senha', '$telefone', '$nome', '$usuario');";

    if(mysqli_query($conexao, $sql)){
        header("location:index.php");
        
    }
    
?>