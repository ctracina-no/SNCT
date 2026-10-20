const formCadastro = document.getElementById("formCadastro");
        const botaoEnviar = document.getElementById("botaoEnviar");
        const mensagemSucesso = document.getElementById("mensagemSucesso");
        const avisoEnvio = document.getElementById("avisoEnvio");
        const envioForms = document.getElementById("envioForms");

        let enviando = false;

        formCadastro.addEventListener("submit", function (evento) {
            if (enviando) {
                evento.preventDefault();
                return;
            }

            // A validação dos campos obrigatórios é feita pelo navegador.
            enviando = true;

            botaoEnviar.disabled = true;
            botaoEnviar.textContent = "Enviando...";
            botaoEnviar.classList.add("opacity-60", "cursor-not-allowed");

            avisoEnvio.classList.add("hidden");

            // O formulário é enviado ao Google Forms pelo iframe.
            // Aguardar um intervalo reduz a chance de redirecionar cedo demais.
            setTimeout(function () {
                formCadastro.classList.add("hidden");
                mensagemSucesso.classList.remove("hidden");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000);

            }, 2500);
        });