<?php
    $servidor = 'localhost';
    $usuario = "root";
    $senha = "";
    $banco = "treino";

    $conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

    if(!$conexao){
        die("Erro na conexão com o banco" . sqli_connect_error());
    }
    mysqli_set_charset($conexao, "utf8");
?>