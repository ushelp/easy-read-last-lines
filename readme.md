# Easy-Read-Last-Lines

Read the last N lines in the file. (like tail -n) 

## Table of contents

- [Feature](#feature)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [License](#license)
- [End](#end)

## Feature
- Support setting character `encoding`
- Compatible with newlines on different platforms/format: `\r`, `\n`, `\r\n`
- Support get a `String` or `Buffer` object

## Installation

```BASH
npm install easy-read-last-lines
```


## Usage

```JS
// Read last lines of text (tail -n)

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
```
	

## Functions

- **read(filePath, maxLine, [encoding]): Promise**
    - `filePath`: file path(direct or relative path to file)
    - `maxLine`: max number of last lines to read in.
    - `encoding`: When converting between Buffers and strings, a character encoding may be specified. If no character encoding is specified, `UTF-8` will be used as the default. [buffers-and-character-encodings](https://nodejs.org/api/buffer.html#buffers-and-character-encodings)    

- **readBuffer(filePath, maxLine): Promise**
    
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