"use strict"


// function countdown(num) {
//    const counter = setInterval(function () {
//         num--;
//         console.log(num);
//         if (num === 0) {
//             console.log("DONE!")
//             clearInterval(counter);
//         }
//     }, 1000)
// }
// countdown(20);


function randomGame() {
    let counter = 0;
    const timer = setInterval(function () {
    // Select random number between 0 and 1 every 1000 milliseconds
        const randomNumber = Math.random();
        console.log(randomNumber)
        counter++;
        if (randomNumber > 0.75) {
            clearInterval(timer);
            console.log(`The number of tries it took before we found a number greater than .75 is ->`, counter);
        }
        
    }, 1000)
}
randomGame();