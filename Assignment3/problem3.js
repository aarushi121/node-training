var toFlat = (unflat, tempKey, result) => {
  if (typeof unflat === "object") {
    for (var index in unflat){
      toFlat (unflat[index], tempKey + "." + index, result);
    }
  }
  else
    result[tempKey] = unflat;

}

module.exports = {
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
  }
};
