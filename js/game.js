const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const pregressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

// Creating variables to start the game
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

// questions coming from questions.json
fetch('questions.json').then(res => {
  return res.json();
}).then(loadedQuestions => {
  console.log(loadedQuestions);
  questions = loadedQuestions;
  startGame();
})
  .catch(err => {
    question.innerHTML = "Your charas must be unaligned! Something is amiss, please refresh the page.";
    console.error(err);
  });

// Constants
const CORRECT_BONUS = 10;

const MAX_QUESTIONS = 5;

// Functions
// To begin the game and change questions
startGame = () => {
  // questionCounter set to -1 to show an empty progress bar at the start or the game
  questionCounter = -1;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  game.classList.remove('hidden');
  loader.classList.add('hidden');
};

getNewQuestion = () => {
  // Checks to see if we are out of questions
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // Saves most recent score in local storage
    localStorage.setItem('mostRecentScore', score);
    // Go to the end page
    return window.location.assign('./end.html');
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  // Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  // Randomizes questions
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  // Matches random question to number (This is why dataset is used)
  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
}
// For targeting the class for answers to change color
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply = 'incorrect';
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = 'correct';
    }
    // Score increments, stays the same
    if (classToApply === 'correct') {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);
    // Gives the pause with the colored answer before changing
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);

  })
})
// Adds score
incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

