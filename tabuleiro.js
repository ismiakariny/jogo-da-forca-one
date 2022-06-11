// SELETORES E VARIÁVEIS

var tela = document.querySelector('.tela');
var canvas = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var palavras = ['ALURA', 'ORACLE', 'HTML', 'PROGRAMA', 'CSS'];
var letras = [];
var letrasCorretas = [];
var palavraCorreta = "";
var palavraSecreta = "";
var letra = "";
var erros = 9;
var tentativas = 0;
var venceu = 'Você venceu';
var perdeu = 'Você perdeu';

// FUNÇÃO PARA ESCOLHER PALAVRA

function escolherPalavraSecreta() {
    var palavra = palavras[Math.floor(Math.random()*palavras.length)];
    palavraSecreta = palavra;
    console.log(palavra);
    return palavra;
}

// DESENHAR TRAÇOS DAS PALAVRAS

function desenhaTraco(palavraSecreta) {
    pincel.lineWidth = 3;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';
    pincel.strokeStyle = '#0A3871';
    pincel.beginPath();
    var eixo = 300/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++){
        pincel.moveTo(150 + (eixo * i), 300);
        pincel.lineTo(170 + (eixo * i), 300);
    }
    pincel.stroke();
    pincel.closePath();
}

// ESCREVER AS LETRAS DA TENTATIVA

function escreverLetraCorreta(index) {
    pincel.font = 'bold 25px Inter';
    pincel.fillStyle = '#0A3871';    
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';

    var eixo = 300/palavraSecreta.length;
    pincel.fillText(palavraSecreta[index], 150 + (eixo * index), 290);
}


function escreverLetraIncorreta(letra, errosRestantes) {
    pincel.font = 'bold 16px Inter';
    pincel.fillStyle = '#A51B0B';    
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';
    pincel.fillText(letra, 150 + (16 * (10 - errosRestantes)), 345, 16);
}


function desenhaTexto(resultado, x, y, cor) {
    pincel.font = 'bold 25px Inter';
    pincel.fillStyle = cor;    
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';
    pincel.fillText(resultado, x, y);
}


// VERIFICAR E ADICIONAR LETRAS DA TENTATIVA

function verificarLetraCorreta(key) {
    if(letras.length < 1 || letras.indexOf(key) < 0) {
        console.log(key);
        letras.push(key);
        return false;
    } else {
        letras.push(key.toUpperCase());
        return true;
    }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(letter) {
    if(palavraSecreta.indexOf(letter) <= 0) {
        erros -= 1;
        console.log("Número de erros restantes: " + erros)
    }

}

// CAPTURAR EVENTOS DO TECLADO

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();
    if(!verificarLetraCorreta(e.key)){
        if(palavraSecreta.includes(letra)){
            adicionarLetraCorreta(palavraSecreta.indexOf(letra));
            for(let i = 0; i < palavraSecreta.length; i++) {
                if(palavraSecreta[i] === letra) {
                    escreverLetraCorreta(i)
                }
            }
        } else {
            if (!verificarLetraCorreta(e.key))
                return
                adicionarLetraIncorreta(letra)
                escreverLetraIncorreta(letra, erros)
                desenhaForca();
        }
    } 
}

// LIMPAR TELA

function limpaTela() {
    pincel.clearRect(0, 0, canvas.width, canvas.height);
    erros = 9;
    return erros;
}

// DESENHAR FORCA

function desenhaLinha(xInicial, yInicial, xFinal, yFinal) {
   
    pincel.strokeStyle = '#0A3871';
    pincel.lineWidth = 3;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';
    pincel.moveTo(xInicial, yInicial);
    pincel.lineTo(xFinal, yFinal);
    pincel.stroke();
};

function desenhaCirculo(x, y, raio) {

    pincel.strokeStyle = '#0A3871';
    pincel.lineWidth = 3;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.stroke();
} 

function desenhaForca() {
    if(erros == 8) {
        desenhaLinha(200, 230, 200, 10);
    } else if(erros == 7) {
        desenhaLinha(200, 10, 350, 10);
    } else if(erros == 6) {
        desenhaCirculo(350, 40, 30);
    } else if(erros == 5) {
        desenhaLinha(350, 70, 350, 190);
    } else if(erros == 4) {
        desenhaLinha(350, 70, 300, 105);
    } else if(erros == 3) {
        desenhaLinha(350, 70, 400, 105);
    } else if(erros == 2) {
        desenhaLinha(350, 190, 300, 230);
    } else if(erros == 1) {
        desenhaLinha(350, 190, 400, 230);
    } else if(erros == 0) {
        console.log("Perdeu!");
        desenhaTexto(perdeu, 450, 150, '#FF0000');
    }
}

//if(palavraCorreta.length == palavraSecreta.length) {
//    console.log("Venceu!" + palavraCorreta.value);
//    desenhaTexto(venceu, 10, 150, '#00B300');    
//}

