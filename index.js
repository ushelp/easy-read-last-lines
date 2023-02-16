/**
 * easy-read-last-lines
 *
 * Read the last N lines in the file or text across platforms. (like tail -n)
 *
 * Version 3.0.1
 *
 * @author [ inthinkcolor@gmail.com ]
 *
 * @see https://github.com/ushelp/easy-read-last-lines
 *
 * Copyright 2022 Ray, EasyProject
 * Released under the MIT license
 *
 * [Node.js]
 *
 */
var fsp = require("mz/fs");
/** Read in the last `n` lines of a file
 * @param  {string}  File (direct or relative path to file)
 * @param  {int}     maxLine max number of lines to read in.
 * @param  {string}  When converting between Buffers and strings, a character encoding may be specified. If no character encoding is specified, UTF-8 will be used as the default. https://nodejs.org/api/buffer.html#buffers-and-character-encodings
 * @param  {boolean} return buffer or String
 * @return {promise} new Promise, resolved with lines or rejected with error.
 */
function _readFromFile(filePath, maxLine, encoding, returnBuffer) {

    return new Promise(function(resolve, reject) {
        let self = {
            stat: null,
            file: null
        };
        if (!returnBuffer && !encoding) {
            encoding = "utf8";
        }
        fsp.exists(filePath).then(function(exists) {
            if (!exists) {
                throw new Error("File does not exist");
            }
        }).then(function() {
            let promises = [];
            promises.push(fsp.stat(filePath).then(function(stat) {
                return self.stat = stat;
            }));
            promises.push(fsp.open(filePath, "r").then(function(file) {
                return self.file = file;
            }));
            return promises;
        }).then(function(promises) {
            Promise.all(promises).then(function() {
                let chars = 0;
                let lineCount = 0;
                let newLineCharacters = ["\n", "\r"];
                let bufferBytes = [];
                let isNewLine = false;
                let do_while_loop = function do_while_loop() {
                    if (bufferBytes.length > self.stat.size) {
                        bufferBytes.splice(0, lines.length - self.stat.size);
                    }
                    if (bufferBytes.length >= self.stat.size || lineCount >= maxLine) {
                        let pos = newLineCharacters.indexOf(String.fromCharCode(bufferBytes[0]));
                        if (pos >= 0) {
                            bufferBytes.shift();
                        }
                        fsp.close(self.file);
                        return returnBuffer ? resolve(Buffer.from(bufferBytes)) : resolve(Buffer.from(bufferBytes).toString());
                    }

                    fsp.read(self.file, Buffer.alloc(1), 0, 1, self.stat.size - 1 - chars).then(function(bytesReadAndBuffer) {
                        bufferBytes.unshift(bytesReadAndBuffer[1][0]);
                        let nextCharacter = String.fromCharCode(bytesReadAndBuffer[1][0]);
                        let pos = newLineCharacters.indexOf(nextCharacter);
                        if (!(nextCharacter == "\r" && isNewLine)) {
                            if (pos >= 0 && bufferBytes.length > 1) {
                                lineCount++;
                            }
                        }
                        isNewLine = (nextCharacter == "\n");
                        chars++;
                        do_while_loop();
                    });
                };
                do_while_loop();
            });
        })["catch"](function(reason) {
            if (self.file !== null) {
                fsp.close(self.file);
            }
            return reject(reason);
        });
    });
}
/** 
 * Read in the last `n` lines of a Text
 * @param  {string} Text
 * @param  {int}     maxLine max number of lines to read in.
 * @return {promise} String
 */
function _readFromText(text, maxLine) {
    let lineCount = 0;
    let newLineCharacters = ["\n", "\r"];
    let lastNLineText = "";
    let isNewLine = false;
    let i = text.length - 1;

    for (; i >= 0; i--) {
        if (lineCount >= maxLine) {
            break;
        }
        let nextCharacter = text.charAt(i);
        lastNLineText = nextCharacter + lastNLineText;
        let pos = newLineCharacters.indexOf(nextCharacter);
        if (!(nextCharacter == "\r" && isNewLine)) {
            if (pos >= 0) {
                lineCount++;
            }
        }

        isNewLine = (nextCharacter == "\n");
    }
    return i < 0 ? lastNLineText : lastNLineText.substring(1);
}


var EasyReadLastLines = {};
EasyReadLastLines.readFromFile = function(filePath, maxLine, encoding) {
    return _readFromFile(filePath, maxLine, encoding, false);
};
EasyReadLastLines.readArrayFromFile = function(filePath, maxLine, encoding) {
    return _readFromFile(filePath, maxLine, encoding, false).then(function(lines) {
        return lines.split(/\r\n|\r|\n/g);
    });
};
EasyReadLastLines.readBufferFromFile = function(filePath, maxLine) {
    return _readFromFile(filePath, maxLine, null, true);
};
EasyReadLastLines.readFromText = function(text, maxLine) {
    return _readFromText(text, maxLine);
};
EasyReadLastLines.readArrayFromText = function(text, maxLine) {
    return _readFromText(text, maxLine).split(/\r\n|\r|\n/g);
};
EasyReadLastLines.linesToArray = function(text) {
    return text.split(/\r\n|\r|\n/g);
};

module.exports = EasyReadLastLines;
