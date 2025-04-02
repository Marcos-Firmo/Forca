const palavras = ["CACHORRO", "GATO", "ELEFANTE", "CAVALO", "TIGRE", "LEÃO", "PÁSSARO",
    "BANANA", "MAÇÃ", "UVA", "LARANJA", "ABACAXI", "MELANCIA", "MORANGO",
    "BRASIL", "PORTUGAL", "ARGENTINA", "FRANÇA", "ALEMANHA", "ITÁLIA", "CANADÁ",
    "CADEIRA", "MESA", "LIVRO", "CELULAR", "COMPUTADOR", "CANETA", "RELÓGIO",
    "VERMELHO", "AZUL", "VERDE", "AMARELO", "ROXO", "LARANJA", "PRETO",
    "MÉDICO", "ENGENHEIRO", "PROFESSOR", "POLICIAL", "BOMBEIRO", "JORNALISTA"
];

let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 6;
let letrasCorretas = Array(palavraSecreta.length).fill("_");

// Exibe a palavra oculta
function mostrarPalavra() {
    const container = document.getElementById("palavra-container");
    container.innerHTML = "";
    letrasCorretas.forEach(letra => {
        const span = document.createElement("span");
        span.classList.add("mostrar");
        span.textContent = letra;
        container.appendChild(span);
    });
}

// Cria o teclado virtual
function criarTeclado() {
    const tecladoLayout = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const teclado = document.getElementById("teclado");
    teclado.innerHTML = "";

    tecladoLayout.forEach(letra => {
        const key = document.createElement("button");
        key.textContent = letra;
        key.classList.add("key");
        key.addEventListener("click", () => verificarLetra(letra, key));
        teclado.appendChild(key);
    });
}

// Verifica se a letra está na palavra
function verificarLetra(letra, botao) {
    botao.disabled = true; // Desativa a tecla após o uso

    if (palavraSecreta.includes(letra)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                letrasCorretas[i] = letra;
            }
        }
    } else {
        tentativas--;
        document.getElementById("erros").textContent = 6 - tentativas;
    }

    mostrarPalavra();
    verificarFimDeJogo();
}

// Verifica se o jogo terminou
function verificarFimDeJogo() {
    if (!letrasCorretas.includes("_")) {
        setTimeout(() => alert("Parabéns! Você venceu!"), 200);
    } else if (tentativas <= 0) {
        setTimeout(() => alert(`Fim de jogo! A palavra era ${palavraSecreta}`), 200);
    }
}

// Reinicia o jogo
function reiniciarJogo() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    tentativas = 6;
    letrasCorretas = Array(palavraSecreta.length).fill("_");

    document.getElementById("erros").textContent = "0";
    criarTeclado();
    mostrarPalavra();
}

// Inicializa o jogo
mostrarPalavra();
criarTeclado();
