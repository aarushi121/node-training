const fs = require('fs');

const print = (string) => {
  console.log(string);
}

const checkError = (error) => {
  if (error) {
    print(error);
    throw error;
  }
}

const readAppendWrite = (readFile, appendFile, writeFile) => {
  fs.readFile(readFile, (errorOnFile1Read, dataFromFile1) => {
    checkError(errorOnFile1Read); 
    print(dataFromFile1.toString());
    print("----------------------------------------------");

    fs.appendFile(appendFile, dataFromFile1, (errorOnFile2Append) => {
      checkError(errorOnFile2Append);
  
      fs.readFile(appendFile, (errorOnFile2Read, dataFromFile2) => {
        checkError(errorOnFile2Read);
        
        fs.writeFile(writeFile, dataFromFile2, (errorOnFile3Write) => {
          checkError(errorOnFile3Write);
          print(dataFromFile2.toString());
          print("-----------------------------------------------");
        });
      });
    });
  });
}

readAppendWrite("file1.txt", "file2.txt", "file3.txt");
