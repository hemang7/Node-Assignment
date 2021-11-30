var read_line = require("readline-sync");
var fs = require("fs");
var input_data = read_line.question("Enter folder name : ");

fs.mkdir(input_data, (data) => {
  console.log("Folder Created!");
});

fs.rmdir(input_data, (err, data) => {
  if (err) throw err;
  console.log("Deleted Folder");
});
