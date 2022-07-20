

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// ++++ Solution approach: 
// Step 1: check if the perfect square root of the given number (sq) in this case, is available. 
// Step 2: if yes, then simply get the square of  (sq)+1. 
// Step 3: if no, return false (-1). 

// SOLUTIONS ===============================================

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let square = Math.sqrt(sq);
    if (Number.isInteger(Math.sqrt(sq))) {
      return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1);
    } else {
      return -1;
    }
  }


// OR

function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }

// OR

function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }
    return -1;
  }

// OR

function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
  }

// OR

function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
      return Math.pow(root + 1, 2);
    } else {
      return -1;
    }
  }

// OR

function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
}


