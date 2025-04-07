const palavras = ["CACHORRO", "GATO", "ELEFANTE", "CAVALO", "TIGRE", "LEAO", "PASSARO",
    "BANANA", "UVA", "LARANJA", "ABACAXI", "MELANCIA", "MORANGO",
    "BRASIL", "PORTUGAL", "ARGENTINA", "FRANÇA", "ALEMANHA", "ITALIA", "CANADA",
    "CADEIRA", "MESA", "LIVRO", "CELULAR", "COMPUTADOR", "CANETA", "RELOGIO",
    "VERMELHO", "AZUL", "VERDE", "AMARELO", "ROXO", "LARANJA", "PRETO",
    "MEDICO", "ENGENHEIRO", "PROFESSOR", "POLICIAL", "BOMBEIRO", "JORNALISTA"
];

const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 6;
const letrasCorretas = Array(palavraSecreta.length).fill("_");

/*************  ✨ Windsurf Command 🌟  *************/
/**
 * Exibe a palavra oculta
 * @function mostrarPalavra
 * @description Exibe a palavra oculta no container de id "palavra-container"
 */
// Exibe a palavra oculta
const mostrarPalavra = () =>{
    // O container onde a palavra secreta ser  exibida
    const container = document.getElementById("palavra-container");
    // Limpa o container
    container.innerHTML = "";
    // Percorre cada letra da palavra secreta e exibe no container
    letrasCorretas.forEach(letra => {
        // Cria um span para cada letra
        const span = document.createElement("span");
        // Adiciona a classe "mostrar" para que a letra seja exibida
        span.classList.add("mostrar");
        // Adiciona a letra como texto do span
        span.textContent = letra;
        // Adiciona o span ao container
        container.appendChild(span);
    });
}
/*******  199a312e-f5aa-45e9-8979-b0e5ba477763  *******/

// Cria o teclado virtual
const criarTeclado = () => {
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
const verificarLetra = (letra, botao) => {
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
const verificarFimDeJogo = () => {
    if (!letrasCorretas.includes("_")) {
        setTimeout(() => alert("Parabéns! Você venceu!"), 200);
    } else if (tentativas <= 0) {
        setTimeout(() => alert(`Fim de jogo! A palavra era ${palavraSecreta}`), 200);
    }
}

// Reinicia o jogo
const reiniciarJogo = () => {
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
