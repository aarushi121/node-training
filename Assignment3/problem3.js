function toFlat(unflat,tempKey,result) {
		if(typeof unflat == "object"){
     		for (var x in unflat){
         		toFlat(unflat[x],tempKey+"."+x,result);
            }
        }
        else
        	result[tempKey]=unflat;

    }
module.exports = {

	flatten : function (unflatObject) {

	var result = {};
	    for(var i in unflatObject) {
	      if((typeof unflatObject[i])=='object') {
	        for(var j in unflatObject[i]) {
	          toFlat(unflatObject[i][j],i+"."+j,result);
	      }
	    }
	      else{
	      result[i] = unflatObject[i];
	      }
	    }
	    return result;
    }

    
};