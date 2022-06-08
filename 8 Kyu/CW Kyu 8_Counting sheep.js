/*  DESCRIPTION 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
#ARRAYS #FUNDAMENTALS 
*/


// SOLUTION (S)==================

// 1.
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }


// 2.
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }



// 3.
function countSheeps(arr) {
    return arr.filter(Boolean).length;
  }


// 4.
function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
  }  

// 5.
function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
  }


// 6.
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce(function(result, current) {
      if (current) result++;
      return result;
    }, 0);
  }


// 7.
function countSheeps(arrayOfSheep) {
    var num = 0;
    for(i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) {
        num += 1;
      }
    }
    return num;
  }

