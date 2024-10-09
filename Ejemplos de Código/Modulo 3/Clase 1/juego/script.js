// Array de desafíos de programación con pseudo-código// Array de desafíos de programación con pseudo-código
const challenges = [
    {
        description: `Algoritmo SumaDosNumeros
    a ← 3
    b ← 5
    suma ← a + b
    Imprimir suma`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "8"
    },
    {
        description: `Algoritmo EncontrarMayor
    a ← 7
    b ← 10
    Si (a > b) Entonces
        mayor ← a
    SiNo
        mayor ← b
    FinSi
    Imprimir mayor`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "10"
    },
    {
        description: `Algoritmo ContarHastaCinco
    contador ← 1
    Mientras (contador <= 5) Hacer
        Imprimir contador
        contador ← contador + 1
    FinMientras`,
        question: '¿Cuál será el último valor impreso?',
        correctAnswer: "5"
    },
    {
        description: `Algoritmo CalcularFactorial
    n ← 4
    factorial ← 1
    Para i ← 1 Hasta n Hacer
        factorial ← factorial * i
    FinPara
    Imprimir factorial`,
        question: '¿Cuál será el valor impreso?',
        correctAnswer: "24"
    },
    {
        description: `Algoritmo MultiplicarDosNumeros
    a ← 6
    b ← 7
    multiplicacion ← a * b
    Imprimir multiplicacion`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "42"
    },
    {
        description: `Algoritmo VerificarParidad
    n ← 9
    Si (n mod 2 = 0) Entonces
        Imprimir "Es par"
    SiNo
        Imprimir "Es impar"
    FinSi`,
        question: '¿Qué se imprimirá?',
        correctAnswer: "Es impar"
    },
    {
        description: `let x = 12;
if (x % 3 === 0) {
    console.log("Divisible por 3");
} else {
    console.log("No es divisible por 3");}`,
        question: '¿Qué valor será impreso en la consola?',
        correctAnswer: "Divisible por 3"
    },
    {
        description: `let y = 5;
for (let i = 1; i <= 3; i++) {
    y = y + i;
}
console.log(y);`,
        question: '¿Cuál es el valor final de "y"?',
        correctAnswer: "11"
    },
    {
        description: `function suma(a, b) {
    return a + b;
}
let resultado = suma(2, 6);
console.log(resultado);`,
        question: '¿Qué valor será impreso en la consola?',
        correctAnswer: "8"
    },
    {
        description: `let z = 0;
for (let i = 1; i <= 5; i++) {
    z = z + i;
}
console.log(z);`,
        question: '¿Cuál será el valor impreso de "z"?',
        correctAnswer: "15"
    },
    {
        description: `Algoritmo DividirNumeros
    a ← 20
    b ← 4
    division ← a / b
    Imprimir division`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "5"
    },
    {
        description: `Algoritmo SumarHastaN
    n ← 5
    suma ← 0
    Para i ← 1 Hasta n Hacer
        suma ← suma + i
    FinPara
    Imprimir suma`,
        question: '¿Cuál es el valor impreso?',
        correctAnswer: "15"
    },
    {
        description: `Algoritmo RestarDosNumeros
    a ← 15
    b ← 6
    resta ← a - b
    Imprimir resta`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "9"
    },
    {
        description: `function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(3, 4));`,
        question: '¿Qué valor será impreso en la consola?',
        correctAnswer: "12"
    },
    {
        description: `Algoritmo DeterminarSiPar
    n ← 8
    Si (n mod 2 = 0) Entonces
        Imprimir "Es par"
    SiNo
        Imprimir "Es impar"
    FinSi`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "Es par"
    },
    {
        description: `let contador = 1;
while (contador <= 3) {
    console.log(contador);
    contador++;
}`,
        question: '¿Cuál es el último valor impreso?',
        correctAnswer: "3"
    },
    {
        description: `let num = 10;
if (num > 5) {
    console.log("Mayor que 5");
} else {
    console.log("Menor o igual a 5");
}`,
        question: '¿Qué mensaje se imprimirá?',
        correctAnswer: "Mayor que 5"
    },
    {
        description: `let n = 3;
let suma = 0;
for (let i = 1; i <= n; i++) {
    suma = suma + i;
}
console.log(suma);`,
        question: '¿Cuál es el valor final de "suma"?',
        correctAnswer: "6"
    },
    {
        description: `Algoritmo CalcularCuadrado
    a ← 4
    cuadrado ← a * a
    Imprimir cuadrado`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "16"
    },
    {
        description: `Algoritmo CalcularPromedio
    n1 ← 8
    n2 ← 6
    promedio ← (n1 + n2) / 2
    Imprimir promedio`,
        question: '¿Cuál es el valor del promedio?',
        correctAnswer: "7"
    },
    {
        description: `function restar(a, b) {
    return a - b;
}
console.log(restar(10, 3));`,
        question: '¿Qué valor será impreso en la consola?',
        correctAnswer: "7"
    },
    {
        description: `Algoritmo ImprimirMultiplos
    n ← 5
    Para i ← 1 Hasta 5 Hacer
        Imprimir n * i
    FinPara`,
        question: '¿Qué valores se imprimirán?',
        correctAnswer: "5, 10, 15, 20, 25"
    },
    {
        description: `let n = 5;
for (let i = 1; i <= 10; i++) {
    console.log(n * i);
}`,
        question: '¿Cuál es el último valor impreso?',
        correctAnswer: "50"
    },
    {
        description: `Algoritmo CalcularResta
    a ← 15
    b ← 9
    resta ← a - b
    Imprimir resta`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "6"
    },
    {
        description: `let x = 8;
if (x > 10) {
    console.log("Mayor que 10");
} else {
    console.log("Menor o igual a 10");
}`,
        question: '¿Qué valor será impreso en la consola?',
        correctAnswer: "Menor o igual a 10"
    },
    {
        description: `function calcular(a, b, c) {
    return (a + b + c) / 3;
}
console.log(calcular(6, 9, 12));`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "9"
    },
    {
        description: `Algoritmo MultiplicarTresNumeros
    a ← 2
    b ← 3
    c ← 4
    multiplicacion ← a * b * c
    Imprimir multiplicacion`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "24"
    },
    {
        description: `let x = 3;
let y = 4;
let z = x + y;
console.log(z);`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "7"
    },
    {
        description: `let x = 7;
let y = 2;
console.log(x % y);`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "1"
    },
    {
        description: `Algoritmo CalcularProducto
    a ← 5
    b ← 6
    producto ← a * b
    Imprimir producto`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "30"
    },
    {
        description: `let num = 12;
if (num % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}`,
        question: '¿Qué se imprimirá en la consola?',
        correctAnswer: "Es par"
    },
    {
        description: `function doble(n) {
    return n * 2;
}
console.log(doble(5));`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "10"
    },
    {
        description: `let contador = 1;
while (contador < 4) {
    console.log(contador);
    contador++;
}`,
        question: '¿Cuál es el último valor impreso?',
        correctAnswer: "3"
    },
    {
        description: `Algoritmo SumarLista
    lista ← [2, 4, 6, 8]
    suma ← 0
    Para i En lista Hacer
        suma ← suma + i
    FinPara
    Imprimir suma`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "20"
    },
    {
        description: `let num = 25;
if (num > 20) {
    console.log("Mayor que 20");
} else {
    console.log("Menor o igual a 20");
}`,
        question: '¿Qué mensaje se imprimirá?',
        correctAnswer: "Mayor que 20"
    },
    {
        description: `Algoritmo RestaDiez
    n ← 10
    resultado ← n - 3
    Imprimir resultado`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "7"
    },
    {
        description: `let x = 100;
while (x >= 50) {
    console.log(x);
    x = x - 10;
}`,
        question: '¿Cuál será el primer valor impreso?',
        correctAnswer: "100"
    },
    {
        description: `Algoritmo SumarMultiplosDeTres
    suma ← 0
    Para i ← 1 Hasta 9 Hacer
        Si (i mod 3 = 0) Entonces
            suma ← suma + i
        FinSi
    FinPara
    Imprimir suma`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "18"
    },
    {
        description: `let x = 5;
for (let i = 1; i <= 4; i++) {
    x = x + i;
}
console.log(x);`,
        question: '¿Qué valor será impreso en la consola?',
        correctAnswer: "15"
    },
    {
        description: `Algoritmo DeterminarMayor
    a ← 12
    b ← 20
    Si (a > b) Entonces
        Imprimir a
    SiNo
        Imprimir b
    FinSi`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "20"
    },
    {
        description: `let numero = 30;
if (numero > 25) {
    console.log("Mayor que 25");
} else {
    console.log("Menor o igual a 25");
}`,
        question: '¿Qué valor se imprimirá en la consola?',
        correctAnswer: "Mayor que 25"
    },
    {
        description: `Algoritmo CalcularCubo
    a ← 3
    cubo ← a * a * a
    Imprimir cubo`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "27"
    },
    {
        description: `let contador = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        contador = contador + i;
    }
}
console.log(contador);`,
        question: '¿Cuál es el valor final de "contador"?',
        correctAnswer: "30"
    },
    {
        description: `Algoritmo CalcularSumaDiez
    suma ← 0
    Para i ← 1 Hasta 10 Hacer
        suma ← suma + i
    FinPara
    Imprimir suma`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "55"
    },
    {
        description: `function multiplicarTresNumeros(a, b, c) {
    return a * b * c;
}
console.log(multiplicarTresNumeros(2, 3, 4));`,
        question: '¿Qué valor será impreso?',
        correctAnswer: "24"
    }
];


// Frases secretas relacionadas con la lógica de programación
const secretPhrases = [
    "Programar es pensar en soluciones",
    "La lógica es la base del código",
    "Algoritmos resuelven problemas complejos",
    "Depurar es parte del proceso creativo",
    "La clave está en los detalles del código",
    "Todo error es una oportunidad de aprendizaje",
    "Una línea de código puede hacer la diferencia",
    "La programación es un arte de precisión",
    "Piensa en algoritmos, no en lenguaje",
    "El código siempre puede mejorarse"
];

let players = [];
let currentPlayerIndex = 0;
let currentChallenge = 0;
let timer;
let timeLeft = 20;

// Elementos del DOM
const registrationScreen = document.getElementById('registration-screen');
const gameScreen = document.getElementById('game-screen');
const phraseGuessScreen = document.getElementById('phrase-guess-screen');
const finalScoresScreen = document.getElementById('final-scores-screen');

const playerNameInput = document.getElementById('player-name');
const addPlayerBtn = document.getElementById('add-player-btn');
const playerList = document.getElementById('player-list');
const startGameBtn = document.getElementById('start-game-btn');

const currentPlayerEl = document.getElementById('current-player');
const timerEl = document.getElementById('timer');
const challengeEl = document.querySelector('#challenge code');
const answerEl = document.getElementById('answer');
const messageEl = document.getElementById('message');
const hintEl = document.getElementById('hint');
const scoresEl = document.getElementById('scores');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');

const guessPlayerEl = document.getElementById('guess-player');
const finalHintEl = document.getElementById('final-hint');
const phraseGuessEl = document.getElementById('phrase-guess');
const guessPhraseBtn = document.getElementById('guess-phrase-btn');
const finalMessageEl = document.getElementById('final-message');
const nextPlayerGuessBtn = document.getElementById('next-player-guess-btn');

const finalScoresEl = document.getElementById('final-scores');
const restartGameBtn = document.getElementById('restart-game-btn');

// Funciones de registro de jugadores
function addPlayer() {
    const playerName = playerNameInput.value.trim();
    if (playerName && players.length < 10) {
        players.push({ name: playerName, score: 0, hints: [] });
        updatePlayerList();
        playerNameInput.value = '';
        if (players.length >= 2) {
            startGameBtn.disabled = false;
        }
    }
}

function updatePlayerList() {
    playerList.innerHTML = players.map(player => `<li>${player.name}</li>`).join('');
}

// Funciones del juego
function startGame() {
    registrationScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    displayChallenge();
    updateScores();
    startTimer();
    submitBtn.style.display = 'inline-block'; // Asegurarse de que el botón sea visible al inicio
}

function displayChallenge() {
    challengeEl.innerHTML = `${challenges[currentChallenge].description}\n\n${challenges[currentChallenge].question}`;
    messageEl.innerHTML = '';
    answerEl.value = '';
    nextBtn.style.display = 'none';
    currentPlayerEl.innerHTML = `Turno de: <br><br><div style="color: #2ba61d">${players[currentPlayerIndex].name}</div>`;
    updateHint();
}

function updateHint() {
    const currentPlayer = players[currentPlayerIndex];
    hintEl.innerHTML = `Pista actual: ${currentPlayer.hints[currentPlayer.hints.length-1]}`;
}

function startTimer() {
    timeLeft = 20;
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerEl.textContent = `Tiempo restante: ${timeLeft}s`;
}

function handleTimeout() {
    messageEl.innerHTML = 'Se acabó el tiempo. Turno del siguiente jugador.';
    messageEl.style.color = 'red';
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
    answerEl.style.backgroundColor = 'lightgray'; // Cambiar el color de fondo
    answerEl.style.color = 'darkgray'; // Cambiar el color del texto
    answerEl.disabled = true; // Deshabilitar el campo de entrada
    answerEl.isContentEditable=false;

}

function checkAnswer() {
    clearInterval(timer);
    const userAnswer = answerEl.value.trim();
    const correctAnswer = challenges[currentChallenge].correctAnswer;

    if (userAnswer === correctAnswer) {
        messageEl.innerHTML = '¡Correcto! Avanza al siguiente desafío.';
        messageEl.style.color = 'green';
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
        players[currentPlayerIndex].score++;

        answerEl.style.backgroundColor = 'lightgray'; // Cambiar el color de fondo
        answerEl.style.color = 'green'; // Cambiar el color del texto
        revealHint();
    } else {
        messageEl.innerHTML = 'Incorrecto. Turno del siguiente jugador.';
        messageEl.style.color = 'red';
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';

        answerEl.style.backgroundColor = 'lightgray'; // Cambiar el color de fondo
        answerEl.style.color = 'red'; // Cambiar el color del texto
    }
    answerEl.disabled = true; // Deshabilitar el campo de entrada
    updateScores();
}



function revealHint() {
    const currentPlayer = players[currentPlayerIndex];
    const secretPhrase = secretPhrases[currentPlayerIndex].split(" ");
    if (currentPlayer.hints.length < secretPhrase.length) {
        currentPlayer.hints.push(secretPhrase[currentPlayer.hints.length]);
        updateHint();
    }
}

function updateScores() {
    scoresEl.innerHTML = players.map(player => `${player.name}: ${player.score}`).join(' | ');
}

function nextChallenge() {
    currentChallenge++;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

    if (currentChallenge < challenges.length) {
        submitBtn.style.display = 'inline-block';
        answerEl.disabled = false; // Habilitar el campo de entrada para el siguiente desafío
        answerEl.style.backgroundColor = ''; // Cambiar el color de fondo
        answerEl.style.color = ''; // Cambiar el color del texto
        displayChallenge();
        startTimer();
    } else {
        startPhraseGuessing();
    }
}

// Funciones para adivinar la frase
function startPhraseGuessing() {
    gameScreen.style.display = 'none';
    phraseGuessScreen.style.display = 'block';
    currentPlayerIndex = 0;
    displayPhraseGuess();
}

function displayPhraseGuess() {
    const currentPlayer = players[currentPlayerIndex];
    guessPlayerEl.textContent = `${currentPlayer.name}, adivina tu frase secreta:`;
    finalHintEl.textContent = `Pista: ${currentPlayer.hints.join(" ")}`;
    phraseGuessEl.value = '';
    finalMessageEl.textContent = '';
    guessPhraseBtn.style.display = 'inline-block';
    nextPlayerGuessBtn.style.display = 'none';
}

function checkPhraseGuess() {
    const userGuess = phraseGuessEl.value.trim().toLowerCase();
    const correctPhrase = secretPhrases[currentPlayerIndex].toLowerCase();

    if (userGuess === correctPhrase) {
        finalMessageEl.textContent = '¡Correcto! Has adivinado tu frase secreta.';
        finalMessageEl.style.color = 'green';
        players[currentPlayerIndex].score += 5;
    } else {
        finalMessageEl.textContent = 'Incorrecto. No has adivinado tu frase secreta.';
        finalMessageEl.style.color = 'red';
    }

    guessPhraseBtn.style.display = 'none';
    nextPlayerGuessBtn.style.display = 'inline-block';
    updateScores();
}

function nextPlayerGuess() {
    currentPlayerIndex++;
    if (currentPlayerIndex < players.length) {
        displayPhraseGuess();
    } else {
        showFinalScores();
    }
}

// Funciones finales del juego
function showFinalScores() {
    phraseGuessScreen.style.display = 'none';
    finalScoresScreen.style.display = 'block';
    finalScoresEl.innerHTML = players
        .sort((a, b) => b.score - a.score)
        .map((player, index) => `${index + 1}. ${player.name}: ${player.score} puntos`)
        .join('<br>');
}

function restartGame() {
    players = [];
    currentPlayerIndex = 0;
    currentChallenge = 0;
    finalScoresScreen.style.display = 'none';
    registrationScreen.style.display = 'block';
    updatePlayerList();
    startGameBtn.disabled = true;
}

// Event listeners
addPlayerBtn.addEventListener('click', addPlayer);
startGameBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextChallenge);
guessPhraseBtn.addEventListener('click', checkPhraseGuess);
nextPlayerGuessBtn.addEventListener('click', nextPlayerGuess);
restartGameBtn.addEventListener('click', restartGame);