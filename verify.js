
// Verifica se os dados sao validos 
function processaCadastro(){
    var usuario = document.getElementById("Login1").value;
    var email = document.getElementById("Email").value;
    var senha = document.getElementById("Senha1").value;
    var senhaconfirm = document.getElementById("SenhaConfirm").value;


    if (usuario != null && email != null){
        
        if ((senha == senhaconfirm && senha!="") && (senha.length >= 5)){
            // Mandar os dados para o banco de dados
            // usar php para isso
            alert("Cadastro efetuado com sucesso");
            redir();
            return;
        }
        
        // Se as senhas nao corresponderem refazer
        // formulario
        else if(senha != senhaconfirm){
            alert("Senhas nao correspondem");
        }

        else{
            // Se a senha for curta
            alert("Senha com no minimo 5 caracteres");
        }
    }
    return;
}

function redir(){
    var redireciona = document.location.assign("escrevaVC.html");
    console.select(redireciona)
}