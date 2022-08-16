const erll = require('../index');

let filePath = '../readme.md';

// Read last lines of text (tail -n)
async function test() {

    // Read last N line from File asynchronously
    erll.readFromFile(filePath, 3).then(function(lines) {
        console.log(lines);
    }).catch(function(err) {
        console.log(err.message);
    });

    // Read last N line from File synchronously
    let lines = await erll.readFromFile(filePath, 3, 'utf8');
    console.log(lines);

    // Read last N lines buffer data from File asynchronously
    erll.readBufferFromFile(filePath, 1).then(function(buffer) {
        console.log(buffer.toString('base64'));
    }).catch(function(err) {
        console.log(err.message);
    });

    // Read last N lines buffer data from File synchronously
    let buffer = await erll.readBufferFromFile(filePath, 1);
    console.log(buffer.toString('base64'));


    // Read last N line from Text
    var text = `
Easy 
Read 
Last
Line`;
    var text2 = `Easy\nRead\nLast\nLine`
    var text3 = `Easy\r\nRead\r\nLast\r\nLine`

    console.log(erll.readFromText(text, 2));
    console.log(erll.readFromText(text2, 2));
    console.log(erll.readFromText(text3, 2));


    // Lines to array
    console.log(erll.linesToArray(lines));
    var text4 = `Easy\nRead\rLast\r\nLine`;
    var text5 = `Easy\rRead\rLast\rLine`;
    console.log(erll.linesToArray(erll.readFromText(text4, 2)));
    console.log(erll.linesToArray(erll.readFromText(text5, 3)));

}

test();
