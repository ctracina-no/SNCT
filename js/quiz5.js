
let etapa = 1;

let orcamento = 100;
let tempo = 10;
let qualidade = 0;

let aventuraIniciada = false;

const areaIntroducao = document.getElementById("areaIntroducao");
const areaAventura = document.getElementById("areaAventura");
const areaResultado = document.getElementById("areaResultado");

const valorOrcamento = document.getElementById("valorOrcamento");
const valorTempo = document.getElementById("valorTempo");
const valorQualidade = document.getElementById("valorQualidade");

const etapaAtual = document.getElementById("etapaAtual");
const barraProgresso = document.getElementById("barraProgresso");

const tituloEtapa = document.getElementById("tituloEtapa");
const textoHistoria = document.getElementById("textoHistoria");
const feedback = document.getElementById("feedback");
const opcoes = document.getElementById("opcoes");

const tituloFinal = document.getElementById("tituloFinal");
const textoFinal = document.getElementById("textoFinal");

const resultadoOrcamento = document.getElementById("resultadoOrcamento");
const resultadoTempo = document.getElementById("resultadoTempo");
const resultadoQualidade = document.getElementById("resultadoQualidade");

const botaoIniciar = document.getElementById("botaoIniciar");
const botaoReiniciar = document.getElementById("botaoReiniciar");


// ATUALIZA OS RECURSOS NA TELA

function atualizarRecursos() {

    valorOrcamento.textContent = orcamento;
    valorTempo.textContent = tempo;
    valorQualidade.textContent = qualidade;

    etapaAtual.textContent = "Etapa " + etapa + " de 5";

    barraProgresso.style.width =
        ((etapa - 1) / 5 * 100) + "%";
}


// MOSTRA AS OPÇÕES DE CADA ETAPA

function mostrarOpcoes(texto1, texto2, texto3) {

    opcoes.innerHTML = `
        <button type="button" data-escolha="1"
            class="w-full text-left bg-white border-2 border-purple-300 hover:bg-purple-100 rounded-xl p-4 font-semibold transition">
            ${texto1}
        </button>

        <button type="button" data-escolha="2"
            class="w-full text-left bg-white border-2 border-purple-300 hover:bg-purple-100 rounded-xl p-4 font-semibold transition">
            ${texto2}
        </button>

        <button type="button" data-escolha="3"
            class="w-full text-left bg-white border-2 border-purple-300 hover:bg-purple-100 rounded-xl p-4 font-semibold transition">
            ${texto3}
        </button>
    `;
}


// ETAPA 1: PLANEJAMENTO

function etapaUm() {

    tituloEtapa.textContent = "Etapa 1 — Planejamento";

    textoHistoria.textContent =
        "Você recebeu recursos para investigar uma solução para a poluição da água. " +
        "Antes de começar, precisa decidir como planejar sua pesquisa.";

    mostrarOpcoes(
        "Investir 30 unidades em um planejamento detalhado. (+25 qualidade, -2 tempo)",
        "Pesquisar referências por conta própria. (+10 qualidade, -1 tempo)",
        "Pedir ajuda a uma pesquisadora experiente. (+5 qualidade, +10 orçamento, -2 tempo)"
    );
}


// ETAPA 2: EXPERIMENTO

function etapaDois() {

    tituloEtapa.textContent = "Etapa 2 — O experimento";

    textoHistoria.textContent =
        "Seu planejamento está pronto. Agora você precisa testar uma hipótese " +
        "sobre como determinados materiais podem ajudar a filtrar a água.";

    mostrarOpcoes(
        "Comprar materiais adequados para um teste cuidadoso. (-25 orçamento, +25 qualidade, -2 tempo)",
        "Fazer um teste simples com os materiais disponíveis. (-10 orçamento, +5 qualidade, -1 tempo)",
        "Pular os testes e seguir diretamente para as conclusões. (-10 qualidade)"
    );
}


// ETAPA 3: IMPREVISTO

function etapaTres() {

    tituloEtapa.textContent = "Etapa 3 — Um equipamento quebrado";

    textoHistoria.textContent =
        "Durante os testes, um equipamento importante quebra. " +
        "Você precisa decidir como continuar sem comprometer toda a pesquisa.";

    mostrarOpcoes(
        "Consertar o equipamento corretamente. (-20 orçamento, +10 qualidade, -2 tempo)",
        "Adaptar o experimento com materiais mais baratos. (-5 orçamento, +5 qualidade, -1 tempo)",
        "Abandonar esse experimento e registrar a limitação. (-15 qualidade, -1 tempo)"
    );
}


// ETAPA 4: RESULTADOS INESPERADOS

function etapaQuatro() {

    tituloEtapa.textContent = "Etapa 4 — Resultados inesperados";

    textoHistoria.textContent =
        "Os resultados não são exatamente os que você esperava. " +
        "Sua equipe precisa decidir como lidar com os dados obtidos.";

    mostrarOpcoes(
        "Repetir parte dos testes para verificar os resultados. (-15 orçamento, +20 qualidade, -2 tempo)",
        "Analisar os dados disponíveis com cuidado. (-5 orçamento, +10 qualidade, -1 tempo)",
        "Ignorar os resultados que contradizem sua hipótese. (-20 qualidade)"
    );
}


// ETAPA 5: APRESENTAÇÃO

function etapaCinco() {

    tituloEtapa.textContent = "Etapa 5 — Apresentação do projeto";

    textoHistoria.textContent =
        "Chegou a hora de apresentar sua pesquisa. " +
        "A forma como você comunica os resultados pode influenciar o impacto do projeto.";

    mostrarOpcoes(
        "Apresentar os dados, os métodos e as limitações da pesquisa. (+15 qualidade, -1 tempo)",
        "Preparar uma apresentação rápida, sem revisar todos os detalhes. (-10 qualidade)",
        "Investir em uma revisão colaborativa com outras pesquisadoras. (-10 orçamento, +20 qualidade, -2 tempo)"
    );
}


// CONTROLA O ANDAMENTO DA AVENTURA

function continuarAventura() {

    // O while mantém a aventura enquanto houver recursos
    // e ainda existirem etapas para completar.

    while (etapa <= 5) {

        if (orcamento <= 0 || tempo <= 0) {

            finalizarAventura(true);
            return;
        }

        atualizarRecursos();

        feedback.textContent = "";
        feedback.className = "font-semibold text-center mb-5";

        if (etapa === 1) {

            etapaUm();

        } else if (etapa === 2) {

            etapaDois();

        } else if (etapa === 3) {

            etapaTres();

        } else if (etapa === 4) {

            etapaQuatro();

        } else if (etapa === 5) {

            etapaCinco();
        }

        // Espera a escolha da jogadora antes de avançar.
        break;
    }

    if (etapa > 5) {

        finalizarAventura(false);
    }
}


// PROCESSA AS ESCOLHAS DO JOGADOR

function escolherOpcao(escolha) {

    let resultado = "";

    if (etapa === 1) {

        if (escolha === 1) {

            orcamento -= 30;
            qualidade += 25;
            tempo -= 2;

            resultado = "O planejamento detalhado ajudou a organizar a pesquisa.";

        } else if (escolha === 2) {

            qualidade += 10;
            tempo -= 1;

            resultado = "As referências ajudaram, mas ainda há pontos a investigar.";

        } else {

            qualidade += 5;
            orcamento += 10;
            tempo -= 2;

            resultado = "A colaboração trouxe novas ideias e recursos.";
        }

    } else if (etapa === 2) {

        if (escolha === 1) {

            orcamento -= 25;
            qualidade += 25;
            tempo -= 2;

            resultado = "Os materiais adequados permitiram um teste mais confiável.";

        } else if (escolha === 2) {

            orcamento -= 10;
            qualidade += 5;
            tempo -= 1;

            resultado = "O teste simples trouxe algumas informações úteis.";

        } else {

            qualidade -= 10;

            resultado = "Sem testes, suas conclusões ficaram menos confiáveis.";
        }

    } else if (etapa === 3) {

        if (escolha === 1) {

            orcamento -= 20;
            qualidade += 10;
            tempo -= 2;

            resultado = "O equipamento foi consertado e a pesquisa continuou.";

        } else if (escolha === 2) {

            orcamento -= 5;
            qualidade += 5;
            tempo -= 1;

            resultado = "A adaptação funcionou, embora com algumas limitações.";

        } else {

            qualidade -= 15;
            tempo -= 1;

            resultado = "Você registrou a limitação, mas perdeu parte dos dados.";
        }

    } else if (etapa === 4) {

        if (escolha === 1) {

            orcamento -= 15;
            qualidade += 20;
            tempo -= 2;

            resultado = "Repetir os testes ajudou a verificar os resultados.";

        } else if (escolha === 2) {

            orcamento -= 5;
            qualidade += 10;
            tempo -= 1;

            resultado = "A análise cuidadosa revelou informações importantes.";

        } else {

            qualidade -= 20;

            resultado = "Ignorar dados contrários enfraqueceu suas conclusões.";
        }

    } else if (etapa === 5) {

        if (escolha === 1) {

            qualidade += 15;
            tempo -= 1;

            resultado = "Sua apresentação foi transparente e bem fundamentada.";

        } else if (escolha === 2) {

            qualidade -= 10;

            resultado = "A apresentação foi rápida, mas deixou questões importantes.";

        } else {

            orcamento -= 10;
            qualidade += 20;
            tempo -= 2;

            resultado = "A revisão colaborativa fortaleceu o projeto.";
        }
    }

    // Impede que a qualidade fique negativa.

    if (qualidade < 0) {
        qualidade = 0;
    }

    feedback.textContent = resultado;
    feedback.className =
        "font-semibold text-center mb-5 text-purple-800";

    // Bloqueia novas escolhas até a próxima etapa.

    opcoes.innerHTML = `
        <button id="botaoContinuar" type="button"
            class="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-5 rounded-xl transition">
            Continuar →
        </button>
    `;

    document.getElementById("botaoContinuar")
        .addEventListener("click", function () {

            etapa++;

            continuarAventura();
        });

    atualizarRecursos();
}


// FINALIZA A AVENTURA

function finalizarAventura(faltaramRecursos) {

    areaAventura.classList.add("hidden");
    areaResultado.classList.remove("hidden");

    resultadoOrcamento.textContent = orcamento;
    resultadoTempo.textContent = tempo;
    resultadoQualidade.textContent = qualidade;

    barraProgresso.style.width = "100%";

    if (faltaramRecursos) {

        tituloFinal.textContent = "Pesquisa interrompida";

        textoFinal.textContent =
            "Seus recursos acabaram antes de concluir todas as etapas. " +
            "Na próxima tentativa, planeje melhor seus gastos e o tempo disponível. " +
            "Na ciência, administrar recursos também é parte do trabalho.";

    } else if (qualidade >= 70 && orcamento > 0) {

        tituloFinal.textContent = "Grande descoberta!";

        textoFinal.textContent =
            "Você concluiu o projeto com resultados de alta qualidade e ainda " +
            "manteve recursos disponíveis. Sua pesquisa pode contribuir para " +
            "novos estudos e soluções ambientais.";

    } else if (qualidade >= 40) {

        tituloFinal.textContent = "Projeto concluído com ressalvas";

        textoFinal.textContent =
            "Você chegou ao final da pesquisa, mas alguns resultados poderiam " +
            "ser melhores. Revisar métodos, planejar gastos e colaborar com " +
            "outras pessoas pode fortalecer seus próximos projetos.";

    } else {

        tituloFinal.textContent = "Uma experiência de aprendizado";

        textoFinal.textContent =
            "O projeto terminou, mas os resultados não foram suficientes. " +
            "Nem toda pesquisa alcança o resultado esperado. Aprender com " +
            "os erros e rever as decisões faz parte da carreira científica.";
    }
}


// INICIA OU REINICIA A AVENTURA

function iniciarAventura() {

    etapa = 1;

    orcamento = 100;
    tempo = 10;
    qualidade = 0;

    aventuraIniciada = true;

    areaIntroducao.classList.add("hidden");
    areaResultado.classList.add("hidden");
    areaAventura.classList.remove("hidden");

    continuarAventura();
}

botaoIniciar.addEventListener("click", iniciarAventura);

botaoReiniciar.addEventListener("click", iniciarAventura);


// RECEBE AS ESCOLHAS DOS BOTÕES

opcoes.addEventListener("click", function (evento) {

    const botao = evento.target.closest("button[data-escolha]");

    if (botao === null || !aventuraIniciada) {
        return;
    }

    const escolha = Number(botao.dataset.escolha);

    escolherOpcao(escolha);
});
