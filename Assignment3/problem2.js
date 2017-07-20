module.exports = {
  calculateFrequency : (string) => {
    var index;
    var frequency = {};
    for ( index = 0; index < string.length; index++) {
      var alpha = string.charAt(index);
      if ( alpha.match(/[a-z]/i) ) {
        frequency[alpha] ? frequency[alpha]++ : frequency[alpha] = 1;
      }
    }
    return frequency;
  }
};
