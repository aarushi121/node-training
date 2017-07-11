function toFlat (unflat, tempKey, result) {
  if ( typeof unflat == "object") {
    for (var index_x in unflat){
      toFlat (unflat[index_x], tempKey + "." + index_x, result);
    }
  }
  else
    result[tempKey] = unflat;

}

module.exports = {
  flatten : function (unflatObject) {
    var result = {};
      for( var index_i in unflatObject) {
        if ( (typeof unflatObject[i]) == 'object') {
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
};