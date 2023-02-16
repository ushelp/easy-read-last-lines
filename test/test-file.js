const erll = require('../index');

let filePath = '../readme.md';

// Read last lines of text (tail -n)
async function test() {

    // Read last N line from File - Asynchronously
    erll.readFromFile(filePath, 3).then(function(lines) {
        console.log(lines);
    }).catch(function(err) {
        console.log(err.message);
    });

    // Read last N line from File - Synchronously
    let lines = await erll.readFromFile(filePath, 3, 'utf8');
    console.log(lines);
    
    // Convert Lines to array
    console.log(erll.linesToArray(lines));

    // Read an array of last N line string - Synchronously
    let linesArray = await erll.readArrayFromFile(filePath, 3, 'utf8');
    console.log(linesArray);
    
}

test();
