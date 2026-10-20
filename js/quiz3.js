
document.addEventListener("DOMContentLoaded", function () {

    const linhaDeChegada = 100;

    let posicaoJogador = 0;
    let posicaoAlex = 0;

    let energiaJogador = 100;
    let energiaAlex = 100;

    let rodada = 0;
    let corridaFinalizada = false;

    const acao = document.getElementById("acao");
    const btnAvancar = document.getElementById("btnAvancar");
    const btnReiniciar = document.getElementById("btnReiniciar");

    const elementoRodada = document.getElementById("rodada");
    const elementoEnergiaJogador = document.getElementById("energiaJogador");
    const elementoEnergiaAlex = document.getElementById("energiaAlex");

    const elementoPosicaoJogador = document.getElementById("posicaoJogador");
    const elementoPosicaoAlex = document.getElementById("posicaoAlex");

    const barraJogador = document.getElementById("barraJogador");
    const barraAlex = document.getElementById("barraAlex");

    const areaJogo = document.getElementById("areaJogo");
    const mensagem = document.getElementById("mensagem");

    const resultado = document.getElementById("resultado");
    const tituloResultado = document.getElementById("tituloResultado");
    const textoResultado = document.getElementById("textoResultado");
    const classificacao = document.getElementById("classificacao");


    // Avança um competidor casa por casa.
    function avancarCompetidor(posicaoAtual, quantidade) {

        let casasAvancadas = 0;

        while (casasAvancadas < quantidade) {
            posicaoAtual++;
            casasAvancadas++;
        }

        if (posicaoAtual > linhaDeChegada) {
            posicaoAtual = linhaDeChegada;
        }

        return posicaoAtual;
    }


    // Atualiza as informações visuais da corrida.
    function atualizarPista() {

        elementoRodada.textContent = rodada;

        elementoEnergiaJogador.textContent = energiaJogador;
        elementoEnergiaAlex.textContent = energiaAlex;

        elementoPosicaoJogador.textContent =
            posicaoJogador + " / " + linhaDeChegada;

        elementoPosicaoAlex.textContent =
            posicaoAlex + " / " + linhaDeChegada;

        barraJogador.style.width =
            (posicaoJogador / linhaDeChegada * 100) + "%";

        barraAlex.style.width =
            (posicaoAlex / linhaDeChegada * 100) + "%";
    }


    // Executa a ação escolhida pelo jogador.
    function executarAcaoJogador() {

        let casas = 0;

        switch (acao.value) {

            case "segura":

                casas = 4;

                posicaoJogador = avancarCompetidor(
                    posicaoJogador,
                    casas
                );

                mensagem.textContent =
                    "Você avançou 4 casas e conservou sua energia.";

                break;


            case "acelerar":

                if (energiaJogador >= 30) {

                    energiaJogador -= 30;
                    casas = 9;

                    posicaoJogador = avancarCompetidor(
                        posicaoJogador,
                        casas
                    );

                    mensagem.textContent =
                        "Você acelerou, avançou 9 casas e gastou 30 de energia.";

                } else {

                    mensagem.textContent =
                        "Energia insuficiente! Você precisa de pelo menos 30 pontos para acelerar.";

                    return false;
                }

                break;


            case "recuperar":

                energiaJogador += 25;

                if (energiaJogador > 100) {
                    energiaJogador = 100;
                }

                mensagem.textContent =
                    "Você recuperou 25 pontos de energia, sem avançar.";

                break;


            default:

                mensagem.textContent =
                    "Selecione uma ação válida.";

                return false;
        }

        return true;
    }


    // A cientista toma uma decisão de acordo com sua situação.

    function executarAcaoAlex() {

        let casas = 0;
        let sorteio = Math.floor(Math.random() * 100) + 1;

        if (energiaAlex < 30) {

            energiaAlex += 40;

            if (energiaAlex > 100) {
                energiaAlex = 100;
            }

            mensagem.textContent +=
                " Alex recuperou energia.";

        } else if (
            posicaoAlex < posicaoJogador &&
            energiaAlex >= 30 &&
            sorteio <= 85
        ) {

            energiaAlex -= 30;
            casas = 9;

            posicaoAlex = avancarCompetidor(
                posicaoAlex,
                casas
            );

            mensagem.textContent +=
                " Alex acelerou e avançou 9 casas!";

        } else if (sorteio <= 45) {

            energiaAlex += 40;

            if (energiaAlex > 100) {
                energiaAlex = 100;
            }

            mensagem.textContent +=
                " Alex recuperou energia para se preparar.";

        } else {

            casas = 6;

            posicaoAlex = avancarCompetidor(
                posicaoAlex,
                casas
            );

            mensagem.textContent +=
                " Alex avançou 6 casas!";
        }
    }



    // Verifica quem chegou primeiro e classifica o resultado.
    function finalizarCorrida() {

        corridaFinalizada = true;

        areaJogo.classList.add("hidden");
        resultado.classList.remove("hidden");

        if (
            posicaoJogador >= linhaDeChegada &&
            posicaoAlex < linhaDeChegada
        ) {

            tituloResultado.textContent = "Vitória!";

            textoResultado.textContent =
                "Você cruzou a linha de chegada antes de Alex, após " +
                rodada + " rodadas.";

            classificacao.textContent =
                "Classificação: Estrategista Científico!";

        } else if (
            posicaoAlex >= linhaDeChegada &&
            posicaoJogador < linhaDeChegada
        ) {

            tituloResultado.textContent = "Alex venceu!";

            textoResultado.textContent =
                "Alex chegou primeiro após " + rodada +
                " rodadas. Analise suas estratégias e tente novamente.";

            classificacao.textContent =
                "Classificação: Desafiante Científico!";

        } else if (
            posicaoJogador >= linhaDeChegada &&
            posicaoAlex >= linhaDeChegada
        ) {

            tituloResultado.textContent = "Chegada disputada!";

            textoResultado.textContent =
                "Os dois competidores cruzaram a linha de chegada na mesma rodada.";

            classificacao.textContent =
                "Classificação: Rivalidade Científica!";

        } else {

            tituloResultado.textContent = "Corrida encerrada";

            textoResultado.textContent =
                "A corrida foi encerrada.";

            classificacao.textContent =
                "Continue praticando!";
        }

        textoResultado.textContent +=
            " Sua energia final foi " + energiaJogador +
            " e a de Alex foi " + energiaAlex + ".";
    }


    // Controla cada rodada.
    function jogarRodada() {

        if (corridaFinalizada) {
            return;
        }

        // A ação do jogador é executada primeiro.
        const acaoValida = executarAcaoJogador();

        if (!acaoValida) {
            return;
        }

        // Alex só age se o jogador ainda não chegou.
        if (posicaoJogador < linhaDeChegada) {
            executarAcaoAlex();
        }

        rodada++;

        atualizarPista();

        // Verifica o fim da corrida.
        if (
            posicaoJogador >= linhaDeChegada ||
            posicaoAlex >= linhaDeChegada
        ) {

            finalizarCorrida();

        } else {

            mensagem.textContent +=
                " Escolha sua próxima estratégia.";
        }
    }


    // Reinicia os atributos e a corrida.
    function reiniciarCorrida() {

        posicaoJogador = 0;
        posicaoAlex = 0;

        energiaJogador = 100;
        energiaAlex = 100;

        rodada = 0;
        corridaFinalizada = false;

        acao.value = "segura";

        areaJogo.classList.remove("hidden");
        resultado.classList.add("hidden");

        mensagem.textContent =
            "Nova corrida iniciada! Escolha sua estratégia.";

        atualizarPista();
    }


    btnAvancar.addEventListener("click", jogarRodada);
    btnReiniciar.addEventListener("click", reiniciarCorrida);

    atualizarPista();

});