
/* navegação seções */

function ir(id) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("on");
    });

    speechSynthesis.cancel();

    if (id !== "menu") {
        document.getElementById(id).classList.add("on");
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    }

    if (id === "s4") {
        iniciar();
    }
}

/* eventos botões */

document.addEventListener("click", event => {
    const botao = event.target.closest("[data-section]");

    if (botao) {
        ir(botao.dataset.section);
    }
});

/* banco de perguntas */

const banco = [
    ["O que é animação?", ["Uma foto parada", "A ilusão de movimento por sequência de imagens", "Somente desenho à mão", "Um tipo de áudio"], 1],

    ["Qual fenômeno faz o cérebro unir imagens rápidas em movimento?", ["Persistência da visão", "Eco", "Refração", "Pixelização"], 0],

    ["Quantos quadros por segundo são comuns em animação para o cinema?", ["1", "24", "500", "1000"], 1],

    ["Stop Motion é feito:", ["Só no computador 3D", "Fotografando objetos reais quadro a quadro", "Gravando áudio", "Só com desenhos vetoriais"], 1],

    ["Qual tipo de animação usa modelos digitais com volume?", ["2D", "3D", "Stop Motion", "Rotoscopia manual"], 1],

    ["No Stop Motion, o que fazemos entre uma foto e outra?", ["Apagamos a foto", "Movemos o objeto um pouquinho", "Trocamos de câmera", "Desligamos a luz"], 1],

    ["Qual equipamento ajuda a manter a câmera estável?", ["Tripé", "Microfone", "Caixa de som", "Mouse"], 0],

    ["Imagem vetorial é formada por:", ["Pixels", "Formas matemáticas", "Só fotos", "Ondas sonoras"], 1],

    ["Imagem matricial (como uma foto) é formada por:", ["Pixels", "Equações", "Linhas infinitas", "Vídeos"], 0],

    ["O que significa FPS?", ["Fotos por semana", "Frames (quadros) por segundo", "Formatos para site", "Fios para som"], 1],

    ["Em multimídia, a animação serve para:", ["Apenas enfeitar", "Explicar, entreter e tornar a interface mais viva", "Substituir o texto sempre", "Diminuir o arquivo"], 1],

    ["Qual destes é um exemplo de material de Stop Motion?", ["Massinha de modelar", "Planilha", "Fonte tipográfica", "E-mail"], 0],

    ["Com mais quadros por segundo, o movimento tende a ficar:", ["Mais suave", "Mais lento sempre", "Sem imagem", "Sem cor"], 0],

    ["O storyboard é usado para:", ["Editar áudio", "Planejar a história em quadros", "Comprimir vídeo", "Instalar software"], 1],

    ["Qual recurso multimídia NÃO é exibido em um software educacional animado?", ["Áudio", "Vídeo", "Texto", "Nenhum desses é proibido"], 3]
];

let lista;
let i;
let pontos;

/* começar quiz */

function iniciar() {
    lista = [...banco]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    i = 0;
    pontos = 0;

    mostrar();
}

/* mostrar perguntas */

function mostrar() {
    const q = document.getElementById("quiz");

    document.getElementById("pb").style.width = (i / 5 * 100) + "%";

    if (i >= 5) {
        const emoji = pontos >= 4 ? "🏆" : pontos >= 3 ? "😄" : "📚";

        q.innerHTML = `
            <div class="nota">${emoji} ${pontos}/5</div>

            <p class="resultado">
                ${pontos >= 4
                    ? "Você é um mestre da animação!"
                    : pontos >= 3
                        ? "Muito bem! Quase lá."
                        : "Revise o conteúdo e tente de novo!"
                }
            </p>

            <p class="resultado">
                <button class="btn small" data-action="reiniciar">
                    🔄 Novo sorteio
                </button>
            </p>
        `;

        return;
    }

    const [p, ops, c] = lista[i];

    q.innerHTML = `
        <p><b>Pergunta ${i + 1} de 5:</b> ${p}</p>

        ${ops.map((o, k) => `
            <button class="opt" data-answer="${k}">
                ${String.fromCharCode(65 + k)}) ${o}
            </button>
        `).join("")}

        <p id="fb"></p>
    `;
}

/* verificando resposta */

function resp(k, el) {
    const c = lista[i][2];
    const bs = document.querySelectorAll(".opt");

    bs.forEach(b => b.disabled = true);

    bs[c].classList.add("ok");

    if (k === c) {
        pontos++;
        document.getElementById("fb").innerHTML = "✅ <b>Acertou!</b>";
    } else {
        el.classList.add("no");

        document.getElementById("fb").innerHTML =
            "❌ <b>Ops!</b> A resposta certa está em verde.";
    }

    document.getElementById("fb").innerHTML += `
        <button class="btn small" data-action="proxima">
            Próxima ➡
        </button>
    `;
}

/* eventos quiz */

document.addEventListener("click", event => {
    const resposta = event.target.closest("[data-answer]");

    if (resposta) {
        resp(Number(resposta.dataset.answer), resposta);
        return;
    }

    const acao = event.target.closest("[data-action]");

    if (!acao) return;

    if (acao.dataset.action === "proxima") {
        i++;
        mostrar();
    }

    if (acao.dataset.action === "reiniciar") {
        iniciar();
    }
});
