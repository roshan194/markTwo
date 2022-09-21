var readlineSync = require('readline-sync');

var score = 0;
var highScores = [
  {
    name: "Arvind",
    score: 3
  },
  {
    name: "Tanay",
    score: 3
  }
];

var userName = readlineSync.question("Enter your name: ");
console.log("Welcome "+userName+" to DO YOU KNOW Roshan?");
//Exercise 12 to 15
var questions = [
  questionOne = {
  question: "What's my aim?",
  answer: "tech"
},
questionTwo = {
  question: "What's my experience?",
  answer: "zero"
},
questionThree = {
  question: "What's my favorite food?",
  answer: "burger"
},
questionFour = {
  question: "What's my favorite habit?",
  answer: "reading"
}
]

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("right");
    score++;
  }else{
    console.log("wrong");
    score--;
  }
  console.log("Your current score is "+score);
  console.log("==================");
}

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  var currentUserScore = score;
}

console.log("Your final score is "+score);
console.log("Check out the high scores: ");

for(var i=0; i<highScores.length; i++){
  var current = highScores[i];
  console.log(current.name+" : "+current.score)
}