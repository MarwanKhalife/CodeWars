// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer

// SOLUTIONS =====================================================

function squareDigits(num){
    let numSequared = num.toString().split('').map( function(int) {
      let i = parseInt(int);
      return i * i;
      })
    
    return parseInt(numSequared.join(""));
  }

// OR

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}

  // OR

function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
}

// OR

  function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

// OR

