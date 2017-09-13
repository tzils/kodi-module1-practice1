process.stdin.setEncoding('utf-8');
console.log(process.env);
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction === '/exit') {
            case:
			process.stdout.write('Quitting app!\n');
            process.exit();
			default:
            process.stderr.write('Wrong instruction!');
        }
    }
});
test