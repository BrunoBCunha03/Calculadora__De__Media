const form = document.getElementById('formulario__atividade');
let linhas = '';
const imgAprovado = '<img src="./assets/images/aprovado.png" />';
const imgReprovado = '<img src="./assets/images/reprovado.png" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota miníma'));

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adcionaLinha() {
    const nomeAtividade = document.getElementById('nome__atividade');
    const notaAtividade = document.getElementById('nota__atividade');

    if (atividades.includes(nomeAtividade.value)) {
        alert(`Atividade: ${nomeAtividade.value} já inserida`);
    }
    else {
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));

        let linha = `<tr>`;
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;

    };

    nomeAtividade.value = '';
    notaAtividade.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media__final__valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media__final__resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
};

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    };

    return (somaDasNotas / notas.length);
};