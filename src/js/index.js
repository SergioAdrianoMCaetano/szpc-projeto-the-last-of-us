/*
OBJETIVO: QUANDO CLICARMOS NO BOTÃO TEMOS QUE MOSTRAR A IMAGEM DE FUNDO CORRESPONDENTE;

- DAR UM JEITO DE PEGAR O ELEMENTO HTML DOS BOTÕES;

- DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUÁRIO NO BOTÃO;

- DESMARCAR O BOTÃO DE IDENTIFICAR O CLIQUE DO USUÁRIO NO BOTÃO;

- DESMARCAR O BOTÃO SELECIONADO ANTERIOR;

- MARCAR O BOTÃO CLICADO COMO SE ESTIVESSE SELECIONADA;

- ESCONDER A IMAGEM ATIVA ANTERIOR;

- FAZER APARECER A IMAGEM CORRESPONDENTE AO BOTÃO CLICADO;
*/

//PASSO 1 - DAR UM JEITO PEGAR O ELEMENTO HTML DOS BOTÕES;
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//PASSO 2 -  DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUÁRIO NO BOTÃO;
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

//PASSO 3 - DESMARCAR O BOTÃO DE IDENTIFICAR O CLIQUE DO USUÁRIO NO BOTÃO;
        desativarBotaoSelecionado();

//PASSO 4 - MARCAR O BOTÃO CLICADO COMO SE ESTIVESSE SELECIONADA;
        selecionarBotaoCarrossel(botao);

//PASSO 5 - ESCONDER A IMAGEM ATIVA ANTERIOR;
        esconderImagemAtiva();

//PASSO 6 - FAZER APARECER A IMAGEM CORRESPONDENTE AO BOTÃO CLICADO;
       mostrarImagemFundo(indice);         

    })
}); 

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

