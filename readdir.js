// nie działa ...

var fs = require('fs');

fs.readdir("/jedensiedem", function(err, files) {
    if (err) {
      return err;
    } else {
      fs.writeFile('dirList.txt', files);
    }
  });
  
