module.exports = {
    secondLargest: function(array) {
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
    
};