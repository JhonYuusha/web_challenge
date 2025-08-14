const perguntas = [
    { pergunta: "Qual a capital do Brasil?", resposta: "Brasília" },
    { pergunta: "2 + 2 = ?", resposta: "4" },
    { pergunta: "Qual a cor do céu em um dia limpo?", resposta: "Azul" }
];

let index = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById('pergunta');
const respostaEl = document.getElementById('resposta');
const btnProximo = document.getElementById('btnProximo');
const resultadoEl = document.getElementById('resultado');
const pontuacaoEl = document.getElementById('pontuacao');

function mostrarPergunta() {
    if (index < perguntas.length) {
        perguntaEl.textContent = perguntas[index].pergunta;
        respostaEl.value = "";
    } else {
        document.getElementById('quiz').style.display = 'none';
        resultadoEl.style.display = 'block';
        pontuacaoEl.textContent = pontuacao + " / " + perguntas.length;
    }
}

btnProximo.addEventListener('click', () => {
    if (respostaEl.value.toLowerCase() === perguntas[index].resposta.toLowerCase()) {
        pontuacao++;
    }
    index++;
    mostrarPergunta();
});

// iniciar quiz
mostrarPergunta();