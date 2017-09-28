
var fs = require("fs"),
    path = require("path");

var p = "../"
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
});



fs.writeFile('message.txt', 'Hello Node.js', 'utf8', (err) => {

  if (err) throw err;

  console.log('The file has been saved!');

});