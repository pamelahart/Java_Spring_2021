const myQuiz = [
 {question: 'what is your favorite cookie', answer: 'chocolate chip'},
 {question: 'what is the best burger', answer: 'juicy lucy'},
 {question: 'what is the best chinese menu item', answer: 'fried rice'},
 {question: 'what is your favorite cake', answer: 'carrot'},
];
const firstQuestion = prompt(myQuiz[0].question);
if(firstQuestion == myQuiz[0].answer) {
    alert('that is absolutely correct');
} else {
    alert('no that is not correct at all');
}   