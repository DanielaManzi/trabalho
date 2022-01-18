//Função para trocar imagem em transporte.
function trocaImagem() {
    var imagem = "";
    var veiculo = document.getElementById("transportes").value;
    if (veiculo === "onibus") {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/onibus.jpg" class="imagem">';
        imagem += '</div>';
    } else if (veiculo === "jeep") {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/jeep.jpg" class="imagem">';
        imagem += '</div>';
    } else if (veiculo === "balsa") {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/balsa.jpg" class="imagem">';
        imagem += '</div>';
    } else if (veiculo === "camelo") {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/camelo.jpg" class="imagem">';
        imagem += '</div>';
    } else if (veiculo === "safari") {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/safari.jpg" class="imagem">';
        imagem += '</div>';
    } else if (veiculo === "skyline") {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/skyline.jpg" class="imagem">';
        imagem += '</div>';
    } else if (veiculo === "helicoptero") {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/helicoptero.jpg" class="imagem">';
        imagem += '</div>';
    } else if (veiculo === "autodromo") {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/autodromo.jpg" class="imagem">';
        imagem += '</div>';
    } else {
        imagem = '';
        imagem += '<div>';
        imagem += '<img src="img/beduino.jpg" class="imagem">';
        imagem += '</div>';
    }
    document.getElementById("mostrador").innerHTML = imagem;
}
//Cadastra e lista em uma tabela as dicas.

var inicioCadastro = '';
var meioCadastro = '';
var fimCadastro = '';
var contador = 0;

function montaCadastro() {
    var valida=0;
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var sexo = document.getElementById("sexo").value;
    var email = document.getElementById("email").value;
    var nascimento = document.getElementById("nascimento").value;
    var comunicacao = document.getElementById("comunicacao").value;
    var canal = document.getElementById("canal").value;

    contador++
    valida = (contador % 5);

    inicioCadastro = ('<table>' +
        '<tr>' +
        '<th>NL</th>' +
        '<th>Nome</th>' +
        '<th>Sobrenome</th>' +
        '<th>Sexo</th>' +
        '<th>E-mail</th>' +
        '<th>Nascimento</th>' +
        '<th>Comunicação</th>' +
        '<th>Canal</th>' +
        +'</tr>');

    switch (valida) {
        case 0:
            meioCadastro += ('<tr style= "background-color: #eee;">' +
                '<td>' + contador + '</td>' +
                '<td>' + nome + '</td>' +
                '<td>' + sobrenome + '</td>' +
                '<td>' + sexo + '</td>' +
                '<td>' + email + '</td>' +
                '<td>' + nascimento + '</td>' +
                '<td>' + comunicacao + '</td>' +
                '<td>' + canal + '</td>' +
                '</tr>');
            break;
        case 1:

            meioCadastro += ('<tr style= "background-color: #bbb;">' +
                '<td>' + contador + '</td>' +
                '<td>' + nome + '</td>' +
                '<td>' + sobrenome + '</td>' +
                '<td>' + sexo + '</td>' +
                '<td>' + email + '</td>' +
                '<td>' + nascimento + '</td>' +
                '<td>' + comunicacao + '</td>' +
                '<td>' + canal + '</td>' +
                '</tr>');
            break;
        case 2:
            meioCadastro += ('<tr style= "background-color: #999;">' +
                '<td>' + contador + '</td>' +
                '<td>' + nome + '</td>' +
                '<td>' + sobrenome + '</td>' +
                '<td>' + sexo + '</td>' +
                '<td>' + email + '</td>' +
                '<td>' + nascimento + '</td>' +
                '<td>' + comunicacao + '</td>' +
                '<td>' + canal + '</td>' +
                '</tr>');
            break;
        case 3:
            meioCadastro += ('<tr style= "background-color: #777;">' +
                '<td>' + contador + '</td>' +
                '<td>' + nome + '</td>' +
                '<td>' + sobrenome + '</td>' +
                '<td>' + sexo + '</td>' +
                '<td>' + email + '</td>' +
                '<td>' + nascimento + '</td>' +
                '<td>' + comunicacao + '</td>' +
                '<td>' + canal + '</td>' +
                '</tr>');
            break;
        case 4:
            meioCadastro += ('<tr style= "background-color: #555;">' +
                '<td>' + contador + '</td>' +
                '<td>' + nome + '</td>' +
                '<td>' + sobrenome + '</td>' +
                '<td>' + sexo + '</td>' +
                '<td>' + email + '</td>' +
                '<td>' + nascimento + '</td>' +
                '<td>' + comunicacao + '</td>' +
                '<td>' + canal + '</td>' +
                '</tr>');
            break;
    }

    fimCadastro = '</table>';

    document.getElementById("mostrarCadastro").innerHTML = (inicioCadastro + meioCadastro + fimCadastro);
}