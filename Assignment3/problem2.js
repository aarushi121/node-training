module.exports = {
  calculateFrequency : function(string) {

  var i;
  var freq = {};
  for(i=0;i<string.length;i++)
   {
     var alpha = string.charAt(i);
     if(alpha.match(/[a-z]/i))
       {
       if(freq[alpha])
         freq[alpha]++;
       else 
         freq[alpha] = 1;
       }
   }
  
  return freq;
}
};