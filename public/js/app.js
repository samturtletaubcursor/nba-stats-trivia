const DATA_URL = "./data/stub.json";

const screens = {
  start: document.getElementById("screen-start"),
  quiz: document.getElementById("screen-quiz"),
  results: document.getElementById("screen-results"),
};

const els = {
  subtitle: document.getElementById("subtitle"),
  stubBadge: document.getElementById("stub-badge"),
  score: document.getElementById("score"),
  progress: document.getElementById("progress"),
  category: document.getElementById("category"),
  season: document.getElementById("season"),
  question: document.getElementById("question"),
  choices: document.getElementById("choices"),
  feedback: document.getElementById("feedback"),
  nextBtn: document.getElementById("next-btn"),
  startBtn: document.getElementById("start-btn"),
  restartBtn: document.getElementById("restart-btn"),
  finalScore: document.getElementById("final-score"),
  finalMessage: document.getElementById("final-message"),
  error: document.getElementById("load-error"),
};

let questions = [];
let index = 0;
let score = 0;
let answered = false;

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

async function loadData() {
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error(`Failed to load stub data (${res.status})`);
  return res.json();
}

function renderQuestion() {
  const q = questions[index];
  answered = false;

  els.category.textContent = q.category;
  els.category.className = `tag ${q.category}`;
  els.season.textContent = q.season;
  els.question.textContent = q.prompt;
  els.feedback.classList.add("hidden");
  els.feedback.textContent = "";
  els.nextBtn.disabled = true;

  els.choices.innerHTML = "";
  q.choices.forEach((label, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.textContent = label;
    btn.addEventListener("click", () => selectAnswer(i, btn));
    els.choices.appendChild(btn);
  });

  els.score.textContent = String(score);
  els.progress.textContent = `${index + 1} / ${questions.length}`;
}

function selectAnswer(choiceIndex, btn) {
  if (answered) return;
  answered = true;

  const q = questions[index];
  const buttons = [...els.choices.querySelectorAll(".choice")];

  buttons.forEach((b) => {
    b.disabled = true;
  });

  if (choiceIndex === q.correctIndex) {
    score += 1;
    btn.classList.add("correct");
    els.feedback.textContent = `Correct! ${q.explanation}`;
  } else {
    btn.classList.add("wrong");
    buttons[q.correctIndex].classList.add("correct");
    els.feedback.textContent = `Not quite. ${q.explanation}`;
  }

  els.score.textContent = String(score);
  els.feedback.classList.remove("hidden");
  els.nextBtn.disabled = false;
}

function startQuiz() {
  index = 0;
  score = 0;
  questions = shuffle(questions);
  showScreen("quiz");
  renderQuestion();
}

function nextQuestion() {
  index += 1;
  if (index >= questions.length) {
    finishQuiz();
    return;
  }
  renderQuestion();
}

function finishQuiz() {
  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  els.finalScore.textContent = `${score} / ${total}`;
  if (pct >= 90) {
    els.finalMessage.textContent = "MVP performance — you know your NBA stats.";
  } else if (pct >= 70) {
    els.finalMessage.textContent = "Solid sixth man energy. Run it back.";
  } else if (pct >= 50) {
    els.finalMessage.textContent = "Bench warmer — study the stub sheet and try again.";
  } else {
    els.finalMessage.textContent = "G-League call-up needed. Review the explanations.";
  }

  showScreen("results");
}

async function init() {
  try {
    const data = await loadData();
    questions = data.questions;

    if (data.meta?.subtitle) {
      els.subtitle.textContent = data.meta.subtitle;
    }
    if (data.meta?.disclaimer) {
      els.stubBadge.textContent = data.meta.disclaimer;
    }

    els.startBtn.addEventListener("click", startQuiz);
    els.nextBtn.addEventListener("click", nextQuestion);
    els.restartBtn.addEventListener("click", () => {
      showScreen("start");
    });

    showScreen("start");
  } catch (err) {
    els.error.textContent = `${err.message}. Serve the app over HTTP (see README).`;
    els.error.classList.remove("hidden");
    document.querySelector(".app main").style.display = "none";
  }
}

init();
