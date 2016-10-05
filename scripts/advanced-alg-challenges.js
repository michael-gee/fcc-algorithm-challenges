// ********** CHALLENGE 1 - VALIDATE US TELEPHONE #'S **********

function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}
telephoneCheck("555-555-5555");



// ********** CHALLENGE 2 - SYMMETRIC DIFFERENCE **********
function sym() {
    var args = Array.prototype.slice.call(arguments);

    function symDiff(arrayOne, arrayTwo) {
        var result = [];

        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        return result;
    }
    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);



// ********** CHALLENGE 3 - EXACT CHANGE **********
// Create an object which hold the denominations and their values
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  //console.log(register);

  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  }

  // Handle obvious insufficent funds
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  // Here is your change, ma'am.
  return change_arr;
}

// test here
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);



// ********** CHALLENGE 4 - INVENTORY UPDATE **********
function updateInventory(arr1, arr2) {
  
  var inv = arr1.concat(arr2).reduce(function(acc, next) {
    if (acc[next[1]]){ // if the property exists? 
      acc[next[1]] += next[0]; // add the value
    } else { 
      acc[next[1]] = next[0]; 
    } 
    return acc;
  }, {});

  return Object.keys(inv).map(function(value) { 
      return [inv[value], value]; // return arr of properties and values
    }).sort(function(a, b) {
      if (a[1] === b[1]) { // if property is the same, do nothing
        return 0;
      } else if (a[1] < b[1]) { // if a (name of the item) is less than b, reorder
        return -1;
      } else {
        return 1;
      }
     });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])




// ********** CHALLENGE 5 - NO REPEATS PLEASE **********
function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
permAlone('aab');
 


 // ********** CHALLENGE 6 - FRIENDLY DATE RANGES **********
 function makeFriendlyDates(arr) {

  function makeNum(date){
    for(var a = 0; a < date.length; a++){
      date[a] = parseInt(date[a]);
    }
  }

  function getMonth(month){

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

    var currentMonth = months[month - 1] || "";
    if(month === 12){
      currentMonth = "December";
    }
    return currentMonth;
  }

  function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

    var dateRange = [];
    var date1 = arr[0];
    var date2 = arr[1];

    date1 = date1.split("-");
    date2 = date2.split("-");

    makeNum(date1);
    makeNum(date2);

    var year1 = date1[0];
    var year2 = date2[0];

    var month1 = getMonth(date1[1]);
    var month2 = getMonth(date2[1]);

    var dateNum1 = ordinal_suffix_of(date1[2]);
    var dateNum2 = ordinal_suffix_of(date2[2]);

    if(year1 !== year2){
      console.log("hello");
    }

    console.log(date1);
    console.log(date2);

    console.log(year1);
    console.log(year2);

    console.log(month1);
    console.log(month2);

    console.log(dateNum1);
    console.log(dateNum2);

    console.log(dateRange);

}
makeFriendlyDates(["2016-12-01", "2017-02-03"]);



// ********** CHALLENGE 7 - MAKE A PERSON **********
