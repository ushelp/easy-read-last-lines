const erll = require('../index');

let filePath = '../readme.md';

// Read last lines of text (tail -n)
async function test() {

    // Read last N lines buffer data from File asynchronously
    erll.readBufferFromFile(filePath, 1).then(function(buffer) {
        console.log(buffer.toString('base64'));
    }).catch(function(err) {
        console.log(err.message);
    });

    // Read last N lines buffer data from File synchronously
    let buffer = await erll.readBufferFromFile(filePath, 1);
    console.log(buffer.toString('base64'));

}

test();
