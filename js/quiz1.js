// Quiz 1 — Detetive das Cientistas

// Perguntas
let pergunta1 = "Sou conhecida por minhas pesquisas sobre a radioatividade. Quem sou eu?";
let pergunta2 = "Fui uma matemática que ajudou a NASA a calcular trajetórias espaciais. Quem sou eu?";
let pergunta3 = "Minhas anotações sobre o primeiro algoritmo destinado a uma máquina fizeram de mim uma pioneira da programação. Quem sou eu?";
let pergunta4 = "Utilizei imagens de difração de raios X que contribuíram para revelar a estrutura do DNA. Quem sou eu?";
let pergunta5 = "Fui uma astrônoma que descobriu cometas e cujo nome aparece em um cometa periódico. Quem sou eu?";
let pergunta6 = "Recebi o Nobel de Química em 1964 por determinar a estrutura de substâncias bioquímicas importantes. Quem sou eu?";
let pergunta7 = "Sou considerada uma das pioneiras da enfermagem moderna e fiquei conhecida pelo trabalho durante a Guerra da Crimeia. Quem sou eu?";
let pergunta8 = "Fui uma paleontóloga britânica conhecida por descobrir fósseis de ictiossauros. Quem sou eu?";
let pergunta9 = "Fui uma física austríaca que contribuiu para a explicação teórica da fissão nuclear. Quem sou eu?";
let pergunta10 = "Sou uma primatóloga conhecida por estudar chimpanzés em seu ambiente natural. Quem sou eu?";

// Respostas
let resposta1 = "Marie Curie";
let resposta2 = "Katherine Johnson";
let resposta3 = "Ada Lovelace";
let resposta4 = "Rosalind Franklin";
let resposta5 = "Caroline Herschel";
let resposta6 = "Dorothy Crowfoot Hodgkin";
let resposta7 = "Florence Nightingale";
let resposta8 = "Mary Anning";
let resposta9 = "Lise Meitner";
let resposta10 = "Jane Goodall";

// Inicia o código depois que o HTML for carregado.
document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript do Quiz 1 carregado!");

    // Elementos HTML
    const perguntaHTML = document.getElementById("pergunta");
    const respostaHTML = document.getElementById("respostaUsuario");
    const formQuiz = document.getElementById("formQuiz");
    const mensagemHTML = document.getElementById("mensagem");
    const tentativasHTML = document.getElementById("tentativas");
    const pontosHTML = document.getElementById("pontos");
    const progressoHTML = document.getElementById("progresso");
    const barraProgresso = document.getElementById("barraProgresso");
    const progressoContainer = document.getElementById("progressoContainer");
    const botaoResponder = document.getElementById("botaoResponder");

    // Verifica se os elementos existem no HTML.
    if (
        !perguntaHTML ||
        !respostaHTML ||
        !formQuiz ||
        !mensagemHTML ||
        !tentativasHTML ||
        !pontosHTML ||
        !progressoHTML ||
        !barraProgresso ||
        !progressoContainer ||
        !botaoResponder
    ) {
        console.error(
            "Erro: um ou mais elementos do HTML não foram encontrados. Confira os IDs."
        );
        return;
    }

    const labelResposta = formQuiz.querySelector("label");

    if (!labelResposta) {
        console.error("Erro: o formulário não possui um label.");
        return;
    }

    // Estado do quiz
    let numeroPergunta = 1;
    let tentativas = 3;
    let pontos = 0;
    let aguardandoProxima = false;
    let quizFinalizado = false;

    // Retorna uma pergunta de acordo com o número.
    function obterPergunta(numero) {
        switch (numero) {
            case 1: return pergunta1;
            case 2: return pergunta2;
            case 3: return pergunta3;
            case 4: return pergunta4;
            case 5: return pergunta5;
            case 6: return pergunta6;
            case 7: return pergunta7;
            case 8: return pergunta8;
            case 9: return pergunta9;
            case 10: return pergunta10;
            default: return "";
        }
    }

    // Retorna a resposta correta.
    function obterResposta(numero) {
        switch (numero) {
            case 1: return resposta1;
            case 2: return resposta2;
            case 3: return resposta3;
            case 4: return resposta4;
            case 5: return resposta5;
            case 6: return resposta6;
            case 7: return resposta7;
            case 8: return resposta8;
            case 9: return resposta9;
            case 10: return resposta10;
            default: return "";
        }
    }

    // Normaliza o texto para ignorar acentos,
    // maiúsculas, minúsculas e espaços extras.
    function normalizarResposta(texto) {
        return texto
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, " ");
    }

    // Mostra a pergunta atual.
    function mostrarPergunta() {
        perguntaHTML.textContent = obterPergunta(numeroPergunta);

        progressoHTML.textContent =
            `Pergunta ${numeroPergunta} de 10`;

        pontosHTML.textContent = pontos;

        barraProgresso.style.width =
            `${numeroPergunta * 10}%`;

        progressoContainer.setAttribute(
            "aria-valuenow",
            numeroPergunta * 10
        );

        tentativasHTML.textContent =
            `Tentativas restantes: ${tentativas}`;

        respostaHTML.value = "";
        respostaHTML.disabled = false;
        respostaHTML.required = true;

        botaoResponder.disabled = false;
        botaoResponder.textContent = "Responder";

        mensagemHTML.textContent = "";
        mensagemHTML.className =
            "mt-4 min-h-6 text-sm font-semibold";

        aguardandoProxima = false;

        respostaHTML.focus();
    }

    // Confere a resposta digitada.
    function verificarResposta() {
        const respostaUsuario =
            normalizarResposta(respostaHTML.value);

        const respostaCorreta =
            normalizarResposta(obterResposta(numeroPergunta));

        if (respostaUsuario === respostaCorreta) {
            pontos++;

            pontosHTML.textContent = pontos;

            mensagemHTML.textContent =
                "Correto! Você descobriu a cientista!";

            mensagemHTML.className =
                "mt-4 min-h-6 text-sm font-semibold text-green-700";

            prepararProximaPergunta();

        } else {
            tentativas--;

            tentativasHTML.textContent =
                `Tentativas restantes: ${tentativas}`;

            if (tentativas > 0) {
                mensagemHTML.textContent =
                    "Resposta incorreta! Tente novamente.";

                mensagemHTML.className =
                    "mt-4 min-h-6 text-sm font-semibold text-red-600";

                respostaHTML.value = "";
                respostaHTML.focus();

            } else {
                mensagemHTML.textContent =
                    `Suas tentativas acabaram! A resposta era: ${obterResposta(numeroPergunta)}.`;

                mensagemHTML.className =
                    "mt-4 min-h-6 text-sm font-semibold text-red-600";

                prepararProximaPergunta();
            }
        }
    }

    // Prepara o botão para avançar.
    function prepararProximaPergunta() {
        aguardandoProxima = true;

        respostaHTML.disabled = true;

        botaoResponder.textContent =
            numeroPergunta < 10
                ? "Próxima pergunta"
                : "Ver resultado";
    }

    // Exibe o resultado final.

    function finalizarQuiz() {
        quizFinalizado = true;

        let classificacao;
        let mensagemClassificacao;

        if (pontos >= 9) {
            classificacao = "Gênio da Ciência 🏆";
            mensagemClassificacao = "Impressionante! Você conhece muito bem a história das cientistas!";
        } else if (pontos >= 7) {
            classificacao = "Detetive de Elite 🔎";
            mensagemClassificacao = "Muito bem! Você conhece várias mulheres importantes para a ciência.";
        } else if (pontos >= 5) {
            classificacao = "Pesquisador em Formação 🔬";
            mensagemClassificacao = "Bom trabalho! Continue descobrindo mais sobre essas cientistas.";
        } else if (pontos >= 3) {
            classificacao = "Aprendiz da Ciência 📚";
            mensagemClassificacao = "Você está começando! Explore mais histórias de mulheres cientistas.";
        } else {
            classificacao = "Novato na Ciência 🌱";
            mensagemClassificacao = "Não desanime! Cada descoberta é uma oportunidade de aprender.";
        }

        progressoHTML.textContent = "Quiz concluído!";
        barraProgresso.style.width = "100%";
        progressoContainer.setAttribute("aria-valuenow", "100");

        perguntaHTML.textContent = `Você acertou ${pontos} de 10 perguntas!`;

        mensagemHTML.textContent =
            `${classificacao} — ${mensagemClassificacao} `;

        mensagemHTML.className =
            "mt-4 text-base font-bold min-h-6 text-purple-800";

        respostaHTML.classList.add("hidden");
        respostaHTML.disabled = true;
        respostaHTML.required = false;
        labelResposta.classList.add("hidden");

        tentativasHTML.textContent = "Obrigado por participar da SNCT 2026!";

        botaoResponder.textContent = "Jogar novamente";
    }

    // Reinicia o quiz.
    function reiniciarQuiz() {
        numeroPergunta = 1;
        tentativas = 3;
        pontos = 0;
        aguardandoProxima = false;
        quizFinalizado = false;

        respostaHTML.classList.remove("hidden");
        labelResposta.classList.remove("hidden");

        mostrarPergunta();
    }

    // Impede o envio normal do formulário.
    formQuiz.addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("Botão do quiz acionado!");

        if (quizFinalizado) {
            reiniciarQuiz();
            return;
        }

        if (aguardandoProxima) {
            if (numeroPergunta < 10) {
                numeroPergunta++;
                tentativas = 3;

                mostrarPergunta();
            } else {
                finalizarQuiz();
            }

            return;
        }

        if (respostaHTML.value.trim() !== "") {
            verificarResposta();
        }
    });

    // Exibe a primeira pergunta.
    mostrarPergunta();

});