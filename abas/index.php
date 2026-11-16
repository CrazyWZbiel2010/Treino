
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../estilos/style-index.css">
</head>
<body>
    <div>
        <h1>SIGN-IN</h1>
        <form action="verificar.php" method="POST">
            <input type="email" id="Email" placeholder="email" required name='email'>
            <label for="Email" id="ttemail">Email: </label>
            <p id="aviso_1ºinput" class="aviso">&#x26A0 Email ou senha incorretos!</p>
            <input type="password" id="senha" placeholder="Senha" required name='senha'>
            <label for="senha" id="ttsenha">Senha: </label>
            <p id="aviso_2ºinput" class="aviso">&#x26A0 Email ou senha incorretos!</p>
            <button onclick="entrar()">Entrar</button>
        </form>
        <a href="Cadastre-se.php" id="Cadastre">Cadastre-se</a>
        <a href="EsqueceuSenha.php" id="esqueceuSenha">Esqueceu a senha?</a>
    </div>
    <script src="../scripts/script.js"></script>
</body>
</html>