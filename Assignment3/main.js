var tools = require("./problem1.js");
var array = [1, 7, 10, 3, 8];
var value = tools.secondLargest(array);
console.log("Program 1 --------");
console.log("Array = ["+array+"]");
console.log("Second Largest Value: "+value);
console.log('\n');

var tools = require("./problem2.js");
var string = "aarushi";
var value = tools.calculateFrequency(string);
console.log("Program 2 --------");
console.log("String = "+string);
console.log("Frequency values are ");
console.log(value);
console.log('\n');

var tools = require("./problem3.js");
var input = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }
var value = tools.flatten(input);
console.log("Program 3 --------");
console.log("Flatten object is : ");
console.log(value);
console.log('\n');

var tools = require("./problem4.js");
var input = { "flatJSON": false, "i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree", "dates.0.day": 1, "dates.1.day": 8947 }
var value = tools.unflatten(input);
console.log("Program 4 --------");
console.log("Unflat object is : "+JSON.stringify(value));
console.log('\n');