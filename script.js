//variables & objects
var timerEl = document.getElementById('countdown');
var userNameEL = document.getElementById('username');
var totalTime = 45;
var scoreEl = document.getElementById('score');
var questionContainerEl = document.getElementById('question-container');
var questionIndex = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var maxAttempts = 3;
var attempts = 0;
let currentQuestion = 0;
let score = 0;
let timer; // Timer variable
let userName; //User information

//set timer & disable when time up
function countdown() {
    let timeLeft = totalTime;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerText = 'Time\'s up!';
            endQuiz();
            disableOptions();
        } else {
            document.getElementById('countdown').innerText = 'Time left:' + timeLeft + 'seconds';
            timeLeft--;
        }
    }, 1000);
}

function disableOptions() {
    const options = document.querySelectorAll('#game-options-container button');
    options.forEach(option => {
        option.disabled = true;  // Disable the option buttons
    });
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerText = 'Time\'s up!';
        endQuiz();
        disableOptions();  // Disable options when time's up
    }
}

//User Information
function startQuiz() {
    userName = document.getElementById('username').value;
    if (!userName) {
        alert('Please enter your name before starting the quiz.');
        return;
    }
    document.getElementById('username-display').innerText = 'Your Name: ' + userName;
    showQuestion(currentQuestion);
    countdown(); // Start the timer when quiz starts
}

// Display a question
let questions = [
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
        options: ['Coffee Shops', 'Museums', 'Canals', 'Night Clubs'],
        correctAnswer: 'Museums',
    }
];
function showQuestion(questionIndex) {
    const questionContainer = document.getElementById('display-question');
    const currentQuestion = questions[questionIndex];

    if (currentQuestion) {
        questionContainer.innerText = currentQuestion.question;
        const optionsContainer = document.getElementById('game-options-container');
        optionsContainer.innerHTML = '';  // Clear previous options

        // Create buttons for each option
        currentQuestion.options.forEach((option) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.onclick = function () {
                checkAnswer(option, currentQuestion.correctAnswer);
            };
            optionsContainer.appendChild(button);
        });
    }
}


//Check the user's answer
function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    } else {
        wrongAnswers++;  // Increment wrong answers counter
    }
    currentQuestion++;
    // Show the next question or end the quiz
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        endQuiz();
    }
}

// Display the user's score
function endQuiz() {
    clearInterval(timer);
    const modal = document.getElementById('score-modal');
    if (!modal) {
        console.error("Element with ID 'score-modal' not found.");
        return;
    }
    modal.style.display = 'block';
    document.getElementById('right-answers').innerText = score;
    document.getElementById('wrong-answers').innerText = wrongAnswers;  // Display wrong answers
    document.getElementById('player-score').innerText = score + '/5';
}
// Display reattempt option
const reattemptButton = document.createElement('button');
reattemptButton.innerText = 'Reattempt Quiz';
reattemptButton.onclick = function () {
    modal.style.display = 'none';
    currentQuestion = 0;
    score = 0;
    startQuiz();  // Restart the quiz
};
document.getElementById('player-score').appendChild(reattemptButton);
// Add function to reset the quiz
function reattemptQuiz() {
    modal.style.display = 'none';
    currentQuestion = 0;
    score = 0;
    wrongAnswers = 0;  // Reset wrong answers count
    startQuiz();
}