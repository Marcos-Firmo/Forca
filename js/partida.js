const palavras = ["CACHORRO", "GATO", "ELEFANTE", "CAVALO", "TIGRE", "LEÃO", "PÁSSARO",
    "BANANA", "MAÇÃ", "UVA", "LARANJA", "ABACAXI", "MELANCIA", "MORANGO",
    "BRASIL", "PORTUGAL", "ARGENTINA", "FRANÇA", "ALEMANHA", "ITÁLIA", "CANADÁ",
    "CADEIRA", "MESA", "LIVRO", "CELULAR", "COMPUTADOR", "CANETA", "RELÓGIO",
    "VERMELHO", "AZUL", "VERDE", "AMARELO", "ROXO", "LARANJA", "PRETO",
    "MÉDICO", "ENGENHEIRO", "PROFESSOR", "POLICIAL", "BOMBEIRO", "JORNALISTA"
];

const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 6;
const letrasCorretas = Array(palavraSecreta.length).fill("_");

const mostrarPalavra = () =>{

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
