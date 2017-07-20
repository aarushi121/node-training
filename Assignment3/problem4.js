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
  unflatten : (flatObject) => {
    var result = {};
    if ((typeof flatObject) !== "object" || Array.isArray(flatObject) )
      return flatObject;
    toUnflat(flatObject, result);
    return result[""];
  }
};
