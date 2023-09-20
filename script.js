//variables & objects
var timerEl = document.getElementById('countdown');
var userNameEL = document.getElementById('username');
var totalTime = 45;
var scoreEl = document.getElementById('score');
var questionContainerEl = document.getElementById('question-container');
var questionIndex = 0;
var correctAnswers = 0;
var maxAttempts = 3;
var attempts = 0;
let currentQuestion = 0;
let score = 0;

//set timer
let timer;
function countdown() {
    let timeLeft = totalTime;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Time\'s up!';
        } else {
            document.getElementById('countdown').innerHTML = 'Time left:' + timeLeft + 'seconds';
            timeLeft--;
        }
    }, 1000);
}

//User Information
let userName;
function startQuiz() {
    getuserName();
    countdown();
}
function getuserName() {
    userName = userNameEL.value;
    console.log(userName);
}

//quiz section
let question = [
    {
        question: 'What is the capital of Netherlands?',
        options: ['Amsterdam', 'Leiden', 'Rotterdam', 'Den Haag'],
        correctAnswer: 'Amsterdam',
    },
    {
        question: 'What sports are the dutch best known for?',
        options: ['Biking', 'Swimming', 'Hockey', 'Dancing'],
        correctAnswer: 'Swimming',
    },
    {
        question: 'Which of the following is not a dutch artist?',
        options: ['Picasso', 'Van Gogh', 'Rembrandt', 'Vermeer'],
        correctAnswer: 'Picasso',
    },
    {
        question: 'Which of the following is not a drink from holland?',
        options: ['Heineken', 'Grolsch', 'Belgian Moon', 'Amstel'],
        correctAnswer: 'Belgian Moon',
    },
    {
        question: 'Fill in the blank. Amsterdam is known for having the most ____ in closest square footage.',
        options: ['Coffee Shops', 'Museums', 'Canals', 'Nigh Clubs'],
        correctAnswer: 'Museums',
    }
]

//Display a question
function displayQuestion(index) {
    questionContainerEl.innerHTML = question[index].question + '<br>';
    for (let i = 0; i < question[index].options.length; i++) {
        questionContainerEl.innerHTML += `<input type="radio" name="answer" value="${questions[index].options[i]}"> ${questions[index].options[i]}<br>`;
    }
    questionContainerEl.innerHTML += '<button onclick="checkAnswer()">Submit Answer</button>';
};

//Check the user's answer
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const correctAnswer = questions[questionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }

        questionIndex++;

        if (questionIndex < questions.length) {
            displayQuestion(questionIndex);
        } else {
            displayScore();
        }
    } else {
        alert('Please select an answer.');
    }
};
// Display the user's score
function displayScore() {
    clearInterval(timer);
    questionContainerEl.innerHTML = 'Quiz completed! Your score is: ' + correctAnswers + ' out of ' + questions.length;
    scoreEl.innerHTML = 'Your score: ' + correctAnswers + ' out of ' + questions.length;
    attempts++;

    if (attempts < maxAttempts) {
        questionContainerEl.innerHTML += '<br><button onclick="restartQuiz()">Restart Quiz</button>';
    } else {
        questionContainerEl.innerHTML += '<br>Maximum attempts reached. Thank you for playing!';
    }
}

// Restart the quiz for a new attempt
function restartQuiz() {
    questionIndex = 0;
    correctAnswers = 0;
    displayQuestion(questionIndex);
    countdown();
}

// Start the quiz
function startQuiz() {
    getuserName();
    displayQuestion(questionIndex);
    countdown();
}
