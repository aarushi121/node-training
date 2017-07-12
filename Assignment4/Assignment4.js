const fs = require('fs');

function readAppendWrite (readFile, appendFile, writeFile) {
  fs.readFile (readFile, function (err1, data1) {
    if (err1) throw err1;
    console.log(data1.toString())
    console.log("----------------------------------------------");

    fs.appendFile(appendFile, data1, function (err2) {
      if (err2) throw err2;
  
      fs.readFile (appendFile, function (err3, data2) {
        if (err3) throw err3;
        
        fs.writeFile(writeFile, data2, function (err3) {
          if (err2) throw err2;
          console.log(data2.toString());
          console.log("-----------------------------------------------");
        });
      });
    });
  });
}
readAppendWrite("file1.txt", "file2.txt", "file3.txt");
