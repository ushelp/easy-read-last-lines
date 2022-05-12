const erll = require('../index.min');

let filePath = '../readme.md';

// Read last lines of text (tail -n)
async function test() {

    // Asynchronous
    erll.read(filePath, 10).then(function(lines) {
        console.log(lines);
    }).catch(function(err) {
        console.log(err.message);
    });

    // Synchronous
    let lines = await erll.read(filePath, 10, 'utf8');
    console.log(lines);

    // Read last lines buffer data
    let buffer = await erll.readBuffer(filePath, 1);
    console.log(buffer.toString('base64'));

}


test();
