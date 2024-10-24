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

const target = Math.floor(Math.random () * 10);
let guess = null;

console.log(target);
