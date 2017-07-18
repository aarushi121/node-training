const fs = require('fs');

var makePromise = (fileName, fileOperation, tempData) => {
  return new Promise((resolve, reject) => {
    fs[fileOperation](fileName, tempData, (error, dataFromFile) => {
      error ? reject(error) : resolve(dataFromFile);
    })
  })
}
var print = (string) => {
  console.log(string);
}
makePromise('file1.txt', "readFile", "")
 .then(result => { print("---------------------------------------------");
                   print(result.toString());
                   return makePromise('file2.txt', "appendFile", result) 
                 })
 .then(result => { return makePromise('file2.txt', "readFile", "") })
 .then(result => { print("----------------------------------------------");
                   print(result.toString());
                   return makePromise('file3.txt', "writeFile", result)
                 })
 .then(result => { return makePromise('file3.txt', "readFile", "") })
 .then(result => { print("----------------------------------------------");
                   print(result.toString());
                 })
 .catch(error => print(error));
