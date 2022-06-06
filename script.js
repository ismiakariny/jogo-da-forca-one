var telaInicial = document.querySelector('#tela-inicial');
var botaoComecar = document.querySelector('.botao-comecar');
var botaoAdicionar = document.querySelector('.botao-adicionar');
var telaDoJogo = document.querySelector('#tela-do-jogo');
var telaAdicionar = document.querySelector('#tela-adicionar')

botaoComecar.addEventListener('click', function(){
    if ($('#tela-inicial').not('.invisivel').length) {
        telaInicial.classList.add('invisivel');        
    }

    if($('#tela-do-jogo').hasClass('invisivel')) {
        telaDoJogo.classList.remove('invisivel');
        alert("Jogo foi iniciado!")
    }

});

botaoAdicionar.addEventListener('click', function() {
    if ($('#tela-inicial').not('.invisivel').length) {
        telaInicial.classList.add('invisivel');        
    }

    if($('#tela-adicionar').hasClass('invisivel')) {
        telaAdicionar.classList.remove('invisivel');
        alert("Adicione uma nova palavra!");
    }
})



