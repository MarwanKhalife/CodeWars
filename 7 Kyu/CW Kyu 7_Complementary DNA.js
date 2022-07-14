/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

// SOLUTIONS ========================================================

function DNAStrand(dna){
    let completedDna = "";                  // SET EMTPY VARIABLE
    for (i = 0; i < dna.length; i++) {      // setup iteration
      if (dna[i] == "") {                   // check that the input is not empty
        return "No DNA found"               
      } else if (dna[i] == "A") {           // check comp letters and add to var
        completedDna += "T";
      } else if (dna[i] == "T") {
        completedDna += "A";
      } else if (dna[i] == "C") {
        completedDna += "G";
      } else if (dna[i] == "G") {
        completedDna += "C";
      }
    }
    return completedDna;
  }

  // OR

  function DNAStrand(dna) {
    return dna.replace(/./g, function(c) { 
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  // OR

  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna
        .split('')
        .map(function(v){ return pairs[v] })
        .join('');
}

// OR

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

// OR

function DNAStrand(dna){
    let res="";
    for(i=0; i < dna.length; i++) {
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }
    }
    return res;
}

// OR

function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}

// OR

function DNAStrand(dna){
    var table = {
      C : 'G',
      G : 'C',
      A : 'T',
      T : 'A'
    };
      
    return dna.split('').map(function(cv) {
      return table[cv]; 
    }).join('');
}

// OR

function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}

// OR

const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);

// OR

function DNAStrand(dna){
    return dna.replace(/[ACGT]/g, function(l){ return pairs[l] });
}
  
  var pairs = {
    A:'T',
    T:'A',
    G:'C',
    C:'G'
};