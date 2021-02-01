const myQuiz = [
 {question: 'what is your favorite cookie', answer: 'chocolate chip'},
 {question: 'what is the best burger', answer: 'juicy lucy'},
 {question: 'what is the best chinese menu item', answer: 'fried rice'},
 {question: 'what is your favorite cake', answer: 'carrot'},
];
const firstQuestion = prompt(myQuiz[0].question);
if(firstQuestion == myQuiz[0].answer) {
    alert('That is absolutely correct');
} else {
    alert('No that is not correct');
const randomIdx = Math.round(Math.random() * quiz.length - 1);
const userQuestion = window.prompt(quizrandomIdx.question);
window.alert('answered ' + userQuestion + '. answer' + quiz[randomIdx].answer + '! Refresh to try again.');
}  
