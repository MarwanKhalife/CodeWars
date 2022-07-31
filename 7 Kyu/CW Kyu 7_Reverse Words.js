/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

// SOLUTIONS =========================================

function reverseWords(str) {
    //split words into seperate arrays
    return str
            .split("")
            .reverse()
            .join("")
            .split(" ")
            .reverse()
            .join(" ");
  }

// OR

function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}


  // OR

function reverseWords(str) {
let reversedWord = '';
let reversedStr = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
    reversedWord = str[i] + reversedWord;
    } else {
    reversedStr += reversedWord + ' ';
    reversedWord = '';
    }
}
return reversedStr + reversedWord;
}


  // OR


var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)


  // OR


function reverseWords(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    
    return newStr.split(" ").reverse().join(" ");
}


  // OR

function reverseWords(str) {
    var result = [];

      str.split(" ").forEach((e) => {
        result.push(e.split("").reverse().join(""));
      })
      
      return result.join(" ");
}