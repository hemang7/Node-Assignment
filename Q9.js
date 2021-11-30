var fs = require("fs");
// var readstream = fs.createReadStream('hmInput1.txt')
var read_data = fs.readFileSync("hmInput.txt");

var write_data = fs.createWriteStream("hmInput2.txt");
write_data.write(read_data);

write_data.on("finish", () => {
  console.log("File created and writed");
});
write_data.on("error", (err) => {
  console.log(err);
});
