function toUnflat (flat, result) {
  var object1, tempKey, index, last, temp;
    for(var index_i in flat) {
      object1 = result, tempKey = "", last = 0;
      do {
        index = index_i.indexOf (".", last);
        temp = index_i.substring (last, index !== -1 ? index : undefined);
        object1 = object1[tempKey] || (object1[tempKey] = ( ! isNaN(parseInt(temp)) ? [] : {}));
        tempKey = temp;
        last = index + 1;
        } while(index >= 0);

      object1[tempKey] = flat[index_i];
    }
}

module.exports = {
  unflatten : function (flatObject) {
    var result = {};
      if (  (typeof flatObject) !== "object" || Array.isArray(flatObject) )
        return flatObject;
    toUnflat (flatObject,  result);
    return result[""];
  }
};