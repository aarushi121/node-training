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
  } 
};
