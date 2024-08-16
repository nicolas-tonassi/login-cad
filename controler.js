// FUNÇÃO PARA VALIDAÇÃO DE ACESSO
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        //alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}
 
// FUNÇÃO PARA VALIDAR EMAIL
function validarEmail(email) {
    // Expressão regular para validar o formato do email
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}
// FUNÇÃO PARA ARMAZENAMENTO DE NOMES E EMAILS EM ARRAY
var dadosLista = [];
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;
    
    if(nomeUser && emailUser){
        if (validarEmail(emailUser)) {
            dadosLista.push({ nome: nomeUser, email: emailUser });
            criaLista();
            document.getElementById('nomeUser').value = "";
            document.getElementById('emailUser').value = "";
        } else {
            alert("Por favor, insira um e-mail válido.");
        }
    }else{
        alert("Favor informar um nome e um e-mail para cadastro");
    }
}
 
// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for(let i=0; i<dadosLista.length; i++){
        tabela += "<tr><td>" + dadosLista[i].nome + "</td><td>" + dadosLista[i].email + "</td><td><button type='button' onclick='editar("+ i +")'>Editar</button><button type='button' onclick='excluir("+ i +")'>Excluir</button></td></tr>";
    }
    document.getElementById('tabela').innerHTML = tabela;
}
// FUNÇÃO PARA EDITAR NOMES E EMAILS NA LISTA
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[i].nome;
    document.getElementById('emailUser').value = dadosLista[i].email;
    excluir(i);
}
 
// FUNÇÃO PARA EXCLUIR NOME E EMAIL DA LISTA
function excluir(i){
    dadosLista.splice(i, 1);
    criaLista();
}