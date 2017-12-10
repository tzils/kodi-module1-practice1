//działa :)

var fs = require('fs');

var catContent = fs.readdirSync("./", function(err, files) {
	  if (err) throw err;
	  return (files);
  });
  
  
fs.writeFile('./nowy.txt', catContent, function(err) {
    if (err) throw err;
    console.log('Zapisano!');
});
