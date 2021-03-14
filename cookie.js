let vm = new Vue({
    el: "#myCookieApp",
    data: {
        cookies: [
        {
            image: 'cookie6.jpg',
            name: 'Spice',
            time: '1.5 hours',
            yields: '30',
            recipe: 'https://www.bettycrocker.com/recipes/mexican-spice-cookies/f0d0b866-d094-4ce7-9d0a-e41e911e8db6',
            }, {
                image: 'cookie3.jpg',
                name: 'Peanut Butter',
                time: '1 hour',
                yields: '36',
                recipe: 'https://www.bettycrocker.com/recipes/classic-peanut-butter-blossom-cookies/a3563f6e-96b0-443f-ae0a-53cef4be6db6',
            }, {
                image: 'cookie4.jpg',
                name: 'Macroon',
                time: '1.5 hours',
                yields: '48',
                recipe: 'https://www.bettycrocker.com/recipes/french-macarons-with-bittersweet-chocolate-ganache/01eb4eb4-afda-41ff-b38e-34440efd6bf1',
            }, {
                image: 'cookie2.jpg',
                name: 'Ginger',
                time: '1.45 hours',
                yields: '20',
                recipe: 'https://www.bettycrocker.com/recipes/spicy-ginger-cookies/662e8cf4-9a77-45ae-a682-8c9fbd10ad7d',
            }, {
                image: 'cookie5.jpg',
                name: 'Double Chocolate',
                time: '1.5 hours',
                yields: '48',
                recipe: 'double chocolate https://www.bettycrocker.com/recipes/double-chocolate-pudding-cookies/1cbe9bf1-307b-4aae-96e7-b2c7be4087a1',
            }
        ]}
    })



// Things to Do:
/* 
1. My images for the cookies are aligned atop one another. I know this must be happening due to naming- I've included a chocolate chip cookie as part of the background and I think its picking up that- 
Trying to create a proper class of the big cookie. Not having luck searching W3 schools to find the proper answer


What are mustaches???? same as curly brackets? why are they now called this? */
/* function setup() {
    createCanvas(1000, 1000); // make smaller

    background('#ffffcc');
/*     fill('#141b30'); */
/* draw() */

/* back to basics:
String = zero or more characters written inside quotes.
Array = used to store multiple values in a single variable.
var x, y, z;       // Declare Variables
x = 5; y = 6;      // Assign Values
z = x + y;         // Compute Values
*/
