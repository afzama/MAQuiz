//variables & objects
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('quiz');
var totalTime = 45;
var userName = document.getElementById('username');
var saveBtn = document.getElementById('btn');
var endQuestion = document.getElementById('end-question');
var highScores = document.querySelector('nav');
var quizSection = document.querySelector('quiz');
var gameStart = document.getElementById('startbox');
var results = [];
var questionDiv = {
    userName: ``,
    highScores: ``,
};

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