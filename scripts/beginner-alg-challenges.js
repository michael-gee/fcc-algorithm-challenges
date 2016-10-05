// ***** challenge 1 - Reverse a String *****
function reverseString(str) {
  
  str = str.split("").reverse().join("");

  return str;
}

reverseString("hello");

// ***** challenge 2 - Factoralize a Number *****

function factorialize(num) { 
  var numbers = [];
  
  for(var i = 1; i <= num; i++){   
    numbers.push(i);
  }

  for(var j = 0; j < numbers.length - 1; j++){
  	num *= numbers[j];
  } 

  if(num === 0) {
    return 1;
  }
  return num;
}

factorialize(5);

// ****** challenge 3 - Check for Palindromes *****

function palindrome(str) {
	var lowerCaseStr = str.toLowerCase();	
	var replacedString = lowerCaseStr.replace(/[^a-zA-Z0-9]/g, "");	
  	var wordArray = replacedString.split("");
  	var revesrsedString = wordArray.reverse();
  	var joinedString = wordArray.join("");
	  if( replacedString === joinedString ) {
	  	return true;
	  }else {
	  	return false;
	  }
  }
palindrome("1 eye for of 1 eye.");

// ***** challenge 4 - Find tghe Longest Word in a String *****

function findLongestWord(str) {

	var longestWord = 0;

	var lengthCheck;

	var splitStr = str.split(" ");

	for(var i = 0; i < splitStr.length; i++) {
		
		lengthCheck = splitStr[i].length;
		if ( longestWord < lengthCheck ) {
			longestWord = lengthCheck;
		}
	}
	return longestWord;
  }

findLongestWord("The quick brown fox jumped over the lazy dog");

// ***** challenge 5 - Tite Case a Sentence *****

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  var regex= /^[\w]/;
  /*for (var i=0; i<str.length; i++){
    str[i] = str[i].replace(regex, str[i].split('')[0].toUpperCase());
  }
  str=str.join(' ');
  return str;*/
  return str.map(function(val){
    return val.replace(regex, val.split('')[0].toUpperCase());
  }).join(' ');
   //return str;
}
titleCase("I'm a little tea pot");

// ***** challenge 6 - Return Largest Numbers in Arrays *****

function largestOfFour(arr) {
  // You can do this!
  var finalArr = [];
  for(var i = 0; i < arr.length; i++){
  	var initialNum;
  	var largestNum = 0;
  	for(var j = 0; j < arr[i].length; j++) {

  		if(arr[i][j] == arr[i][0] ) {
  			initialNum = arr[i][j];
  		} 

  		if( arr[i][j] < initialNum && initialNum >= largestNum)  {
  			largestNum = initialNum;
  		}
  		if(arr[i][j] > initialNum && arr[i][j] >= largestNum) {
  			largestNum = arr[i][j];
  		} 
  	}
  	finalArr.push(largestNum);
  }
  return finalArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39],
 [1000, 1001, 857, 1]]);

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], 
[1000000, 1001, 857, 1]]);


// ***** challenge 7 - Confirm the Ending ***** 

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  	str = str.split("");
	var lastLetter = str[str.length - 1];
	if(lastLetter == target) {	
		return true;
	} 
	str = str.join("").split(" ");
	var lastWord = str[str.length - 1];
	str = str.join("");
	if( str.substr(str.length - 4, str.length) == target) {
		return true;
	}
	if ( lastWord == target) {
		return true;
	} else {
		return false;
	}

}
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

// ****** challenge 8 - Repeat a String ***** 

function repeatStringNumTimes(str, num) {
  // repeat after me
  var duplicateArr = [];
  str = str.split(" ");
  for(var i = 0; i < num; i ++) {
  	duplicateArr.push(str[0]);
  }
  var repeatedStr = duplicateArr.join("");
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);

// ***** challenge 9 - Truncate a string *****

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

// ***** challenge 10 - Chunk Monkey *****

function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}



// ***** challenge 11 - slasher flick *****

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(howMany === 0) {
    return arr;
  }
  
  for(var i = 0; i < howMany; i++) {
    arr.shift(); 
  } 
  return arr;
}
slasher([1, 2, 3], 2);


// ***** challenge 12 - Mutations *****

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }

 // ***** challenge 13 - Falsy Bouncer *****

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  	var truthy = [];

  	for(var i = 0; i < arr.length; i++) {
  		if(Boolean(arr[i]) === true) {
  			truthy.push(arr[i]);
  		}
  	}
  	//console.log(truthy);
  	return truthy;
}
bouncer([7, "ate", "", false, 9]);


// ***** challenge 14 - Seek and Destroy *****

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// ***** challenge 15 - Where do I belong *****

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.  
  	arr.push(num);
  	arr.sort(function(a, b) {
  		return a - b;
	});
	return arr.indexOf(num);	
}
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([3, 10, 5], 3);


// ***** challenge 16 - Ceasars Cipher *****

function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}
