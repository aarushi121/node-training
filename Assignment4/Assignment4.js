var fs = require('fs');
console.log("------------------------------------------");
function ReadAppendWrite (read_file, append_file, write_file) {
  fs.readFile (read_file, function(err1, data1) {
    if (err1) throw err1;
    console.log(data1.toString())
    console.log("----------------------------------------------");

    fs.appendFile(append_file, data1, function(err2) {
      if (err2)  throw err2;
  
      fs.readFile (append_file, function(err3, data2) {
        if (err3)  throw err3;
        
        fs.writeFile(write_file, data2, function(err3) {
          if (err2)  throw err2;
        console.log(data2.toString());
        console.log("-----------------------------------------------");
        });
      });
    });
  });
}
ReadAppendWrite("file1.txt", "file2.txt", "file3.txt");