const dataQuiz = [
    {
        question: "What language runs on a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading styling sheet",
        b: "Cascading sheet style",
        c: "Cascading simple sheet",
        d: "Cars styling sheet",
        correct: "a"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper market language",
        b: "Hypertxet makeup language",
        c: "Hypertext markdown language",
        d: "Hypertext language",
        correct: "b"
    },
    {
        question: "What is the difference between the == operator and the === operator in JavaScript?",
        a: "They both compare values and types strictly",
        b: "== compares values only, while === compares both values and types",
        c: "== compares both values and types, while === compares values only",
        d: "There is no difference; they are interchangeable",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionELS = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = dataQuiz[currentQuiz];

    questionELS.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach(el => {
        if (el.checked) {
            answer = el.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach(el => el.checked = false);
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === dataQuiz[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < dataQuiz.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${dataQuiz.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
