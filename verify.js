
// Verifica se os dados sao validos 
function processaCadastro(){
    var usuario = document.getElementById("Login1").value;
    var email = document.getElementById("Email").value;
    var senha = document.getElementById("Senha1").value;
    var senhaconfirm = document.getElementById("SenhaConfirm").value;


    if (usuario != null && email != null){
        
        if (senha == senhaconfirm && senha!=""){
            // Mandar os dados para o banco de dados
            // usar php para isso
            redir();
            return;
        }
        
        // Se as senhas nao corresponderem refazer
        // formulario
        else{
            alert("Senhas nao correspondem");
            return;
        }
    }
    return;
}

function redir(){
    var redireciona = document.location.assign("escrevaVC.html");
    console.select(redireciona)
}