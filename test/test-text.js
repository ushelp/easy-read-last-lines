const erll = require('../index');

let filePath = '../readme.md';

// Read last lines of text (tail -n)
async function test() {
    
    var text = `
Easy 
Read 
Last
Line`;
    var text2 = `Easy\nRead\rLast\r\nLine`
    
    // Read last N lines from Text
    var lines = erll.readFromText(text, 2);
    console.log(lines);

    // Convert lines to array
    console.log(erll.linesToArray(lines));

    // Read an array of last N line string from Text
    console.log(erll.readArrayFromText(text2, 3));
}

test();
