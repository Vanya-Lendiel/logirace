const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

const quiz = [
  {
    question: "Як ще називають Марс?",
    answers: ["Червона планета", "Синя планета", "Газовий гігант", "Крижана планета"],
    correct: 0
  },
  {
    question: "Чому Марс червоний?",
    answers: ["Вода", "Газ", "Оксид заліза", "Лава"],
    correct: 2
  },
  {
    question: "Скільки триває доба на Марсі?",
    answers: ["12 год", "24 год", "24 год 37 хв", "48 год"],
    correct: 2
  },
  {
    question: "Найбільший вулкан?",
    answers: ["Еверест", "Олімп Монс", "Фудзі", "Везувій"],
    correct: 1
  },
  {
    question: "Скільки супутників?",
    answers: ["0", "1", "2", "4"],
    correct: 2
  },
  {
    question: "Як називаються супутники?",
    answers: ["Фобос і Деймос", "Луна і Титан", "Іо і Європа", "Харон і Плутон"],
    correct: 0
  }
];

let current = 0;
let score = 0;

const q = document.getElementById("question");
const a = document.getElementById("answers");
const next = document.getElementById("nextBtn");
const result = document.getElementById("result");

function show() {
    const item = quiz[current];
    q.textContent = item.question;
    a.innerHTML = "";

    item.answers.forEach((text, i) => {
        const btn = document.createElement("button");
        btn.textContent = text;

        btn.onclick = () => {
            if (i === item.correct) score++;
            next.style.display = "block";
        };

        a.appendChild(btn);
    });
}

next.onclick = () => {
    current++;
    next.style.display = "none";

    if (current < quiz.length) {
        show();
    } else {
        q.textContent = "";
        a.innerHTML = "";
        next.style.display = "none";
        result.innerHTML = `Результат: ${score} / ${quiz.length}`;
    }
};

show();
