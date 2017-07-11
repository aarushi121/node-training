function toUnflat(flat,result) {

	var object1, tempKey, index, last, temp;
  	for(var p in flat) {
      object1 = result, tempKey = "", last = 0;
      do {
        index = p.indexOf(".", last);
        temp = p.substring(last, index !== -1 ? index : undefined);
        object1 = object1[tempKey] || (object1[tempKey] = (!isNaN(parseInt(temp)) ? [] : {}));
        tempKey = temp;
        last = index + 1;
        } while(index >= 0);

    object1[tempKey] = flat[p];
    }
 }
module.exports = {
	

	unflatten : function(flatObject) {
    var result = {};
      if ((typeof flatObject) !== "object" || Array.isArray(flatObject))
        return flatObject;
    toUnflat(flatObject,result);
    return result[""];
    }

	
};