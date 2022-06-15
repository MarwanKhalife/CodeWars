// Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// SOLUTIONS =============================

function getGrade (s1, s2, s3) {
    let sum = (s1 + s2 + s3) / 3;
     if ( sum >= 90){
      return "A";
     }
     else if (sum >= 80){
     return "B";
     }
     else if (sum >=70){
     return "C";
     }
     else if (sum >=60){
     return "D";
     }
     else {
     return "F";
     }
   }

// OR

function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }

// OR

function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
  }


// OR

function getGrade(...scores) {
    let average = scores.reduce((a, b) => a + b) / scores.length
    
    if (average >= 90) return 'A'
    else if (average >= 80) return 'B'
    else if (average >= 70) return 'C'
    else if (average >= 60) return 'D'
    else return 'F'
  }

// OR

function getGrade (s1, s2, s3) {
    let meanScore = (s1 + s2 + s3)/3;
    if( meanScore >= 90 && meanScore <= 100){
      return 'A';
    } else if( meanScore >= 80 && meanScore < 90) {
      return 'B'
     } else if( meanScore >= 70 && meanScore < 80) {
      return 'C'
     } else if( meanScore >= 60 && meanScore < 70) {
      return 'D'
     } else {
      return 'F'
    }
  }

// OR

function getGrade (s1, s2, s3) {
    var avg = (s1 + s2 + s3)/3;
    switch(true) {
      case (avg >= 90):
        return 'A';
      case ( avg >= 80):
        return 'B';
      case ( avg >= 70):
        return 'C';
      case ( avg >= 60):
        return 'D'; 
      default:
        return 'F';   
    }
   }

// OR

const grades = { A: 90, B: 80, C: 70, D: 60, F: 0 };
const sum    = (sum, item)  => sum + item;
const mean   = (...numbers) => numbers.reduce(sum, 0) / numbers.length;

function getGrade () {
  const score = mean(...arguments);
  
  for (key in grades) {
    if (!grades.hasOwnProperty(key)) continue; // Never do a for-in without this
    if (score >= grades[key]) return key; 
  }
}

// OR

const getGrade = (s1, s2, s3) =>
  (val => val < 60 ? `F` : val < 70 ? `D` : val < 80 ? `C` : val < 90 ? `B` : `A`)
  ((s1 + s2 + s3) / 3);

// OR

function getGrade (s1, s2, s3) {
    avg = (s1 + s2 + s3) / 3;
    if(avg <60) return 'F';
    if(avg <70) return 'D';
    if(avg < 80) return 'C';
    if(avg <90) return 'B';
    return 'A';
  }

// OR

function getGrade (s1, s2, s3) {
    const avg = (s1+s2+s3)/3;
    return [
      [90, 'A'],
      [80, 'B'],
      [70, 'C'],
      [60, 'D'],
      [00, 'F']
    ].find(grades => {
      return grades[0] <= avg
    })[1]
  }