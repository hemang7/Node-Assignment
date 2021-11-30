var fs = require("fs");
var data = "Input data";
var writestream = fs.createWriteStream("hmInput1.txt");
writestream.write(data);

writestream.on("finish", () => {
  console.log(data);
});
writestream.on("error", (err) => {
  console.log(err);
});
