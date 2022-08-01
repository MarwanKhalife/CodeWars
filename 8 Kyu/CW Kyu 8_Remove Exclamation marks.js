/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

// SOLUTIONS ============================================

function removeExclamationMarks(s) {
    let ss = s.replace(/!/g, '');
    return ss;
}

// OR

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}


// OR

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

// OR

function removeExclamationMarks(s) {
    var arr =s.split("");
    arr = arr.filter(function(e){
          return e !== "!";
      })
      return arr.join("");
}


function removeExclamationMarks(s) {
    var result = "";
    var arrStr = s.split("");
    for (var i = 0; i < arrStr.length; i++) {
      if (arrStr[i] == "!") {
        arrStr[i] = '';
      }
    }
    for (var j = 0; j < arrStr.length; j++) {
      result += arrStr[j];
    }
    return result;
  }
  