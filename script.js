var telaInicial = document.querySelector('#tela-inicial');
var botaoComecar = document.querySelector('.botao-comecar');
var botaoAdicionar = document.querySelector('.botao-adicionar');
var telaDoJogo = document.querySelector('#tela-do-jogo');
var telaAdicionar = document.querySelector('#tela-adicionar')
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

});

botaoAdicionar.addEventListener('click', function() {
    if ($('#tela-inicial').not('.invisivel').length) {
        telaInicial.classList.add('invisivel');        
    }

    if($('#tela-adicionar').hasClass('invisivel')) {
        telaAdicionar.classList.remove('invisivel');
    }
})


botaoSalvar.addEventListener('click', function(){
    if ($('#tela-adicionar').not('.invisivel').length) {
        telaAdicionar.classList.add('invisivel');        
    }

    if($('#tela-do-jogo').hasClass('invisivel')) {
        telaDoJogo.classList.remove('invisivel');
        alert("Jogo da forca foi iniciado!")
    }

});

botaoCancelar.addEventListener('click', function() {
    if ($('#tela-adicionar').not('.invisivel').length) {
        telaAdicionar.classList.add('invisivel');        
    }

    if($('#tela-inicial').hasClass('invisivel')) {
        telaInicial.classList.remove('invisivel');
    }
})


// TABULEIRO E FUNCIONALIDADES

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaTabuleiro (){

};