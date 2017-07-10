// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var i,j,temp;
  var n= array.length;
  var first= array[0];
  var second = array[0]
  for(i=1;i<n;i++)
    {
      if(array[i]>first)
        first=array[i];
    }
  for(i=1;i<n;i++)
    {
      if(array[i]>second && array[i]<first && first!=second)
        second = array[i]
    }
  return second;
}
  


// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {

  var i;
  var freq = new Object();
  for(i=0;i<string.length;i++)
  {
     var alpha = string.charAt(i);
     if(/[a-z]/.test(alpha))
       {
       if(freq[alpha])
         freq[alpha]++;
       else 
         freq[alpha] = 1;
       }
  }
  
  return freq;
}

