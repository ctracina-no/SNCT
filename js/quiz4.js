
const totalPerguntas = 10;

let perguntaAtual = 1;
let acertos = 0;
let respondido = false;

const areaPerguntas = document.getElementById("perguntas");
const contadorPergunta = document.getElementById("contadorPergunta");
const contadorAcertos = document.getElementById("contadorAcertos");
const barraProgresso = document.getElementById("barraProgresso");
const mensagem = document.getElementById("mensagem");

const botaoVerdadeiro = document.getElementById("botaoVerdadeiro");
const botaoFalso = document.getElementById("botaoFalso");

const areaJogo = document.getElementById("areaJogo");
const areaResultado = document.getElementById("resultado");

const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const classificacao = document.getElementById("classificacao");
const mensagemFinal = document.getElementById("mensagemFinal");
const botaoReiniciar = document.getElementById("botaoReiniciar");

function criarPerguntas() {

    let conteudo = "";

    for (let i = 1; i <= totalPerguntas; i++) {

        let texto = "";
        let respostaCorreta = "";

        switch (i) {

            case 1:
                texto = "Marie Curie foi a primeira mulher a receber um Prêmio Nobel e recebeu prêmios em Física e Química.";
                respostaCorreta = "Verdadeiro";
                break;

            case 2:
                texto = "Katherine Johnson trabalhou nos cálculos matemáticos utilizados em missões espaciais da NASA, incluindo a Apollo 11.";
                respostaCorreta = "Verdadeiro";
                break;

            case 3:
                texto = "Ada Lovelace é considerada por muitos uma das primeiras programadoras da história.";
                respostaCorreta = "Verdadeiro";
                break;

            case 4:
                texto = "Rosalind Franklin descobriu sozinha a estrutura do DNA, sem a contribuição de outros pesquisadores.";
                respostaCorreta = "Falso";
                break;

            case 5:
                texto = "Caroline Herschel foi uma astrônoma que descobriu cometas.";
                respostaCorreta = "Verdadeiro";
                break;

            case 6:
                texto = "Dorothy Crowfoot Hodgkin utilizou a cristalografia de raios X para investigar estruturas de substâncias como a penicilina e a vitamina B12.";
                respostaCorreta = "Verdadeiro";
                break;

            case 7:
                texto = "Florence Nightingale trabalhou com enfermagem, mas nunca utilizou estatística em suas pesquisas.";
                respostaCorreta = "Falso";
                break;

            case 8:
                texto = "Mary Anning contribuiu para o estudo dos fósseis e de antigos répteis marinhos.";
                respostaCorreta = "Verdadeiro";
                break;

            case 9:
                texto = "Lise Meitner recebeu sozinha o Prêmio Nobel de Química pela descoberta da fissão nuclear.";
                respostaCorreta = "Falso";
                break;

            case 10:
                texto = "Jane Goodall ficou conhecida por estudar chimpanzés na região de Gombe, na Tanzânia.";
                respostaCorreta = "Verdadeiro";
                break;
        }

        conteudo += `
            <div id="pergunta-${i}"
                class="hidden bg-purple-50 border border-purple-200 rounded-xl p-6">

                <p class="text-sm font-bold text-purple-800 mb-3">
                    AFIRMAÇÃO ${i}
                </p>

                <p class="text-lg font-semibold leading-relaxed">
                    ${texto}
                </p>

                <span class="hidden" data-correta="${respostaCorreta}"></span>

            </div>
        `;
    }

    areaPerguntas.innerHTML = conteudo;

    mostrarPergunta();
}

function mostrarPergunta() {

    for (let i = 1; i <= totalPerguntas; i++) {
        document.getElementById("pergunta-" + i)
            .classList.add("hidden");
    }

    document.getElementById("pergunta-" + perguntaAtual)
        .classList.remove("hidden");

    contadorPergunta.textContent =
        "Pergunta " + perguntaAtual + " de " + totalPerguntas;

    contadorAcertos.textContent = "Acertos: " + acertos;

    barraProgresso.style.width =
        ((perguntaAtual - 1) / totalPerguntas * 100) + "%";

    mensagem.textContent = "";

    respondido = false;

    botaoVerdadeiro.textContent = "Verdadeiro";
    botaoFalso.textContent = "Falso";

    botaoVerdadeiro.classList.remove("hidden");
    botaoFalso.classList.remove("hidden");
}

function verificarResposta(respostaEscolhida) {

    if (respondido) {
        return;
    }

    const pergunta = document.getElementById(
        "pergunta-" + perguntaAtual
    );

    const elementoResposta = pergunta.querySelector("[data-correta]");
    const respostaCorreta = elementoResposta.dataset.correta;

    respondido = true;

    if (respostaEscolhida === respostaCorreta) {

        acertos++;

        mensagem.textContent = "Correto! Você acertou.";
        mensagem.className =
            "text-center font-semibold text-green-700 mb-6";

    } else {

        mensagem.textContent =
            "Resposta incorreta! A resposta certa era: " +
            respostaCorreta + ".";

        mensagem.className =
            "text-center font-semibold text-red-700 mb-6";
    }

    contadorAcertos.textContent = "Acertos: " + acertos;

    barraProgresso.style.width =
        (perguntaAtual / totalPerguntas * 100) + "%";

    botaoVerdadeiro.textContent = "Próxima pergunta →";
    botaoFalso.classList.add("hidden");
}

function proximaPergunta() {

    if (!respondido) {
        return;
    }

    if (perguntaAtual < totalPerguntas) {

        perguntaAtual++;

        mostrarPergunta();

    } else {

        finalizarQuiz();
    }
}

function finalizarQuiz() {

    areaJogo.classList.add("hidden");
    areaResultado.classList.remove("hidden");

    pontuacaoFinal.textContent =
        "Você acertou " + acertos + " de " + totalPerguntas + " perguntas!";

    if (acertos >= 9) {

        classificacao.textContent = "Gênio da Ciência";

        mensagemFinal.textContent =
            "Excelente! Você conhece muito sobre mulheres na ciência.";

    } else if (acertos >= 7) {

        classificacao.textContent = "Detetive de Elite";

        mensagemFinal.textContent =
            "Muito bem! Você conhece diversas cientistas e suas contribuições.";

    } else if (acertos >= 5) {

        classificacao.textContent = "Pesquisador em Formação";

        mensagemFinal.textContent =
            "Bom trabalho! Continue descobrindo as histórias dessas cientistas.";

    } else if (acertos >= 3) {

        classificacao.textContent = "Aprendiz da Ciência";

        mensagemFinal.textContent =
            "Você já começou a aprender. Que tal conhecer mais mulheres cientistas?";

    } else {

        classificacao.textContent = "Novato na Ciência";

        mensagemFinal.textContent =
            "Não desanime! Cada tentativa é uma oportunidade de aprender.";
    }
}

function reiniciarQuiz() {

    perguntaAtual = 1;
    acertos = 0;
    respondido = false;

    areaJogo.classList.remove("hidden");
    areaResultado.classList.add("hidden");

    criarPerguntas();
}

botaoVerdadeiro.addEventListener("click", function () {

    if (respondido) {

        proximaPergunta();

    } else {

        verificarResposta("Verdadeiro");
    }
});

botaoFalso.addEventListener("click", function () {

    verificarResposta("Falso");
});

botaoReiniciar.addEventListener("click", reiniciarQuiz);

criarPerguntas();
