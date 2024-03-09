
const quizData = [
    {
        asignatura: "Matemáticas",
        type: "text",
        question: "¿Cuál es la capital de Francia?",
        options: ["París", "Berlín"],
        correctAnswer: "París"
    },
    {
        asignatura: "Ciencias",
        type: "image",
        question: "./captura.png",
        options: ["Tres", "Cuatro"],
        correctAnswer: "Tres"
    }
];
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let incorrectQuestions = [];
let Counter = 0;

function initializeQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    renderQuestion(quizData[currentQuestion], quizContainer);
}

function renderQuestion(questionData, container) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const PreguntaElement = document.createElement('div');
    PreguntaElement.classList.add('PreguntaElement');
    const Pregunta_numero = document.createElement("p")
    Pregunta_numero.classList.add("asignaturaElement");
    Pregunta_numero.textContent = `Pregunta ${Counter}`;
    Counter++;

    const asignaturaElement = document.createElement('p');
    asignaturaElement.classList.add('asignaturaElement');
    asignaturaElement.textContent = `Asignatura: ${questionData.asignatura}`;
    
    PreguntaElement.appendChild(Pregunta_numero);
    PreguntaElement.appendChild(asignaturaElement);

    if (questionData.type === "text") {
        const textElementContend = document.createElement('div');
        textElementContend.classList.add('textElementContend');
        const textElement = document.createElement('p');
        textElement.classList.add('textElement');
        textElement.textContent = questionData.question;
        textElementContend.appendChild(textElement);
        PreguntaElement.appendChild(textElementContend);
    } else if (questionData.type === "image") {
        const imgElement = document.createElement('img');
        imgElement.classList.add('imgElement');
        imgElement.src = questionData.question;
        imgElement.alt = `Pregunta ${currentQuestion + 1}`;
        PreguntaElement.appendChild(imgElement);
    }

    const ContenedorOption = document.createElement("div");
    ContenedorOption.classList.add("ContenedorOption");

    const TextoRE = document.createElement('h1');
    TextoRE.textContent = "Marca La respuesta Correcta";
    TextoRE.classList.add('TextoRE');

    const optionsElement = document.createElement('div');
    optionsElement.classList.add('options');
    optionsElement.id = `options${currentQuestion}`;

    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.setAttribute('data-index', index);
        optionElement.onclick = () => checkAnswer(questionData, index);
        optionsElement.appendChild(optionElement);
    });
    ContenedorOption.appendChild(TextoRE);
    questionElement.appendChild(PreguntaElement);
    ContenedorOption.appendChild(optionsElement);
    questionElement.appendChild(ContenedorOption);
    container.innerHTML = '';
    container.appendChild(questionElement);
}

function checkAnswer(questionData, selectedOption) {
    const correctAnswerIndex = questionData.options.indexOf(questionData.correctAnswer);

    if (selectedOption === correctAnswerIndex) {
        correctAnswers += 4;
    } else {
        incorrectAnswers += 1;
        incorrectQuestions.push({ pregunta: currentQuestion + 1, asignatura: questionData.asignatura });
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        const quizContainer = document.getElementById('quiz-container');
        renderQuestion(quizData[currentQuestion], quizContainer);
    } else {
        showQuizSummary();
    }
}

function showQuizSummary() {
    // document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-summary').style.display = 'block';
    document.querySelector("body").style.pointerEvents = "none";
    document.getElementById('correct-answers').textContent = `Respuestas correctas: ${correctAnswers / 4}`;
    document.getElementById('incorrect-answers').textContent = `Respuestas incorrectas: ${incorrectAnswers}`;
    document.getElementById('score').textContent = `Puntuación: ${Math.max(0, correctAnswers - incorrectAnswers)}`;

    // Mostrar preguntas incorrectas
    const incorrectQuestionList = document.getElementById('incorrect-question-list');
    incorrectQuestions.forEach(item => {
        const listItem = document.createElement('p');
        listItem.textContent = `Asignatura: ${item.asignatura}, Pregunta ${item.pregunta}`;
        incorrectQuestionList.appendChild(listItem);
    });
}

// initializeQuiz();