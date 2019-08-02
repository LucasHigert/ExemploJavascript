tarefas = [];
var indiceParaEditar = -1;
function salvar(e) {
    if (e.keyCode == 13) {
        adicionarEditar();

    }
}

function adicionarEditar() {
    if (indiceParaEditar == -1) {
        adicionar();
    }
    else {
        editar();
    }
}

function adicionar() {
    var campoNome = document.getElementById("nome");
    var nome = campoNome.value;
    valido = validar(nome, campoNome);
    if (valido == false) {
        return;
    }

    var elementoTr = document.createElement("tr");
    var elementotdNome = document.createElement("td");
    elementotdNome.innerHTML = nome;
    var elementoTdcao = document.createElement("td");

    //adiciona botões na coluna ação
    var elementoBotãoEditar = document.createElement("button");
    elementoBotãoEditar.innerHTML = "Editar";
    elementoBotãoEditar.classList.add("btn", "btn-primary", "mr-2");
    elementoBotãoEditar.onclick = preencherCampo;

    var elementoBotãoApagar = document.createElement("button");
    elementoBotãoApagar.innerHTML = "Apagar";
    elementoBotãoApagar.classList.add("btn", "btn-danger");
    elementoBotãoApagar.onclick = apagar;

    elementoTdcao.appendChild(elementoBotãoEditar);
    elementoTdcao.appendChild(elementoBotãoApagar);

    elementoTr.appendChild(elementotdNome);
    elementoTr.appendChild(elementoTdcao);

    document.getElementById("registros").appendChild(elementoTr);
    tarefas.push(nome);
    limparCampo(campoNome);
    atualizarQuantidade();
}

function apagar() {
    var confirmacao = confirm('Deseja realmente apagar?');

    if (confirmacao == true) {
        var elemento = event.target;
        var elementoTd = elemento.parentNode;
        var elementoTr = elementoTd.parentNode;
        var elementoTBody = elementoTr.parentNode;

        var elementoTdNome = elementoTr.childNodes[0];
        var nome = elementoTdNome.innerHTML;
        tarefas.pop(nome);
        atualizarQuantidade();

        //Depura no console diretamente, pra visualizar
        console.log(nome);

        elementoTBody.removeChild(elementoTr);



    }
}

function preencherCampo() {
    var elementoBotaoEditar = event.target;
    var elementoTr = elementoBotaoEditar.parentNode.parentNode;
    var elementoTdNome = elementoTr.childNodes[0];
    var nome = elementoTdNome.innerHTML;
    indiceParaEditar = tarefas.indexOf(nome);
    document.getElementById('nome').value = nome;
    document.getElementById('nome').focus();
}

function editar() {
    var nome =document.getElementById('nome').value;
    tarefas[indiceParaEditar]=nome;

    //Atualizar tabela
    var trs=document.getElementById('registros').childNodes;
    var elementoTr=trs[indiceParaEditar];
    elementoTr.childNodes[0].innerHTML=nome;


    indiceParaEditar=-1;
    document.getElementById('nome').value='';
    document.getElementById('nome').focus();

}

function atualizarQuantidade() {
    document.getElementById("quantidade").innerHTML = tarefas.length;
}

function limparCampo(campo) {
    campo.value = "";
    campo.focus();
}

function validar(nome, campo) {
    texto = '';

    if (nome.trim().length == 0) {
        texto = 'nome deve ser preenchido';
    } else if (nome.trim().length < 3) {
        texto = 'nome deve conter no mínimo 3 caracteres';
    } else if (nome.trim().length > 20) {
        texto = 'mnome deve conter no máximo 20 caracteres';
    }

    campo.classList.remove('border-danger', 'text-danger');

    var elementos = document.getElementsByClassName('span-erro');

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        var elementoPai = elemento.parentNode;
        elementoPai.removeChild(elemento);
    }

    if (texto != '') {
        alert(texto);
        campo.classList.add('border-danger', 'text-danger');

        var spanErro = document.createElement('span');
        spanErro.innerHTML = texto;
        spanErro.classList.add('span-erro', 'text-danger', 'font-weight-bold');

        var elementoPaiDoInput = campo.parentNode;
        elementoPaiDoInput.appendChild(spanErro);

        campo.focus();
        return false;
    }

    return true;
}
