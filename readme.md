# Easy-Read-Last-Lines

Read the last N lines in the file or text across platforms. (like tail -n) 

## Table of contents

- [Feature](#feature)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [License](#license)
- [End](#end)

## Feature
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

### Read last N lines from File

```JS
let fielPath='YOUR_FILE_PATH';

// Asynchronously
erll.readFromFile(filePath, 3).then(function(lines) {
    console.log(lines);
}).catch(function(err) {
    console.log(err.message);
});

// Synchronously
let lines = await erll.readFromFile(filePath, 3, 'utf8');
console.log(lines);

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

### Read last N lines from Text

```JS
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
```

### Convert multiline text to array

```JS
let fielPath='YOUR_FILE_PATH';

var text4 = `Easy\nRead\rLast\r\nLine`;
var text5 = `Easy\rRead\rLast\rLine`;
console.log(erll.linesToArray(erll.readFromText(text4, 2)));
console.log(erll.linesToArray(erll.readFromText(text5, 3)));

let lines = await erll.readFromFile(filePath, 3, 'utf8');
console.log(erll.linesToArray(lines));
```
	
## Functions

- **readFromFile(filePath, maxLine, [encoding]): Promise**
    - `filePath`: file path(direct or relative path to file)
    - `maxLine`: max number of last lines to read in
    - `encoding`: When converting between Buffers and strings, a character encoding may be specified. If no character encoding is specified, `UTF-8` will be used as the default. [buffers-and-character-encodings](https://nodejs.org/api/buffer.html#buffers-and-character-encodings)    

- **readBufferFromFile(filePath, maxLine): Promise**
    - `filePath`: file path(direct or relative path to file)
    - `maxLine`: max number of last lines to read in
    
- **readFromText(text, maxLine): String**
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