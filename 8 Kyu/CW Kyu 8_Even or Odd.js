/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

// SOLUTIONS ======================================

function even_or_odd(number) {
    if (number % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
}


// OR


function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}


// OR


function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}


// OR


const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';


// OR

function even_or_odd(number) {
    if (number % 2 === 0)
      return "Even"
    else
      return "Odd"
}


// OR


var even_or_odd = n => n & 1 ? 'Odd' : 'Even'
/* (n & 1) will check if 'n' is odd or even, this is similar to (n % 2).

In case 'n' is odd (n & 1) will return true/1;
Else it will return back false/0; 
 */