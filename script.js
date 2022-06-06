var telaInicial = document.querySelector('#tela-inicial');
var botaoComecar = document.querySelector('.botao-comecar');
var telaDoJogo = document.querySelector('#tela-do-jogo');

botaoComecar.addEventListener('click', function(){
    if ($('#tela-inicial').not('.invisivel').length) {
        telaInicial.classList.add('invisivel');        
    }

    if($('#tela-do-jogo').hasClass('invisivel')) {
        telaDoJogo.classList.remove('invisivel');
        alert("Jogo foi iniciado!")
    }

});

