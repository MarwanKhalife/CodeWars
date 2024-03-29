/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */

// SOLUTIONS =============================================

/* The toString() function is quite familiar for converting a number to a string. But, we can use it to convert a number to its binary format too. Usually, it is used with the Number object to convert the number to binary format. The toString(2) function of javascript, when used on a number object, returns the binary equivalent of the numeric value, as depicted in the examples below. The method takes the radix value as input. Hence, we can use it to convert a given number to other base systems (like the base of 16 (hexadecimal) and that of eight (Octal)).

(8).toString(2)
(25).toString(2)
(235).toString(2)
Output:

"1000"
"11001"
"11101011" */

function addBinary(a,b){
    return (a+b).toString(2)
  }

// OR

// The function convertToBinary1 consoles the binary equivalent of a decimal number passed as a parameter. Note that we read the result backward. Hence the code has been created considering all the afore-said factors in mind.

// Using Iteration
function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    console.log(binary);
}

window.onload = function () {
    console.log(convertToBinary1(25));
    console.log(convertToBinary1(8));
}

// Output:

// 11001
// 1000

/* STEPS OF THE SOLUTION
1. Make a copy of the parameter passed to the function and store it in a temporary variable num.

2. Create a variable to store the binary bits. It essentially is of type string to make handling easier.

3. Start the iteration for generating the binary bits and let it continue till the number is no more divisible by 2.

In each iteration, we divide the number by 2 to get the quotient. We calculate the modulous of the quotient. This step generates the binary bits as modulous of a number with 2 generates the binary bits 0 or 1.

4. Append the binary bit generated by the modulous value to the binary variable that holds the binary bits generated in each iteration.

5. Once the number is no more divisible by 2 (checked with condition (num / 2) > 1), the iteration stops.

6. In the final step, we log the result to the console. And hence we get the binary equivalent for the decimal number passed as a parameter to this function. */


// OR

/* We can use the recursion method to convert the decimal bit into binary. This approach requires fewer lines of code but more thinking. The recursion stops when the number is no more divisible by 2, and it keeps calling itself until it reaches the breakout condition. Recursions are elegant but consume more memory for the function call stack than for the simple iteration approach. */

function convertToBinary (number, bin) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

window.onload = function () {
    console.log(convertToBinary(25));
    console.log(convertToBinary(8));
}

// Output:

// 11001
// 1000



// OR


function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
  }

