<?php
    include "conexao.php";
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT '$email', '$senha' from usuario;";

    if(mysqli_query($conexao, $sql)){
        header("location:home.php");
    }else{
        
    }
?>