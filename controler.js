// VALIDAÇÃO DE PREENCHIMENTO
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        //alert('Campos preenchidos com sucesso');
        window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){

    } else{
        alert("Favor informar um nome");
    }
}

// FUNÇÃO DE CRIAÇÃP DE LISTA
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
}