const fs = require('fs');
var read = function(readFile) {
  return new Promise((resolve,reject) => {
    fs.readFile(readFile, function(error, dataFromFile) {
      if (error)
        reject(error);
      resolve(dataFromFile);
      console.log("------------------------------------------------------------");
      console.log(dataFromFile.toString());
    });
  });
};
var append = function(appendFile, dataFromFile) {
  return new Promise((resolve,reject) => {
    fs.appendFile(appendFile, dataFromFile.toString(), function(error) {
      if (error)
        reject(error);
      resolve();
    });
  });
};
var write = function(writeFile, dataFromFile) {
  return new Promise((resolve,reject) => {
    fs.writeFile(writeFile, dataFromFile, function(error) {
      if (error)
        reject(error);
      resolve();
    });
  });
};

read('file1.txt')
 .then(result => { return append('file2.txt', result) })
 .then(result => { return read('file2.txt') })
 .then(result => { return write('file3.txt', result) })
 .then(result => { return read('file3.txt') })
 .catch(error => console.log(error))

