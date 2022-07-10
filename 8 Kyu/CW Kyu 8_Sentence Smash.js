// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// SOLUTIONS ================================================

function smash (words) {
    let sentence = words.join(' ')
    return sentence
 };

// OR 

smash = function (words) {
    return words.join(" ");
  };

// OR

const smash = words => words.join(' ');

// OR

function smash (words) {
    "use strict";
    var smashed = '';
    for(var i = 0; i<words.length; i++) {
      smashed += words[i];
      if(i!=words.length-1) {
        smashed += ' ';
      }
    }
    return smashed;
};

// OR

function smash (words) {
    "use strict";
    return words.join(" ").trim();    
};

