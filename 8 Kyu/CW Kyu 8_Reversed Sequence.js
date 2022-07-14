/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
 */


// SOLUTIONS =========================================

const reverseSeq = n => {
    let arr = [];
    for (i = n; i >= 1; i--) {
      arr.push(i);
    }
    return arr;
};

// OR

const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};

// OR

const reverseSeq = n => {
    let answer = [];          //intialize an array
    
    for (let i=n; i>0; i--){  //loop down from n to 1
      answer.push(i);         //push each i to the answer array
    }
    
    return answer;            //return answer;
};

// OR

const reverseSeq = num => {
    return new Array(num)
        .fill()
        .map((d, i) => i + 1)
        .reverse()
};

// OR

const reverseSeq = n => {
    return Array.from({length:n},(_,i)=>n-i);
};

// OR

const reverseSeq = n => {
    let arr = [];
  
    while(n > 0) {
      arr.push(n);
      n--;
    }
    return arr;
};


