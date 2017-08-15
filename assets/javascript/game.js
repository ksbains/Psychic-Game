$(document).ready(function() {
var wins = 0;
var losses = 0;
var gLeft = 9;
var n = Math.floor(Math.random(26));
var guesses = [];

var victories = document.getElementById("wins");
console.log("victories",document);
victories.innerHTML = "Wins: " + wins;

var defeats = document.getElementById("loss");
defeats.innerHTML = "Losses: " + losses;

var remainGuesses = document.getElementById("gLeft");
remainGuesses.innerHTML = "Guesses Left: " + gLeft;

var userGuesses = document.getElementById("guesses");
userGuesses.innerHTML = "Your Guesses so far: " + guesses;


document.onkeyup = function(event) {
        
        // this code will choose a random number from 0-26
        
        
        // this line of code will take the random number and then convert it to a character
        var letter = String.fromCharCode(97 + n);
        console.log("the letter is" + letter);
        // Captures the key pressed by the user, converts it to lowercase, and saves it to a variable.
        var response = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("the response is" + response);
        // if the letter randomly choosen is the same the user selects
        if (letter === response) {
          // increase the wins by 1
          wins++;
          // reset the guesses left
          gLeft = 9;
          // reset the guesses array
          guesses = [];
          // reset the number for new letter
          n = Math.floor(Math.random(26));
          // console log for maintence
          console.log("the letter is === response");
        }

        else{
          // console log for maintence
          console.log("the letter is !== response");
          // decrement the guesses left
          gLeft--;
          //if no more guesses left
          if(gLeft === 0){
            console.log("there are no more guesses left");
            // increment losses
            losses++;
            // reset
            // reset the guesses left
            gLeft = 9;
            // reset the guesses array
            guesses = [];
          }
          else{
            console.log("guesses remaining: " + gLeft);
            guesses.push(response);
            console.log(guesses);
          }
        }

          victories.innerHTML = "Wins: " + wins;
          defeats.innerHTML = "Losses: " + losses;
          remainGuesses.innerHTML = "Guesses Left: " + gLeft;
          userGuesses.innerHTML = "Your Guesses so far: " + guesses;
      };
});