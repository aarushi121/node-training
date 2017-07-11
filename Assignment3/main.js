var utility1 = require("./problem1.js");
var utility2 = require("./problem2.js");
var utility3 = require("./problem3.js");
var utility4 = require("./problem4.js");

function print(string)
{
  console.log(string);
}

var input1 = [1, 7, 10, 3, 8];
var output1 = utility1.secondLargest(input1);
print("Program 1 ----------------------\nArray = ["+input1+"]");
print("Second Largest Value: "+output1+"\n");

var input2 = "aarushi";
var output2 = utility2.calculateFrequency(input2);
print("Program 2 ----------------------\nString = "+input2);
print("Frequency values are ");
print(output2);
print('\n');


var input3 = { 
  "flatJSON": false, 
  "i": { 
    "am": { 
      "not": { 
        "so": { 
          "flat": true, 
          "unflat": false 
          } 
        }, 
      "a": "tree" 
    } 
  }, 
  "dates": [ 
    { "day": 1 }, 
    { "day": 8947 } ] 
  }
var output3 = utility3.flatten(input3);
print("Program 3 ----------------------\nFlatten object is :");
print(output3);
print('\n');


var input4 = { 
              "flatJSON": false, 
              "i.am.not.so.flat": true, 
              "i.am.not.so.unflat": false, 
              "i.am.a": "tree", 
              "dates.0.day": 1, 
              "dates.1.day": 8947 
             }
var output4 = utility4.unflatten(input4);
print("Program 4 ----------------------");
print("Unflat object is : "+JSON.stringify(output4));
print('\n');