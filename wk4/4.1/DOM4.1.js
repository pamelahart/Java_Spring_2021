const myEmptyDiv = document.querySelector("#myEmptyDiv");
const heading = document.createElement('h1');
heading.innerHTML = 'Hello Llama Lovers!';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick() {
  console.log('Heading has been clicked');
  document.body.style.backgroundColor = '#e28f8f';
}

//function setup() {
//  createCanvas(600, 600);
 // background(0);

//}

//Exercise 4.1
//Create a new html document.Place an empty div with an id of "myEmptyDiv" inside the body tag.Use DOM selectors to:

//Create a new headline element(h1 through h5 would work just fine).The text can be anything about llamas.
//Append the new headline element to "myEmptyDiv".
//And an event listener to your headline to change the background color of the whole window when the headline is clicked.
//<script src="https://cdn.jsdelivr.net/npm/p5"></script><script src="https://cdn.jsdelivr.net/npm/p5"></script>