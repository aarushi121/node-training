var toFlat = (unflat, tempKey, result) => {
  if (typeof unflat === "object") {
    for (var index in unflat){
      toFlat (unflat[index], tempKey + "." + index, result);
    }
  }
  else
    result[tempKey] = unflat;

}

var toUnflat = (flat, result) => {
  var object1, tempKey, index, last, temp;
  for (var outerIndex in flat) {
    object1 = result, tempKey = "", last = 0;
    do {
      index = outerIndex.indexOf (".", last);
      temp = outerIndex.substring (last, index !== -1 ? index : undefined);
      object1 = object1[tempKey] || (object1[tempKey] = ( !isNaN(parseInt(temp)) ? [] : {}));
      tempKey = temp;
      last = index + 1;
      } while (index >= 0);
      object1[tempKey] = flat[outerIndex];
  }
}

module.exports = {

  secondLargest : (array) => {
    var index;
    const arrayLength = array.length;
    var first = array[0];
    var second = array[0];
    for (index = 1; index < arrayLength; index++) {
      if (array[index] > first)
        first = array[index];
    }
    for (index = 1; index < arrayLength; index++) {
      if (array[index] > second && array[index] < first && first != second)
        second = array[index];
    }
    return second;
  },

  calculateFrequency : (string) => {
    var index;
    var frequency = {};
    for (index = 0; index < string.length; index++) {
      var alpha = string.charAt(index);
      if (alpha.match(/[a-z]/i) ) {
        frequency[alpha] ? frequency[alpha]++ : frequency[alpha] = 1;
      }
    }
    return frequency;
  },

  flatten : (unflatObject) => {
    var result = {};
    for (var outerIndex in unflatObject) {
      if ((typeof unflatObject[outerIndex]) === 'object') {
        for (var innerIndex in unflatObject[outerIndex]) {
          toFlat(unflatObject[outerIndex][innerIndex], outerIndex + "." + innerIndex, result);
        }
      }
      else {
        result[outerIndex] = unflatObject[outerIndex];
      }
    }
    return result;
  },

  unflatten : (flatObject) => {
    var result = {};
    if ((typeof flatObject) !== "object" || Array.isArray(flatObject) )
      return flatObject;
    toUnflat(flatObject, result);
    return result[""];
  }
}
