// Intermediate Algorithm Challenges



// ********** CHALLENGE 1 - SUM ALL NUMBERS IN A RANGE**********
function sumAll(arr) {
  
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var val = 0;

  for(var i = min; i <= max; i++){
    val += i;
  }
  //console.log(val);
  return val;

}

sumAll([4, 1]);



// ********** CHALLENGE 2 - DIFF TWO ARRAYS **********
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  var smallerArr;
  var biggerArr;
  var a;

  if(arr1.length > arr2.length){
  	smallerArr = arr2;
  	biggerArr = arr1;
  } else{
  	smallerArr = arr1;
  	biggerArr = arr2;
  }

  if(arr1.length == arr2.length){
  	for(a = 0; a < biggerArr.length; a++){

	  	if(smallerArr.indexOf(biggerArr[a]) == -1) {
	  		newArr.push(biggerArr[a]);
	  	}

	  	if(biggerArr.indexOf(smallerArr[a]) == -1) {
	  		newArr.push(smallerArr[a]);
	  	}

  	}
  }else {
  	for(a = 0; a < biggerArr.length; a++){

  		if(biggerArr.indexOf(smallerArr[a]) == -1 && smallerArr.indexOf(biggerArr[a]) == -1 && smallerArr[a] != undefined) {
	  		newArr.push(biggerArr[a]);
	  		newArr.push(smallerArr[a]);
	  	} else if(smallerArr.indexOf(biggerArr[a]) == -1) {
	  		newArr.push(biggerArr[a]);
	  	}

  	}
  }

  //console.log(newArr);
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);



// ********** CHALLENGE 3 - ROMAN NUMERAL CONVERTER**********

function convertToRoman(num) {

	var romanNumArr = [];
		
	num = ""+num+"";

	num = num.split("");
	
	var single = {
		1: "I",
		2: "II",
		3: "III",
		4: "IV",
		5: "V",
		6: "VI",
		7: "VII",
		8: "VIII",
		9: "IX"
	};

	var tens = {
		1: "X",
		2: "XX",
		3: "XXX",
		4: "XL",
		5: "L",
		6: "LX",
		7: "LXX",
		8: "LXXX",
		9: "XC"
	};

	var hundreds = {
		1: "C",
		2: "CC",
		3: "CCC",
		4: "CD",
		5: "D",
		6: "DC",
		7: "DCC",
		8: "DCCC",
		9: "CM"
	};

	var thousands = {
		1: "M",
		2: "MM",
		3: "MMM",
		4: "MMMM",
		5: "MMMMM",
		6: "MMMMMM",
		7: "MMMMMMM",
		8: "MMMMMMMM",
		9: "MMMMMMMMM"
	};

	switch(num.length){

		case 1: 
			romanNumArr.push(single[num]);
			break;

		case 2:
			romanNumArr.push(tens[num[0]]);
			romanNumArr.push(single[num[1]]);
			break;

		case 3:
			romanNumArr.push(hundreds[num[0]]);
			romanNumArr.push(tens[num[1]]);
			romanNumArr.push(single[num[2]]);
			break;

		case 3:
			romanNumArr.push(hundreds[num[0]]);
			romanNumArr.push(tens[num[1]]);
			romanNumArr.push(single[num[2]]);
			break;
		case 4:
			romanNumArr.push(thousands[num[0]]);
			romanNumArr.push(hundreds[num[1]]);
			romanNumArr.push(tens[num[2]]);
			romanNumArr.push(single[num[3]]);
			break;
	}

	var romanNumStr = romanNumArr.join("");
	// console.log(romanNumStr);
 	return romanNumStr;
}

convertToRoman(68);

// shortened version

 /* var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

*/



// ********** CHALLENGE 4 - WHEREFORE ART THOU **********
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}



//********** CHALLENGE 5 - SEARCH AND REPLACE **********
function myReplace(str, before, after) {

	before = before.split("");
	after = after.split("");

	if(before[0] == before[0].toLowerCase()){		
		var lowerCase = after[0].toLowerCase();
		after.shift();
		after.unshift(lowerCase);
	} else {
		var upperCase = after[0].toUpperCase();
		after.shift();
		after.unshift(upperCase);
	}

	before = before.join("");
	after = after.join("");

	var newStr = str.replace(before, after);

	return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");



// ********** CHALLENGE 6 - PIG LATIN **********
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    //console.log(vowelIndice);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    //console.log(str.substr(vowelIndice));
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");


// ********** CHALLENGE 7 - DNA PAIRING **********
function pairElement(str) {

	var elementPairs = [];
	var pair = [];

	str = str.split("");

	for(var a = 0; a < str.length; a++){

		switch(str[a]){

			case "G":
				pair.push("G");
				pair.push("C");
				elementPairs.push(pair);
				pair = [];
				break;

			case "C":
				pair.push("C");
				pair.push("G");
				elementPairs.push(pair);
				pair = [];
				break;				

			case "A":
				pair.push("A");
				pair.push("T");
				elementPairs.push(pair);
				pair = [];
				break;

			case "T":
				pair.push("T");
				pair.push("A");
				elementPairs.push(pair);
				pair = [];
				break;

		}

	}
	//console.log(elementPairs);



	return elementPairs;
}

pairElement("GCG");



//********** CHALLENGE 8 - MISSING LETTERS **********
function fearNotLetter(str) {

	str = str.split("");

	var missingChar;
	var nextChar;
	var currentChar;

	for(var a = 0; a < str.length; a++) {
		currentChar = str[a].charCodeAt();
		if(str[a + 1] !== undefined){
			nextChar = str[a + 1].charCodeAt();
		} else {
			missingChar = undefined;
			break;
		}
		if( nextChar !== currentChar + 1) {
			missingChar = String.fromCharCode(str[a].charCodeAt() + 1);
			break;
		}	
	}
	//console.log(missingChar);
	return missingChar;
}

fearNotLetter("abce");



//********** CHALLENGE 9 - BOO WHO **********
function booWho(bool) {
// What is the new fad diet for ghost developers? The Boolean.
	
	bool = typeof bool;

	if(bool === "boolean"){
		return true;
	}else{
		return false;
	}

}

booWho(false);



// ********** CHALLENGE 10 - SORTED UNION  ***********
function uniteUnique(arr) {

	var finalArr = [];

	for(var a = 0; a < arguments.length; a++) {
		for(var b = 0; b < arguments[a].length; b++) {
			var currentNum = arguments[a][b];
			if(finalArr.length == 0){
				finalArr.push(currentNum);
			} else {
				for(var c = 0; c < finalArr.length; c++) {
					if(currentNum == finalArr[c]){
						break;
					}
					if(c === finalArr.length - 1 && currentNum !== finalArr[c]){
						finalArr.push(currentNum);
					}
				}
			}
		}
	}
	//console.log(finalArr);
	return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



// ********** CHALLENGE 11 - CONVERT HTML ENTITIES ************
function convertHTML(str) {
  // &colon;&rpar;

 	str = String(str)
  	.replace(/&/g, '&amp;')
  	.replace(/</g, '&lt;')
  	.replace(/>/g, '&gt;')
  	.replace(/"/g, '&quot;')
  	.replace(/'/g, '&apos;');


	return str;
}

convertHTML("Dolce & Gabbana");



// ********** CHALLENGE 12 - SPINAL TAP CASE ************
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}



// ********** CHALLENGE 12 - SUM ALL ODD FIBONACCI NUMBERS ************
function sumFibs(num) {

	var numArr = [1, 1];
	var finalArr = [];
	var total = 0;
	var finalTotal = 0;
	var index;

	while(total < num) {
		for(var a = 0; a < numArr.length; a++){
			index = a + 1;
			numArr.push(numArr[a] + numArr[index]);
			total = numArr[numArr.length - 1];
				if(total > num){
					numArr.pop();
					break;
				}
		}
	}
	for(var b = 0; b < numArr.length; b++){
		if(numArr[b] % 2 !== 0){
			finalArr.push(numArr[b]);
		}
	}
	for(var c = 0; c < finalArr.length; c++){
		finalTotal += finalArr[c];
	}

	//console.log(finalTotal);
 	return finalTotal;
}
sumFibs(1000);

// GITHUB SOLUTION
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        var added = currNumber + prevNumber;
        prevNumber = currNumber;
        currNumber = added;
    }

    return result;
}



// ********** CHALLENGE 13 - SUM ALL PRIMES ************
function test_prime(n) {   
  if (n===1){  
    return false;  
  }else if(n === 2) {  
    return true;  
  }else {  
    for(var x = 2; x < n; x++){  
      if(n % x === 0){  
        return false;  
      }  
    }  
    return true;    
  } 
}

function sumPrimes(num) {
	var primes = [];
	var total = 0;

	for(var a = 1; a <= num; a++){
		if(test_prime(a) === true){
			primes.push(a);
		}
	}

	for(var b = 0; b < primes.length; b++){
		total += primes[b]
	}

	//console.log(total);
	return total;
}
sumPrimes(10);



// ********** CHALLENGE 14 - SMALLEST COMMON MULTIPLE ************
function smallestCommons(arr) {

	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);

	arr = [];

	for(var a = max; a >= min; a-- ){
		arr.push(a);
	}

	//console.log(arr);

	return arr;
}


smallestCommons([1,5]);



// ********** CHALLENGE 15 - FINDERS KEEPERS ************
function findElement(arr, func) {
  	
  	var num = arr.filter(func);

  	return num[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });



// ********** CHALLENGE 16 - DROP IT ************
function dropElements(arr, func) {
  // Drop them elements.
  var a = 0;

  while(!func(arr[a])){
  	arr.shift();
  }
  //console.log(arr);
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});



// ********** CHALLENGE 17 - STEAMROLLER ************
function steamrollArray(arr) {
  var flattenedArray = [];
  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };
  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}
// test here
steamrollArray([1, [2], [3, [[4]]]]);



// ********** CHALLENGE 18 - BINARY AGENTS ************
function binaryAgent(str) {
	
	var finalStr = [];
	str = str.split(" ");
	var numVal = 0;

	for(var a = 0; a < str.length; a++){

		var firstThree = str[a].slice(0,3);
		var rest = str[a].slice(3,8);
		rest = rest.split("");

		if(firstThree === "010"){
			numVal += 64;
		} else if(firstThree === "001"){
			numVal += 32;
		}else if(firstThree === "011"){
			numVal += 96;
		}

		if(rest[0] === "1"){
			numVal += 16;
		} 
		if(rest[1] === "1"){
			numVal += 8;
		} 
		if(rest[2] === "1"){
			numVal += 4;
		} 
		if(rest[3] === "1"){
			numVal += 2;
		} 
		if(rest[4] === "1"){
			numVal += 1;
		}

		finalStr.push(String.fromCharCode(numVal));
		numVal = 0;
	} // "A" for loop bracket end

	finalStr = finalStr.join("");
	//console.log(finalStr);
	return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");




// ********** CHALLENGE 19 - EVERYTHING BE TRUE ************
function truthCheck(collection, pre) {
  // Is everyone being true?
  	if(typeof pre === "string"){

  		for(var a = 0; a < collection. length; a++){
  			if(collection[a][pre]){
  				//console.log("yes");
  			} else{
  				console.log(false);
  				return false;
  			}
  		}
  	}
  	return true;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



// ********** CHALLENGE 20 - Arguments Optional ************
function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2,3);