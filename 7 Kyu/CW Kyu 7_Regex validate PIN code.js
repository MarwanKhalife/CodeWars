/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

// SOLUTIONS =========================================
//This solution is explained below the code block
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}


/* SOLUTION EXPLAINATION ++++++++++++++++++++++++++ 
use quantifiers to match exactly either accepted value lengths (4 and 6) and that each value is equal to the numbers 0 through 9.

4 numbers: [0-9]{4}
6 numbers: [0-9]{6}

Additionally, we want these regexes to actually match the entire string, using ^ at the start, and $ at the end of the regex. This will make sure nothing exists next to a matched pin code.
If we combine the 2 cases above in a capture group, and add the start- and end-delimiters, we end up with this regex:

/^([0-9]{4}|[0-9]{6})$/

Note: the [0-9] character set has a nice shorthand: \d, so the regex could be further simplified to:

/^(\d{4}|\d{6})$/ */

// Other solutions

function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }

// OR

function validatePIN (pin) {
    //return true or false
    var n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
  }

// OR

function validatePIN (pin) {
    var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
    return reg.test(pin);
  }


