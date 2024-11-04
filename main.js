/*Exercise Wednesday 23th octh

function isValidPassword(password, username) {
  
    if (password.length < 8){
        return false;
    }
    if (password.includes (' ')) {
         return false;
    }
    if (password === username) {
        return false;
    } else {
        return true;
    }

}

console.log(isValidPassword("alejandro", "alejandro"));
console.log(isValidPassword("pass word", "Maria"));
console.log(isValidPassword("124", "Maria"));
console.log(isValidPassword("12345678", "Lorena"));

*/


//Exercise Monday nov. 4th

/*// EXERCISE 1: Guess the random number 

Create a function guessNumberGame that generates a random number between 1 and 10. 

The function should repeatedly prompt the user to guess the number until the correct number is guessed. 

Use a while loop to keep asking the user for input until they guess correctly.  

Provide feedback if the guess is too high or too low. 

 

 

// EXERCISE 2: Create an array of random numbers 

Create a function generateRandomArray that accepts one argument: length (the length of the array). 

Inside the function, use a for loop to generate an array of random numbers between 1 and 100. 

Return the array from the function. 

 

 

// EXERCISE 3: Calculate the sum of even numbers in the array 

Create a function sumEvenNumbers that accepts an array as an argument. 

Use a for loop to iterate through the array*/




//Guess the Number

/*function guessNumberGame() {

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = false;
  
    while (guess !== randomNumber) {
      guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
  
      if (isNaN(guess)) {
        alert("Please enter a valid number.");
        continue;
      }

      if (guess < randomNumber) {
        alert("The number is too low! Try again.");
      } else if (guess > randomNumber) {
        alert("The number is too high! Try again.");
      } else {
        alert("Congratulations! You guessed the correct number: " + randomNumber);
      }
    }
}

guessNumberGame();
*/


//Generate an array of random numbers

function generateRandomArray(length) {

  let randomArray = [];

  for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      
      randomArray.push(randomNumber);
  }

  return randomArray;
}

console.log(generateRandomArray(8));
console.log(generateRandomArray(5));
console.log(generateRandomArray(12));

