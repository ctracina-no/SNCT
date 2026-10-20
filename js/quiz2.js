// Quiz 2 - Laboratório de Experiências
// Lógica com switch, if/else e funções, sem vetores.

document.addEventListener("DOMContentLoaded", function () {

    const problemaHTML = document.getElementById("problema");
    const escolhaHTML = document.getElementById("escolha");
    const formQuiz = document.getElementById("formQuiz");
    const mensagemHTML = document.getElementById("mensagem");
    const pontosHTML = document.getElementById("pontos");
    const progressoHTML = document.getElementById("progresso");
    const barraProgresso = document.getElementById("barraProgresso");
    const progressoContainer = document.getElementById("progressoContainer");
    const botaoResponder = document.getElementById("botaoResponder");
    const labelEscolha = formQuiz.querySelector("label");

    let numeroExperimento = 1;
    let pontos = 0;
    let aguardandoProxima = false;
    let quizFinalizado = false;

    function obterProblema(numero) {
        switch (numero) {
            case 1:
                return "Uma equipe quer descobrir se a luz influencia o crescimento de uma planta. Qual procedimento permite investigar essa hipótese de maneira adequada?";

            case 2:
                return "Você encontrou uma amostra de água com terra misturada. O objetivo é separar boa parte das partículas sólidas visíveis. Qual procedimento deve utilizar?";

            case 3:
                return "Você precisa investigar se a temperatura da água influencia a velocidade de dissolução do açúcar. Como deve organizar o experimento?";

            case 4:
                return "Um objeto desconhecido precisa ser analisado para descobrir sua densidade. Quais medidas são necessárias para calcular essa propriedade?";

            case 5:
                return "Você recebeu três objetos e precisa descobrir qual deles é atraído por um ímã. Qual procedimento é mais adequado?";

            case 6:
                return "Você quer investigar se o movimento do ar influencia a evaporação da água. Como deve comparar as amostras?";

            case 7:
                return "Uma equipe precisa investigar se uma solução é ácida ou básica. Qual procedimento permite obter essa informação sem provar a substância?";

            case 8:
                return "Você quer descobrir se a água influencia a germinação de sementes. Como deve planejar o experimento?";
        }
    }

    function mostrarOpcoes(numero) {
        switch (numero) {
            case 1:
                escolhaHTML.innerHTML = `
                    <option value="">Selecione uma opção</option>
                    <option value="A">Mudar a luz, a água e o solo ao mesmo tempo.</option>
                    <option value="B">Manter água e solo iguais, variando apenas a luz.</option>
                    <option value="C">Usar plantas diferentes e colocá-las em ambientes distintos.</option>
                    <option value="D">Observar uma planta uma única vez, sem registrar seu crescimento.</option>
                `;
                break;

            case 2:
                escolhaHTML.innerHTML = `
                    <option value="">Selecione uma opção</option>
                    <option value="A">Usar um ímã para atrair todas as partículas de terra.</option>
                    <option value="B">Aquecer a água até toda a terra desaparecer.</option>
                    <option value="C">Passar a mistura por um filtro adequado para reter partículas.</option>
                    <option value="D">Adicionar açúcar para fazer a terra se dissolver.</option>
                `;
                break;

            case 3:
                escolhaHTML.innerHTML = `
                    <option value="">Selecione uma opção</option>
                    <option value="A">Usar a mesma quantidade de açúcar e água, variando a temperatura.</option>
                    <option value="B">Usar mais açúcar na água quente e menos na água fria.</option>
                    <option value="C">Mudar a temperatura, a quantidade de água e a agitação ao mesmo tempo.</option>
                    <option value="D">Comparar água quente com óleo frio, adicionando açúcar aos dois.</option>
                `;
                break;

            case 4:
                escolhaHTML.innerHTML = `
                    <option value="">Selecione uma opção</option>
                    <option value="A">Medir apenas a cor e o comprimento do objeto.</option>
                    <option value="B">Observar se o objeto afunda na água, sem realizar outras medidas.</option>
                    <option value="C">Medir apenas a massa do objeto.</option>
                    <option value="D">Medir a massa e o volume do objeto.</option>
                `;
                break;

            case 5:
                escolhaHTML.innerHTML = `
                    <option value="">Selecione uma opção</option>
                    <option value="A">Aproximar o ímã dos objetos e observar qual é atraído.</option>
                    <option value="B">Aquecer todos os objetos antes de aproximar o ímã.</option>
                    <option value="C">Colocar os objetos na água e identificar qual afunda.</option>
                    <option value="D">Esfregar os objetos no chão e comparar seus formatos.</option>
                `;
                break;

            case 6:
                escolhaHTML.innerHTML = `
                    <option value="">Selecione uma opção</option>
                    <option value="A">Usar recipientes diferentes, quantidades diferentes e temperaturas diferentes.</option>
                    <option value="B">Colocar quantidades iguais de água em recipientes iguais e variar apenas o fluxo de ar.</option>
                    <option value="C">Deixar uma amostra ao sol e outra na geladeira, sem controlar outras condições.</option>
                    <option value="D">Adicionar sal a uma amostra e açúcar à outra, sem variar o fluxo de ar.</option>
                `;
                break;

            case 7:
                escolhaHTML.innerHTML = `
                    <option value="">Selecione uma opção</option>
                    <option value="A">Cheirar profundamente a solução para identificar sua composição.</option>
                    <option value="B">Provar uma pequena quantidade para descobrir seu sabor.</option>
                    <option value="C">Utilizar um indicador de pH apropriado e observar o resultado.</option>
                    <option value="D">Aquecer a solução até ela mudar de temperatura.</option>
                `;
                break;

            case 8:
                escolhaHTML.innerHTML = `
                    <option value="">Selecione uma opção</option>
                    <option value="A">Usar sementes diferentes, solos diferentes e quantidades diferentes de água.</option>
                    <option value="B">Colocar todas as sementes em água e não utilizar um grupo de comparação.</option>
                    <option value="C">Mudar a quantidade de água e a iluminação ao mesmo tempo.</option>
                    <option value="D">Separar sementes semelhantes em grupos, variando apenas a disponibilidade de água.</option>
                `;
                break;
        }
    }

    function obterRespostaCorreta(numero) {
        switch (numero) {
            case 1: return "B";
            case 2: return "C";
            case 3: return "A";
            case 4: return "D";
            case 5: return "A";
            case 6: return "B";
            case 7: return "C";
            case 8: return "D";
        }
    }

    function obterExplicacao(numero) {
        switch (numero) {
            case 1:
                return "Para investigar o efeito da luz, mantenha as outras condições iguais e varie apenas a iluminação.";

            case 2:
                return "A filtração pode reter partículas sólidas, mas não garante que a água esteja livre de microrganismos ou própria para consumo.";

            case 3:
                return "Manter a quantidade de açúcar e água igual e variar a temperatura permite comparar seu efeito na velocidade de dissolução.";

            case 4:
                return "A densidade é calculada dividindo a massa pelo volume: densidade = massa ÷ volume.";

            case 5:
                return "Aproximar um ímã permite observar quais objetos são atraídos por ele. Nem todos os metais são magnéticos.";

            case 6:
                return "Para investigar o fluxo de ar, mantenha os recipientes e as quantidades de água iguais e varie apenas a circulação do ar.";

            case 7:
                return "Indicadores de pH ajudam a identificar se uma solução é ácida, neutra ou básica. Nunca prove substâncias desconhecidas.";

            case 8:
                return "Grupos de sementes semelhantes, mantidos nas mesmas condições e com disponibilidade de água diferente, permitem investigar o papel da água na germinação.";
        }
    }

    function mostrarExperimento() {
        problemaHTML.textContent = obterProblema(numeroExperimento);
        mostrarOpcoes(numeroExperimento);

        progressoHTML.textContent =
            `Experimento ${numeroExperimento} de 8`;

        pontosHTML.textContent = pontos;

        barraProgresso.style.width =
            `${((numeroExperimento - 1) / 8) * 100}%`;

        progressoContainer.setAttribute(
            "aria-valuenow",
            ((numeroExperimento - 1) / 8) * 100
        );

        escolhaHTML.value = "";
        escolhaHTML.disabled = false;
        botaoResponder.disabled = false;
        botaoResponder.textContent = "Confirmar decisão";

        mensagemHTML.textContent = "";
        mensagemHTML.className =
            "mt-4 min-h-6 text-sm font-semibold";

        aguardandoProxima = false;
    }

    function verificarDecisao() {
        const escolha = escolhaHTML.value;
        const respostaCorreta =
            obterRespostaCorreta(numeroExperimento);

        if (escolha === respostaCorreta) {
            pontos++;

            mensagemHTML.textContent =
                "Decisão correta! " + obterExplicacao(numeroExperimento);

            mensagemHTML.className =
                "mt-4 min-h-6 text-sm font-semibold text-green-700";
        } else {
            mensagemHTML.textContent =
                "Essa não é a melhor escolha. " +
                obterExplicacao(numeroExperimento);

            mensagemHTML.className =
                "mt-4 min-h-6 text-sm font-semibold text-red-600";
        }

        pontosHTML.textContent = pontos;

        escolhaHTML.disabled = true;
        aguardandoProxima = true;

        if (numeroExperimento < 8) {
            botaoResponder.textContent = "Próximo experimento";
        } else {
            botaoResponder.textContent = "Ver classificação";
        }
    }

    function finalizarQuiz() {
        quizFinalizado = true;

        let classificacao;
        let mensagemClassificacao;

        if (pontos >= 7) {
            classificacao = "Cientista de Elite";
            mensagemClassificacao =
                "Excelente! Você domina a lógica dos experimentos científicos.";
        } else if (pontos >= 5) {
            classificacao = "Pesquisador em Formação";
            mensagemClassificacao =
                "Muito bem! Você sabe tomar boas decisões científicas.";
        } else if (pontos >= 3) {
            classificacao = "Aprendiz de Laboratório";
            mensagemClassificacao =
                "Você está aprendendo! Continue investigando e testando suas ideias.";
        } else {
            classificacao = "Cientista Iniciante";
            mensagemClassificacao =
                "Não desanime! Cada tentativa é uma oportunidade de aprender.";
        }

        progressoHTML.textContent = "Laboratório concluído!";
        barraProgresso.style.width = "100%";
        progressoContainer.setAttribute("aria-valuenow", "100");

        problemaHTML.textContent =
            `Você acertou ${pontos} de 8 experimentos!`;

        mensagemHTML.textContent =
            `Classificação: ${classificacao}. ${mensagemClassificacao}`;

        mensagemHTML.className =
            "mt-4 min-h-6 text-base font-bold text-purple-800";

        escolhaHTML.classList.add("hidden");
        escolhaHTML.disabled = true;
        labelEscolha.classList.add("hidden");

        botaoResponder.textContent = "Jogar novamente";
    }

    function reiniciarQuiz() {
        numeroExperimento = 1;
        pontos = 0;
        aguardandoProxima = false;
        quizFinalizado = false;

        escolhaHTML.classList.remove("hidden");
        labelEscolha.classList.remove("hidden");

        mostrarExperimento();
    }

    formQuiz.addEventListener("submit", function (event) {
        event.preventDefault();

        if (quizFinalizado) {
            reiniciarQuiz();
            return;
        }

        if (aguardandoProxima) {
            if (numeroExperimento < 8) {
                numeroExperimento++;
                mostrarExperimento();
            } else {
                finalizarQuiz();
            }

            return;
        }

        if (escolhaHTML.value !== "") {
            verificarDecisao();
        }
    });

    mostrarExperimento();

});