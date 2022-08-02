/* Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */

// SOLUTIONS ============================================

function stringToArray(string){
    return string.split(' ');
}

// .split returns an array of items depending on the split sparator " " space in this example, if the split is not defined '', then the entire string will be terurned.

// OR 

const stringToArray = string => string.split(' ');

// OR

function stringToArray(string){
    var result = [];
    var traverse = function foo(string){
        for(var i=0;i<string.length;i++){
            var chr = string.charAt(i);
            if(chr === " "){
                result.push(string.slice(0,i));
                foo(string.slice(i+1));
                return;
            }
        }
        result.push(string);
    };
    traverse(string);
    return result;
}
