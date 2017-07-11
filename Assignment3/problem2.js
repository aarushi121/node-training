module.exports = {
  calculateFrequency : function (string) {
    var index;
    var frequency = {};
      for ( index = 0; index < string.length; index++) {
        var alpha = string.charAt(index);
          if ( alpha.match(/[a-z]/i) ) {
            if(frequency[alpha])
              frequency[alpha]++;
            else 
              frequency[alpha] = 1;
          }
      }
    return frequency;
  }
};