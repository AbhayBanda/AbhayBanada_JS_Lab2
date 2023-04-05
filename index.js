var data = [
  {
    question: "JavaScript supports",
    answers: {
      1: "Functions",
      2: "XHTML",
      3: "CSS",
      4: "HTML",
    },
    correctAnswer: "1",
  },
  {
    question: "Which language is used for styling web pages?",
    answers: {
      1: "HTML",
      2: "JQuery",
      3: "CSS",
      4: "XML",
    },
    correctAnswer: "3",
  },
  {
    question: "Which is not a JavaScript Framework?",
    answers: {
      1: "Python Script",
      2: "Query",
      3: "Django",
      4: "NodeJS",
    },
    correctAnswer: "3",
  },
  {
    question: "Which is used for Connect To Database?",
    answers: {
      1: "PHP",
      2: "HTML",
      3: "JS",
      4: "All",
    },
    correctAnswer: "1",
  },
  {
    question: "JavaScript is a",
    answers: {
      1: "Language",
      2: "Programming Language",
      3: "Development",
      4: "All",
    },
    correctAnswer: "2",
  },
];

var currentQuestion = 0;
var currentScore = 0;
var maxScore = data.length;
var optionCount = 4;

function calculateScore(choice) {
  console.log(`[Correct Answer] : ${data[currentQuestion].correctAnswer}`);
  console.log(`[Selected Choice] : ${choice + 1}`);
  if (data[currentQuestion].correctAnswer == choice + 1) currentScore++;
}

function handleClick(choice) {
  const button = document.getElementById(`btn${choice}`);
  button.onclick = function () {
    calculateScore(choice);
    currentQuestion++;
    loadQuestions();
  };
}

function updateProgress() {
  var progress = document.getElementById("progress");
  progress.innerHTML = `Question ${currentQuestion + 1} of ${data.length}`;
}
function showScores(currentScore, maxScore) {
  let quizOverHTML = `<h1> Result</h1> <h2> Your score : ${currentScore} & percentage is ${
    (currentScore * 100) / maxScore
  } %</h2>`;
  document.getElementById("quiz").innerHTML = quizOverHTML;
}
function loadQuestions() {
  if (currentQuestion >= data.length) {
    showScores(currentScore, maxScore);
  } else {
    var displayQuestion = document.getElementById("question");
    displayQuestion.innerHTML = data[currentQuestion].question;

    for (var i = 0; i < optionCount; ++i) {
      var choice = document.getElementById(`btn${i}`);
      choice.innerHTML = data[currentQuestion].answers[`${i + 1}`];
    }
    for (var i = 0; i < optionCount; ++i) handleClick(i);
    updateProgress();
  }
}

loadQuestions();
