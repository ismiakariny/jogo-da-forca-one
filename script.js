var telaInicial = document.querySelector('#tela-inicial');
var botaoComecar = document.querySelector('.botao-comecar');
var botaoAdicionar = document.querySelector('.botao-adicionar');
var telaDoJogo = document.querySelector('#tela-do-jogo');
var botaoNovo = document.querySelector('.botao-novo');
var botaoDesistir = document.querySelector('.botao-desistir');
var telaAdicionar = document.querySelector('#tela-adicionar')
var palavraInserida = document.querySelector('#entrada-do-texto');
var botaoSalvar = document.querySelector('.botao-salvar');
var botaoCancelar = document.querySelector('.botao-cancelar');

// BOTÕES DO JOGO DA FORCA

botaoComecar.addEventListener('click', function(){
    if ($('#tela-inicial').not('.invisivel').length) {
        telaInicial.classList.add('invisivel');        
    }

    if($('#tela-do-jogo').hasClass('invisivel')) {
        telaDoJogo.classList.remove('invisivel');
    }

    desenhaTraco(escolherPalavraSecreta());
});

botaoAdicionar.addEventListener('click', function() {
    if ($('#tela-inicial').not('.invisivel').length) {
        telaInicial.classList.add('invisivel');        
    }

    if($('#tela-adicionar').hasClass('invisivel')) {
        telaAdicionar.classList.remove('invisivel');
    }
    palavraSecreta = "";
    erros = -1;
})


botaoSalvar.addEventListener('click', function(){
    if ($('#tela-adicionar').not('.invisivel').length) {
        telaAdicionar.classList.add('invisivel');        
    }

    if($('#tela-do-jogo').hasClass('invisivel')) {
        telaDoJogo.classList.remove('invisivel');
        alert("Jogo da forca foi iniciado!")
    }

    palavras.push(palavraInserida.value);
    console.log(palavras);
    limpaTela()
    desenhaTraco(escolherPalavraSecreta());
});

botaoCancelar.addEventListener('click', function() {
    if ($('#tela-adicionar').not('.invisivel').length) {
        telaAdicionar.classList.add('invisivel');        
    }

    if($('#tela-inicial').hasClass('invisivel')) {
        telaInicial.classList.remove('invisivel');
    }
    limpaTela();
})

botaoNovo.addEventListener('click', function() {
    limpaTela()
    desenhaTraco(escolherPalavraSecreta());
})

botaoDesistir.addEventListener('click', function() {
    if ($('#tela-do-jogo').not('.invisivel').length) {
        telaDoJogo.classList.add('invisivel');        
    }

    if($('#tela-inicial').hasClass('invisivel')) {
        telaInicial.classList.remove('invisivel');
    }

    limpaTela();
})