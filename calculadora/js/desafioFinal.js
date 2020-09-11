function escreverNaTela(mes, estacao) {
    const visor = document.querySelector('#visor');
    visor.innerText = `O mês do ano é ${mes} e a estação é ${estacao}`;
};

function mudarImagemEFundo(estacao) {
    const imagem = document.querySelector('img');
    const corpo = document.querySelector('body');
    switch(estacao) {
        case "Verão":
            imagem.src = "./images/verao.jpg";
            corpo.style.backgroundColor = 'yellow';
            break;
        case "Outono":
            imagem.src = "./images/outono.jpg";
            corpo.style.backgroundColor = 'brown';
            break;
        case "Inverno":
            imagem.src = "./images/inverno.jpg";
            corpo.style.backgroundColor = 'gray';
            break;
        case "Primavera":
            imagem.src = "./images/primavera.jpg"
            corpo.style.backgroundColor = 'blue';
            break;
    };
};

function retornaMes(numero) {
    const meses = {
        1:"Janeiro",
        2:"Fevereiro",
        3:"Março",
        4:"Abril",
        5:"Maio",
        6:"Junho",
        7:"Julho",
        8:"Agosto",
        9:"Setembro",
        10:"Outubro",
        11:"Novembro",
        12:"Dezembro"
    };
    return meses[numero];
};

function retornaEstacao(numero) {
    let estacao = "";
    switch(numero) {
        case 12:
        case 1:
        case 2:
            estacao = "Verão";
            break;
        case 3:
        case 4:
        case 5:
            estacao = "Outono";
            break;
        case 6:
        case 7:
        case 8:
            estacao = "Inverno";
            break;
        case 9:
        case 10:
        case 11:
            estacao = "Primavera";
            break;
    }
    return estacao;
};

document.querySelector('.container').addEventListener('click', function(evento) {
    const numero = parseInt(evento.target.innerText);
    const mes = retornaMes(numero);
    const estacao = retornaEstacao(numero);
    mudarImagemEFundo(estacao);
    escreverNaTela(mes, estacao);
});