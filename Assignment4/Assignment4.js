const fs = require('fs');

function checkError(error) {
  if(error) {
    print(error);
    throw error;
  }
}

function print(string) {
  console.log(string);
}

function readAppendWrite(readFile, appendFile, writeFile) {
  fs.readFile(readFile, function (errorOnFile1Read, dataFromFile1) {
    checkError(errorOnFile1Read); 
    print(dataFromFile1.toString());
    print("----------------------------------------------");

    fs.appendFile(appendFile, dataFromFile1, function (errorOnFile2Append) {
      checkError(errorOnFile2Append);
  
      fs.readFile(appendFile, function (errorOnFile2Read, dataFromFile2) {
        checkError(errorOnFile2Read);
        
        fs.writeFile(writeFile, datafromFile2, function (errorOnFile3Write) {
          checkError(errorOnFile3Write);
          print(data2.toString());
          print("-----------------------------------------------");
        });
      });
    });
  });
}
readAppendWrite("file1.txt", "file2.txt", "file3.txt");
