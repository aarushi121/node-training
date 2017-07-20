// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
const secondLargest = (array) => {
  var index;
  var array_length = array.length;
  var first = array[0];
  var second = array[0];
  for (index = 1; index < array_length; index++) {
    if (array[index] > first)
      first=array[index];
  }
  for (index = 1; index < array_length; index++) {
    if (array[index] > second && array[index] < first && first != second)
      second = array[index];
  }
  return second;
}
  


// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
const calculateFrequency = (string) => {
  var index;
  var frequency = {};
  for (index = 0; index < string.length; index++) {
    var alpha = string.charAt(index);
    if (alpha.match(/[a-z]/i) ) {
      frequency[alpha] ? frequency[alpha]++ : frequency[alpha] = 1;
    }
  }
  return frequency;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  
var toFlat = (unflat, tempKey, result) => {
  
  if (typeof unflat == "object") {
    for (var index_x in unflat){
      toFlat( unflat[index_x], tempKey + "." + index_x, result);
    }
  }
  else
    result[tempKey] = unflat;
}

var flatten = (unflatObject) => {
  var result = {};
  for (var index_i in unflatObject) {
    if ((typeof unflatObject[i]) == 'object') {
      for (var index_j in unflatObject[index_i]) {
        toFlat (unflatObject[i][j], index_i + "." + index_j, result);
      }
    }
    else {
      result[i] = unflatObject[i];
    }
  }
  return result;
}


// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format


var toUnflat = (flat, result) => {
  var object1, tempKey, index, last, temp;
  for (var index_i in flat) {
    object1 = result, tempKey = "", last = 0;
    do {
      index = index_i.indexOf (".", last);
      temp = index_i.substring (last, index !== -1 ? index : undefined);
      object1 = object1[tempKey] || (object1[tempKey] = ( ! isNaN(parseInt(temp)) ? [] : {}));
      tempKey = temp;
      last = index + 1;
    } while (index >= 0);
    object1[tempKey] = flat[index_i];
  }
}
var unflatten = (flatObject) => {
  var result = {};
  if ((typeof flatObject) !== "object" || Array.isArray(flatObject) )
    return flatObject;
  toUnflat (flatObject,  result);
  return result[""];
}
