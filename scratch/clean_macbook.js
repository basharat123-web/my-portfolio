const fs = require("fs");
const path = require("path");

// Native PNG parser & background stripper in pure JS
const inputPath = "D:/My Portfolio/public/macbook-pro-user.png";
const outputPath = "D:/My Portfolio/public/macbook-pro-transparent.png";

console.log("Reading image...");
const buffer = fs.readFileSync(inputPath);
console.log("Buffer size:", buffer.length);
