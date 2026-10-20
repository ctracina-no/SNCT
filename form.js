const aceiteLGPD = document.getElementById("aceiteLGPD");
    const botaoAceitar = document.getElementById("botaoAceitar");
    const botaoRecusar = document.getElementById("botaoRecusar");

    const etapaConsentimento =
        document.getElementById("etapaConsentimento");

    const mensagemRecusa =
        document.getElementById("mensagemRecusa");

    const formCadastro =
        document.getElementById("formCadastro");

    const avisoEnvio =
        document.getElementById("avisoEnvio");

    // Só mostra o cadastro se o visitante marcar o aceite.
    botaoAceitar.addEventListener("click", function () {
        if (!aceiteLGPD.checked) {
            alert("Leia a declaração e marque a opção de aceite.");
            return;
        }

        etapaConsentimento.classList.add("hidden");
        formCadastro.classList.remove("hidden");

        document.getElementById("nomeVisitante").focus();
    });

    // Se recusar, encerra o fluxo sem exibir as perguntas.
    botaoRecusar.addEventListener("click", function () {
        etapaConsentimento.classList.add("hidden");
        formCadastro.classList.add("hidden");
        mensagemRecusa.classList.remove("hidden");
    });

    // Por enquanto, impede um envio que ainda não foi configurado.
    formCadastro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        avisoEnvio.textContent =
            "O formulário visual está pronto, mas ainda falta " +
            "configurar o envio dos dados ao Google Forms.";

        avisoEnvio.classList.remove("hidden");
    });