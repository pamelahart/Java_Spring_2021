const myMovieArr = ['Star Wars', 'The Italian Job', 'Iron Man', 'The Avengers', 'Raiders of the Lost Ark'];
const myMovieQuiz = window.prompt('What is your favorite movie');
myMovieArr.push(myMovieQuiz); // add item to end

console.log(myMovieArr);
console.log(myMovieQuiz);
console.log(myMovieArr.toString());


//Step:
//create an array with the title of your favorite movie titles 
//prompt the user to enter their favorite movie.Use the prompt() method to do this.
//add the movie to the array using push or create a new array with concat
//display full list of movies with toString() method
//Update your github repo with this exercise and then upload your exercise to your MCAD hosting and share a link to that url in this discussion.Ensure that URL is accessible.

//myArr.pop(); //removes last item
//myArr.shift(); //removes first item
//myArr.unshift(); //adds to the beginning of item


//const firstQuestion = prompt(myArr[0].question);
//if(firstQuestion == myArr[0].answer) {
 //   alert('That is absolutely correct');
//} else {
  //  alert('No that is not correct');
 //if(firstQuestion == myMovies[0].answer) {
 
//const randomIdx = Math.round(Math.random() * myMovies.length - 1);
//const userResponse = window.prompt(myMovies[randomIdx].question);