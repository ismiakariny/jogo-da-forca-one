// SELETORES E VARIÁVEIS

var tela = document.querySelector('.tela')
var pincel = tela.getContext('2d');
var palavras = ['ALURA', 'ORACLE', 'HTML', 'PROGRAMA', 'CSS'];
var letras = [];
var palavraCorreta = "";
var erros = 9;
var tentativas = 0;

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
    var eixo = 400/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++){
        pincel.moveTo(100 + (eixo * i), 300);
        pincel.lineTo(150 + (eixo * i), 300);
    }
    pincel.stroke();
    pincel.closePath();
}

desenhaTraco(escolherPalavraSecreta());

// ESCREVER AS LETRAS DA TENTATIVA

function escreverLetraCorreta(index) {
    pincel.font = 'bold 24px Inter';
    pincel.strokeStyle = '#0A3871';    
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';

    var eixo = 300/palavraSecreta.length;
    pincel.fillText(palavraSecreta[index], 150 + (eixo * index), 330);
}


function escreverLetraIncorreta(letra, errorsLeft) {
    pincel.font = 'bold 16px Inter';
    pincel.strokeStyle = '#A51B0B';    
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';
    pincel.fillText(letra, 355 + (16 * (10 - errorsLeft)), 385, 16);
}

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
    }

}

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
        }
    } else {
        if (!verificarLetraCorreta(e.key))
            return
            adicionarLetraIncorreta(letra)
            escreverLetraIncorreta(letra, erros)
    }
}


if(erros == 7) {
    desenhaLinha(200, 230, 200, 10);
}

if(erros == 6) {
    desenhaLinha(200, 10, 350, 10);
} 

if(erros == 5) {
    desenhaCabeca();
} 

if(erros == 4) {
    desenhaLinha(350, 70, 350, 190);
} 

if(erros == 3) {
    desenhaLinha(350, 70, 300, 105);
} 

if(erros == 2) {
    desenhaLinha(350, 70, 400, 105);
} 

if(erros == 1) {
    desenhaLinha(350, 190, 300, 230);
} 
if(erros == 0) {
    desenhaLinha(350, 190, 400, 230);
} 


function desenhaLinha(xInicial, yInicial, xFinal, yFinal) {
   
    pincel.strokeStyle = '#0A3871';
    pincel.lineWidth = 3;
    pincel.lineCap = 'round';
    pincel.lineJoin = 'round';
    pincel.moveTo(xInicial, yInicial);
    pincel.lineTo(xFinal, yFinal);
    pincel.stroke();
};

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaCabeca(){
    desenhaCirculo(350, 40, 30, '#0A3871');
    desenhaCirculo(350, 40, 28, '#F3F5FC');
}

if(!verificarLetraCorreta) {
    tentativas++

}
    //var bonecoParteUm = desenhaLinha(200, 230, 200, 10);
    //var bonecoParteDois = desenhaLinha(200, 10, 350, 10);
    //var bonecoParteTres = desenhaCabeca();
    //var bonecoParteQuatro = desenhaLinha(350, 70, 350, 190);
    //var bonecoParteCinco = desenhaLinha(350, 70, 300, 105);
    //var bonecoParteSeis = desenhaLinha(350, 70, 400, 105)
    //var bonecoParteSete = desenhaLinha(350, 190, 300, 230);
    //var bonecoParteOito = desenhaLinha(350, 190, 400, 230);

    //var partesBoneco = [bonecoParteUm, bonecoParteDois, bonecoParteTres, bonecoParteQuatro, bonecoParteCinco, bonecoParteSeis, bonecoParteSete, bonecoParteOito];
