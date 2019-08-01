tarefas = [];

function adicionar() {
    var campoNome = document.getElementById("nome");
    var nome = campoNome.value;
    valido = validar(nome, campoNome);
    if (valido == false) {
        // Mostrar feedback
        return;
    }
    var elementoTr = document.createElement("tr");
    var elementoTdNome = document.createElement("td");
    elementoTdNome.innerHTML = nome;
    var elementoTdAcao = document.createElement("td");
    // Adicionar botões na coluna da ação
    elementoTr.appendChild(elementoTdNome);
    elementoTr.appendChild(elementoTdAcao);

    document.getElementById("registros").appendChild(elementoTr);
    limparCampo(campoNome);
}

function apagar() {

}

function preencherCampo() {

}

function editar() {

}

function atualizarQuantidade() {

}

function limparCampo(campo) {
    campo.value = "";
    campo.focus();

}

function validar(nome, campo) {

}