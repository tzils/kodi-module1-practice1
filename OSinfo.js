var os = require('os');
var colors = require('colors');
var czas = require('./czas').print;

function OSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.grey, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: ~'.green, (czas(uptime)));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.gray, userInfo.homedir);
}

exports.print = OSinfo;


var colors = require('colors');
 
console.log('hello'.green); // outputs green text 
console.log('i like cake and pies'.underline.red) // outputs red underlined text 
console.log('inverse the color'.inverse); // inverses the color 
console.log('OMG Rainbows!'.rainbow); // rainbow 
console.log('Run the trap'.trap); // Drops the bass 
 