document.addEventListener('DOMContentLoaded', () => {

    // Banco de preguntas con expresiones en LaTeX
    const questionBank = [
        { question: "Simplifica la fracción $\\frac{12}{18}$.", options: ["$\\frac{2}{3}$", "$\\frac{4}{6}$", "$\\frac{6}{9}$", "$\\frac{3}{4}$"], answer: "$\\frac{2}{3}$" },
        { question: "¿Cuál es el resultado de $\\frac{1}{2} + \\frac{1}{4}$?", options: ["$\\frac{2}{6}$", "$\\frac{3}{4}$", "$\\frac{1}{8}$", "$\\frac{1}{2}$"], answer: "$\\frac{3}{4}$" },
        { question: "Calcula $\\frac{3}{5} \\times \\frac{10}{9}$.", options: ["$\\frac{1}{3}$", "$\\frac{6}{5}$", "$\\frac{2}{3}$", "$\\frac{30}{45}$"], answer: "$\\frac{2}{3}$" },
        { question: "Resuelve $\\frac{5}{6} - \\frac{1}{3}$.", options: ["$\\frac{4}{3}$", "$\\frac{1}{2}$", "$\\frac{3}{6}$", "$\\frac{2}{3}$"], answer: "$\\frac{1}{2}$" },
        { question: "Calcula $\\frac{2}{3} \\div \\frac{4}{5}$.", options: ["$\\frac{8}{15}$", "$\\frac{5}{6}$", "$\\frac{10}{12}$", "$\\frac{3}{2}$"], answer: "$\\frac{5}{6}$" },
        { question: "¿Qué fracción es equivalente a $0.75$?", options: ["$\\frac{1}{4}$", "$\\frac{3}{4}$", "$\\frac{7}{10}$", "$\\frac{1}{2}$"], answer: "$\\frac{3}{4}$" },
        { question: "Calcula $-\\frac{3}{4} + \\frac{1}{2}$.", options: ["$-\\frac{1}{4}$", "$-\\frac{1}{2}$", "$-\\frac{5}{4}$", "$\\frac{1}{4}$"], answer: "$-\\frac{1}{4}$" },
        { question: "Simplifica $\\frac{2}{3} \\div 2$.", options: ["$\\frac{1}{3}$", "$\\frac{4}{3}$", "$\\frac{2}{6}$", "$1$"], answer: "$\\frac{1}{3}$" },
        { question: "¿Cuál es el resultado de $1 - \\frac{2}{5}$?", options: ["$\\frac{3}{5}$", "$\\frac{1}{5}$", "$3$", "$\\frac{2}{5}$"], answer: "$\\frac{3}{5}$" },
        { question: "Ordena de menor a mayor: $\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}$.", options: ["$\\frac{1}{4}, \\frac{1}{3}, \\frac{1}{2}$", "$\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}$", "$\\frac{1}{3}, \\frac{1}{4}, \\frac{1}{2}$", "$\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{3}$"], answer: "$\\frac{1}{4}, \\frac{1}{3}, \\frac{1}{2}$" },
        { question: "¿Cuál es la raíz cuadrada de $144$?", options: ["$10$", "$12$", "$14$", "$16$"], answer: "$12$" },
        { question: "Calcula $\\sqrt[3]{27}$.", options: ["$3$", "$4$", "$5$", "$9$"], answer: "$3$" },
        { question: "Simplifica $\\sqrt{20}$.", options: ["$2\\sqrt{5}$", "$4\\sqrt{5}$", "$5\\sqrt{2}$", "$2\\sqrt{10}$"], answer: "$2\\sqrt{5}$" },
        { question: "Calcula $\\sqrt{9} + \\sqrt{16}$.", options: ["$7$", "$5$", "$25$", "$\\sqrt{25}$"], answer: "$7$" },
        { question: "Resuelve $\\sqrt{\\frac{16}{4}}$.", options: ["$4$", "$2$", "$16$", "$1$"], answer: "$2$" },
        { question: "Calcula $\\sqrt{2} \\cdot \\sqrt{8}$.", options: ["$\\sqrt{16}$", "$16$", "$4$", "$2$"], answer: "$4$" },
        { question: "¿Cuál es la raíz cuadrada de $0.04$?", options: ["$0.2$", "$0.02$", "$0.4$", "$2$"], answer: "$0.2$" },
        { question: "Simplifica $\\sqrt{50}$.", options: ["$5\\sqrt{2}$", "$2\\sqrt{5}$", "$10\\sqrt{5}$", "$\\sqrt{25}$"], answer: "$5\\sqrt{2}$" },
        { question: "¿Cuál es la raíz cúbica de $64$?", options: ["$2$", "$4$", "$8$", "$6$"], answer: "$4$" },
        { question: "Calcula $\\sqrt{x^2}$.", options: ["$x$", "$x^2$", "$1$", "$2x$"], answer: "$x$" },
        { question: "Simplifica $2^3$.", options: ["$5$", "$6$", "$8$", "$9$"], answer: "$8$" },
        { question: "Calcula $(5^2)^3$.", options: ["$5^5$", "$5^6$", "$10^6$", "$125$"], answer: "$5^6$" },
        { question: "Resuelve $3^{-2}$.", options: ["$-9$", "$9$", "$\\frac{1}{9}$", "$\\frac{1}{6}$"], answer: "$\\frac{1}{9}$" },
        { question: "Simplifica $\\frac{x^5}{x^2}$.", options: ["$x^7$", "$x^3$", "$x^{10}$", "$x^{-3}$"], answer: "$x^3$" },
        { question: "Calcula $2^0$.", options: ["$0$", "$1$", "$2$", "$-2$"], answer: "$1$" },
        { question: "Resuelve $(2x)^3$.", options: ["$2x^3$", "$6x$", "$8x^3$", "$x^3$"], answer: "$8x^3$" },
        { question: "Simplifica $(x^3)(x^4)$.", options: ["$x^7$", "$x^{12}$", "$x^1$", "$x^{34}$"], answer: "$x^7$" },
        { question: "¿Cuál es el valor de $10^{-1}$?", options: ["$0.1$", "$10$", "$-10$", "$-0.1$"], answer: "$0.1$" },
        { question: "Calcula $\\left(\\frac{1}{2}\\right)^2$.", options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$1$", "$\\frac{2}{4}$"], answer: "$\\frac{1}{4}$" },
        { question: "Resuelve $\\left(\\frac{x}{y}\\right)^{-1}$.", options: ["$-\\frac{x}{y}$", "$\\frac{y}{x}$", "$\\frac{x^{-1}}{y^{-1}}$", "$-\\frac{y}{x}$"], answer: "$\\frac{y}{x}$" },
        { question: "Factoriza $x^2 - 9$.", options: ["$(x-3)^2$", "$(x-3)(x+3)$", "$x(x-9)$", "$(x+3)^2$"], answer: "$(x-3)(x+3)$" },
        { question: "¿Cuál es el factor común de $2x + 4$?", options: ["$x$", "$2$", "$4$", "$2x$"], answer: "$2$" },
        { question: "Factoriza $x^2 + 5x + 6$.", options: ["$(x+6)(x+1)$", "$(x+2)(x+3)$", "$x(x+5)$", "$(x-2)(x-3)$"], answer: "$(x+2)(x+3)$" },
        { question: "Factoriza $4a^2 - 1$.", options: ["$(2a-1)^2$", "$(2a-1)(2a+1)$", "$2a(2a-1)$", "$a(4a-1)$"], answer: "$(2a-1)(2a+1)$" },
        { question: "Si $x + 5 = 10$, ¿cuál es el valor de $x$?", options: ["$5$", "$15$", "$2$", "$-5$"], answer: "$5$" },
        { question: "¿Cuál es el valor de $a$ en $a + a + a = 12$?", options: ["$3$", "$4$", "$6$", "$12$"], answer: "$4$" },
        { question: "Expresa $2(x + 3)$ usando la propiedad distributiva.", options: ["$2x + 3$", "$2x + 6$", "$5x$", "$x+6$"], answer: "$2x + 6$" },
        { question: "Simplifica $3x + 2x - x$.", options: ["$4x$", "$5x$", "$3x$", "$2x$"], answer: "$4x$" },
        { question: "Factoriza $3x + 6y$.", options: ["$3(x+2y)$", "$3(x+6y)$", "$x(3+6y)$", "$3x(1+2y)$"], answer: "$3(x+2y)$" },
        { question: "Si $2x = 8$, ¿cuál es el valor de $x$?", options: ["$16$", "$4$", "$6$", "$2$"], answer: "$4$" },
        { question: "Resuelve $2x - 1 = 5$.", options: ["$x=2$", "$x=3$", "$x=4$", "$x=6$"], answer: "$x=3$" },
        { question: "Resuelve $3(x+1) = 9$.", options: ["$x=2$", "$x=3$", "$x=4$", "$x=6$"], answer: "$x=2$" },
        { question: "Si $\\frac{x}{2} = 5$, ¿cuál es el valor de $x$?", options: ["$2.5$", "$7$", "$10$", "$5$"], answer: "$10$" },
        { question: "En un plano cartesiano, ¿qué representa $y = 2x + 1$?", options: ["Parábola", "Línea recta", "Círculo", "Hipérbola"], answer: "Línea recta" },
        { question: "Intersección de $y=x$ y $y=-x$.", options: ["$(1,1)$", "$(0,0)$", "$(1,-1)$", "$(-1,1)$"], answer: "$(0,0)$" },
        { question: "Si $x + y = 5$ y $x - y = 1$, ¿cuánto vale $x$?", options: ["$2$", "$3$", "$4$", "$5$"], answer: "$3$" },
        { question: "Si $2x - 3 = x + 1$, ¿cuánto vale $x$?", options: ["$-4$", "$4$", "$2$", "$3$"], answer: "$4$" },
        { question: "Resuelve la ecuación $4x - 8 = 0$.", options: ["$x=2$", "$x=1$", "$x=4$", "$x=0$"], answer: "$x=2$" },
        { question: "Si la suma es $10$ y su diferencia es $2$, ¿cuáles son?", options: ["$6$ y $4$", "$7$ y $3$", "$8$ y $2$", "$5$ y $5$"], answer: "$6$ y $4$" },
        { question: "Calcula $m$ en $2m + 5 = 15$.", options: ["$5$", "$10$", "$20$", "$2$"], answer: "$5$" }
    ];

    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const ROWS = isMobile ? 8 : 3;
    const COLS = isMobile ? 3 : 8;
    const TOTAL_CARDS = ROWS * COLS;
    const JOKERS = { advance: 2, lose: 3 };
    const CARDS_WITH_QUESTIONS = TOTAL_CARDS - (JOKERS.advance + JOKERS.lose);

    let playerName = "";
    let currentLevel = 0;
    let cardsData = [];
    let activeCard = null;
    let boardLocked = false;

    // Elementos DOM
    const gameBoard = document.getElementById('game-board');
    const startModal = document.getElementById('start-modal');
    const playerNameInput = document.getElementById('player-name-input');
    const startGameBtn = document.getElementById('start-game-btn');
    
    const questionModal = document.getElementById('question-modal');
    const questionText = document.getElementById('question-text');
    const answerOptions = document.getElementById('answer-options');
    const submitBtn = document.getElementById('submit-answer');
    const feedbackText = document.getElementById('feedback-text');

    const certModal = document.getElementById('certificate-modal');
    const certPlayerName = document.getElementById('cert-player-name');
    const certDate = document.getElementById('cert-date');
    const printCertBtn = document.getElementById('print-cert-btn');
    const restartGameBtn = document.getElementById('restart-game-btn');

    // Sonidos mediante Web Audio API
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playTone(freq, type, duration) {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }

    function playSoundEffect(type) {
        switch (type) {
            case 'flip':
                playTone(400, 'sine', 0.08);
                break;
            case 'correct':
                playTone(523.25, 'triangle', 0.15);
                setTimeout(() => playTone(659.25, 'triangle', 0.2), 120);
                break;
            case 'incorrect':
                playTone(220, 'sawtooth', 0.18);
                setTimeout(() => playTone(180, 'sawtooth', 0.25), 180);
                break;
            case 'win':
                [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                    setTimeout(() => playTone(freq, 'sine', 0.25), idx * 130);
                });
                break;
            case 'lose':
                [300, 250, 200, 150].forEach((freq, idx) => {
                    setTimeout(() => playTone(freq, 'sawtooth', 0.2), idx * 110);
                });
                break;
        }
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    startGameBtn.addEventListener('click', () => {
        const val = playerNameInput.value.trim();
        if (val === '') {
            alert('Por favor, ingresa tu nombre.');
            return;
        }
        playerName = val;
        startModal.classList.add('modal-hidden');
        initGame();
    });

    function initGame() {
        currentLevel = 0;
        boardLocked = false;
        gameBoard.innerHTML = '';

        let tempQuestions = shuffle([...questionBank]);
        let questionsForGame = tempQuestions.slice(0, CARDS_WITH_QUESTIONS);

        const cardAssignments = [];
        for (let i = 0; i < JOKERS.advance; i++) cardAssignments.push({ type: 'joker', joker: 'advance' });
        for (let i = 0; i < JOKERS.lose; i++) cardAssignments.push({ type: 'joker', joker: 'lose' });
        
        questionsForGame.forEach(question => {
            cardAssignments.push({ type: 'question', data: question });
        });
        
        cardsData = shuffle(cardAssignments);

        for (let i = 0; i < TOTAL_CARDS; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.index = i;
            card.innerHTML = `<div class="card-face card-front">❓</div><div class="card-face card-back"></div>`;
            card.addEventListener('click', handleCardClick);
            gameBoard.appendChild(card);
        }

        updateActiveLevelStatus();
    }

    function updateActiveLevelStatus() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            const index = parseInt(card.dataset.index);
            const cardLevel = isMobile ? Math.floor(index / COLS) : (index % COLS);
            
            if (cardLevel === currentLevel && !card.classList.contains('incorrect-answered')) {
                card.classList.remove('disabled');
            } else {
                card.classList.add('disabled');
            }
        });
    }

    function handleCardClick(event) {
        if (boardLocked) return;
        const card = event.currentTarget;
        if (card.classList.contains('disabled')) return;
        
        playSoundEffect('flip');
        boardLocked = true;
        card.classList.add('flipped');
        activeCard = card;
        
        const index = parseInt(card.dataset.index);
        const cardInfo = cardsData[index];
        const backFace = card.querySelector('.card-back');

        setTimeout(() => {
            if (cardInfo.type === 'question') {
                backFace.textContent = '🤔';
                showQuestion(cardInfo.data);
            } else if (cardInfo.type === 'joker') {
                if (cardInfo.joker === 'advance') {
                    backFace.innerHTML = '🚀<br>¡Avanzas!';
                    backFace.classList.add('correct');
                    playSoundEffect('correct');
                    setTimeout(advanceLevel, 1200);
                } else {
                    playSoundEffect('lose');
                    backFace.innerHTML = '☠️<br>¡Reinicia!';
                    backFace.classList.add('incorrect');
                    setTimeout(initGame, 1800);
                }
            }
        }, 600);
    }

    function showQuestion(questionData) {
        questionText.textContent = questionData.question;
        answerOptions.innerHTML = '';
        feedbackText.textContent = '';

        questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.dataset.answer = option;
            button.addEventListener('click', () => {
                document.querySelectorAll('#answer-options button').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            });
            answerOptions.appendChild(button);
        });
        
        submitBtn.onclick = () => checkAnswer(questionData.answer);
        questionModal.classList.remove('modal-hidden');

        // Reprocesar expresiones LaTeX en el modal con MathJax
        if (window.MathJax) {
            MathJax.typesetPromise([questionModal]);
        }
    }

    function checkAnswer(correctAnswer) {
        const selectedButton = document.querySelector('#answer-options .selected');
        if (!selectedButton) {
            feedbackText.textContent = 'Por favor, selecciona una respuesta.';
            return;
        }

        questionModal.classList.add('modal-hidden');
        const backFace = activeCard.querySelector('.card-back');

        if (selectedButton.dataset.answer === correctAnswer) {
            playSoundEffect('correct');
            backFace.innerHTML = '✅<br>¡Correcto!';
            backFace.classList.add('correct');
            setTimeout(advanceLevel, 1000);
        } else {
            playSoundEffect('incorrect');
            backFace.innerHTML = '❌<br>¡Incorrecto!';
            backFace.classList.add('incorrect');
            activeCard.classList.add('disabled', 'incorrect-answered');
            boardLocked = false;
        }
    }

    function advanceLevel() {
        document.querySelectorAll('.card').forEach((card) => {
            const index = parseInt(card.dataset.index);
            const cardLevel = isMobile ? Math.floor(index / COLS) : (index % COLS);
            if (cardLevel === currentLevel) {
                card.classList.add('disabled');
            }
        });

        currentLevel++;
        const winCondition = isMobile ? ROWS : COLS;

        if (currentLevel >= winCondition) {
            playSoundEffect('win');
            setTimeout(showCertificate, 500);
        } else {
            updateActiveLevelStatus();
            boardLocked = false;
        }
    }

    function showCertificate() {
        certPlayerName.textContent = playerName;
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        certDate.textContent = new Date().toLocaleDateString('es-ES', options);
        certModal.classList.remove('modal-hidden');
    }

    printCertBtn.addEventListener('click', () => {
        window.print();
    });

    restartGameBtn.addEventListener('click', () => {
        certModal.classList.add('modal-hidden');
        initGame();
    });
});