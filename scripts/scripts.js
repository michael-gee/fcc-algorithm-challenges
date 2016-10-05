function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  var currentNum = 0;

  for(var a = 1; a <= arr1.length; a++) {
  	var val = arr1.slice(currentNum, a);
  	
  		for(var b = 0; b < arr2.length; b++){

  			if(val === arr2[b]){
  				return false;
  			} else {
  				unmatched.push("unmatched");
  			}

  		}

  	currentNum++;
  }

  console.log(newArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
