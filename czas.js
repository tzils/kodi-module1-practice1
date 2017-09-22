function czas(time){
var hours = Math.floor(time / 3600);
time -= hours * 3600;

var minutes = Math.floor(time / 60);
time -= minutes * 60;

var seconds = parseInt(time % 60, 10);

return(hours + ' godz. ' + (minutes < 10 ? '0' + minutes : minutes) + ' min. ' + (seconds < 10 ? '0' + seconds : seconds)+ ' sek. ' );
}

exports.print = czas;