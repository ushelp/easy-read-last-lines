# Easy-Read-Last-Lines

High performance read the last N lines in the file or text across platforms. (like tail -n) 

## Table of contents

- [Feature](#feature)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [License](#license)
- [End](#end)

## Feature
- High performance read
- Compatible with newlines on different platforms/format: `\r`, `\n`, `\r\n`
- Support setting character `encoding`
- Support get a `String` or `Buffer` object from file

## Installation

```BASH
npm install easy-read-last-lines
```


## Usage

```JS
const erll = require('easy-read-last-lines');
```

### Read last N lines string from File

```JS
let fielPath='YOUR_FILE_PATH';

// Read last N lines string from File - Asynchronously
erll.readFromFile(filePath, 3).then(function(lines) {
    console.log(lines);
}).catch(function(err) {
    console.log(err.message);
});

//  Read last N lines string from File - Synchronously
let lines = await erll.readFromFile(filePath, 3, 'utf8');
console.log(lines);

// Read an array of last N line string from File
let linesArray = await erll.readArrayFromFile(filePath, 3, 'utf8');
console.log(linesArray);

```

### Read last N lines buffer data from File

```JS
let fielPath='YOUR_FILE_PATH';

// Asynchronously
erll.readBufferFromFile(filePath, 1).then(function(buffer) {
    console.log(buffer.toString('base64'));
}).catch(function(err) {
    console.log(err.message);
});

// Synchronously
let buffer = await erll.readBufferFromFile(filePath, 1);
console.log(buffer.toString('base64'));
```

### Read last N lines string from Text

```JS
var text = `
Easy 
Read 
Last
Line`;
var text2 = `Easy\nRead\rLast\r\nLine`
    
// Read last N lines string from Text
var lines = erll.readFromText(text, 2);
console.log(lines);

// Read an array of last N line string from Text
var linesArray = erll.readArrayFromText(text2, 3);
console.log(linesArray);
```

### Convert multiline text to array of string
```JS
var text = `Easy\nRead\rLast\r\nLine`;

console.log(erll.linesToArray(lines));
```

## Functions

- **readFromFile(filePath, maxLine, [encoding]): Promise**
    - `filePath`: file path(direct or relative path to file)
    - `maxLine`: max number of last lines to read in
    - `encoding`: When converting between Buffers and strings, a character encoding may be specified. If no character encoding is specified, `UTF-8` will be used as the default. [buffers-and-character-encodings](https://nodejs.org/api/buffer.html#buffers-and-character-encodings)    

- **readArrayFromFile(filePath, maxLine, [encoding]): Promise**
    - `filePath`: file path(direct or relative path to file)
    - `maxLine`: max number of last lines to read in
    - `encoding`: When converting between Buffers and strings, a character encoding may be specified. If no character encoding is specified, `UTF-8` will be used as the default. [buffers-and-character-encodings](https://nodejs.org/api/buffer.html#buffers-and-character-encodings)    

- **readBufferFromFile(filePath, maxLine): Promise**
    - `filePath`: file path(direct or relative path to file)
    - `maxLine`: max number of last lines to read in
    
- **readFromText(text, maxLine): String**
    - `text`: multiline string
    - `maxLine`: max number of last lines to read in
    
- **readArrayFromText(text, maxLine): String**
    - `text`: multiline string
    - `maxLine`: max number of last lines to read in
    
- **linesToArray(text): Array**
    - `text`: multiline string
    
## License
MIT License

## End

Email：<inthinkcolor@gmail.com>

[http://www.easyproject.cn](http://www.easyproject.cn "EasyProject Home")


**Donation/捐助:**

<a href="http://www.easyproject.cn/donation">
<img alt="
支付宝/微信/QQ/云闪付/PayPal 扫码支付" src="http://www.easyproject.cn/thanks/donation.png"  title="支付宝/微信/QQ/云闪付/PayPal 扫码支付"  height="320" width="320"></img></a>
<div>支付宝/微信/QQ/云闪付/PayPal</div>

<br/>

我们相信，每个人的点滴贡献，都将是推动产生更多、更好免费开源产品的一大步。

**感谢慷慨捐助，以支持服务器运行和鼓励更多社区成员。**

We believe that the contribution of each bit by bit, will be driven to produce more and better free and open source products a big step.

**Thank you donation to support the server running and encourage more community members.**