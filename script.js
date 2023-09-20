//variables & objects
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('quiz');
var totalTime = 45;
var userNameEL = document.getElementById('username');
var saveBtn = document.getElementById('btn');
var endQuestion = document.getElementById('end-question');
var highScores = document.querySelector('nav');
var quizSection = document.querySelector('quiz');

var results = [];
var questionDiv = {
    userName: ``,
    highScores: ``,
};
var currentQ = 0;

//set timer
let timer;
function countdown() {
    let timeLeft = totalTime;
    timerEl = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerEl);
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
    countdown()
}
function getuserName() {
    UserName = userNameEL.value;
    console.log(userName);
}

//quiz section
let question = [
    {
        question: 'What is the capital of Netherlands?',
        options: ['Amsterdam', 'Leiden', 'Rotterdam', 'Den Haag'],
        answer: 'Amsterdam',
    },
    {
        question: 'What sports are the dutch best known for?',
        options: ['Biking', 'Swimming', 'Hockey', 'Dancing'],
        answer: 'Swimming',
    },
    {
        question: 'Which of the following is not a dutch artist?',
        options: ['Picasso', 'Van Gogh', 'Rembrandt', 'Vermeer'],
        answer: 'Picasso',
    },
    {
        question: 'Which of the following is not a drink from holland?',
        options: ['Heineken', 'Grolsch', 'Belgian Moon', 'Amstel'],
        answer: 'Belgian Moon',
    },
    {
        question: 'Fill in the blank. Amsterdam is known for having the most ____ in closest square footage.',
        options: ['Coffee Shops', 'Museums', 'Canals', 'Nigh Clubs'],
        answer: 'Museums',
    }
]
let currQuestion = 0
let score = 0
//Load first Question
function loadQuestion() {
    document.querySelector("game h1").textContent(questions)
};


