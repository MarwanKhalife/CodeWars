Description:

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


//Solution 1

//Let's start with loop solutions.

var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}


//Solution 2

//Let's solve it with Gauss Formula.

var summation = function (num) {
    return num * (num + 1) / 2
}

//OR shorter:
const summation = n => n * (n + 1) / 2;


//Solution 3

//Let's solve it with reduce().

var summation = function (num) {
    return Array(num).fill(0).reduce((acc, _, index) => acc + index + 1, 0)
}


//Solution 4

//Let's solve it with recursion.

var summation = function (num) {
    return num ? num + summation(num - 1) : num
}

