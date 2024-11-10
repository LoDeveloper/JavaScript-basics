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

/*function generateRandomArray(length) {

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
*/

/* Instructions: 

BANK ACCOUNT 

 

REQUIREMENTS 

Create an object called account that has the following properties: 

accountName, should be the data type string 

This property should contain the name of the account holder 

 

- balance, should be the data type number 

this property should contain the total amount of the account 

 

 - getBalance, should be a function 

this function should display the total amount of the account to the user 

 

 - deposit, also a function 

 this function should be able to deposit money onto the balance of the account 

 

 - withdrawal, also a function 

 this function should be able do withdrawal money from the balance of the account 

 

 - getAccountName, function as well 

 this function should dispaly the account holders name to the user 

 

 - accountError, same as above function! 

 this one is a bit tricky... it's up to you to figure out how or what you should use this for. 

 HINT: it's more a thinking poblem than a technical problem :) 

 

EXTRA: exitAccount, should be a function 

 this function should exit the account 

 HINT: there are a few different ways to do this, it's up to you which way you choose. 

 

 EXTRA = OPTIONAL NOT MANDATORY 

 

 Remember that a function is just a value. And if a function is just a 

 value then we can both pass it as a parameter to a function and 

 pass it as a property of an object. 

 

 The object should handle all of the functionality (logic) 

 

 The atm() function should be responsible for showing the user interface 

 and based on the user input show the right meny choice */



 const account = {
    accountName: "Lorena Ojeda",
    balance: 1000,

    getBalance: function() {
        console.log(`Your balance is: $${this.balance}`);
    },

    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            this.accountError("Invalid deposit amount. Please enter again.");
        }
    },

    withdrawal: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else if (amount > this.balance) {
            this.accountError("Insufficient balance for withdrawal.");
        } else {
            this.accountError("Invalid withdrawal amount. Please enter again.");
        }
    },

    getAccountName: function() {
        console.log(`Account Holder: ${this.accountName}`);
    },

    accountError: function(message) {
        console.log(`Error: ${message}`);
    },

    exitAccount: function() {
        console.log("Exiting the account...");
        this.accountName = null;
        this.balance = 0;
    }
};

function atm() {
    let message;

    do {
        message = parseFloat(prompt("Select a choice: 1. View Balance 2. Make a deposit 3. Withdraw 4. View Account Name 5. Exit Account 6. Quit"));

        switch (message) {
            case 1:
                account.getBalance();
                break;
            case 2:
                const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                account.deposit(depositAmount);
                break;
            case 3:
                const withdrawalAmount = parseFloat(prompt("Enter amount to withdraw:"));
                account.withdrawal(withdrawalAmount);
                break;
            case 4:
                account.getAccountName();
                break;
            case 5:
                account.exitAccount();
                console.log("Account exited.");
                break;
            case 6:
                console.log("Thank you for using our ATM!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (message !== 6);
}

atm();
