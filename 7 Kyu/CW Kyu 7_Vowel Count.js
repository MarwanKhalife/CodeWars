// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// SOLUTIONS ===================================

function getCount(str) {
    let count = 0
    
   for (i = 0; i < str.length; i++) {
     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
     count ++
   }
    
   return count
    
}

// OR

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
}

// OR

function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
}

// OR

function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;  
}

// OR

function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
  }


// OR


function getCount(str) {
  let vowels = ['a','e','i','o','u'];
  return str.split('').filter(letter => {
    return vowels.includes(letter)? true : false;
  }).length;
}

// OR

function getCount(str) {
  var vowelsCount = 0;
  var vowels = 'aeiou';
  return str.split("").reduce((acc,char, indx ) => {
      if (vowels.indexOf (char) > -1) {
        acc++
      }
      return acc
  }, 0)
  
}

// OR

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsCount = 0;
    
    // enter your majic here
    for (let i of str) {
      if (vowels.includes(i)) vowelsCount++;
    }
    
    return vowelsCount;
}

// OR

function getCount(str) {
    var vowelsCount = 0;
    
    vowels = 'aeiou'
    for (var i=0; i<str.length; i++) {
    if (vowels.indexOf(str[i]) != -1){
    vowelsCount++;
    }
    }
    return vowelsCount;
}

// OR

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

