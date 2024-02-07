#! /usr/bin/env node
const process = require("process");
const fileApi = require("fs");
const flag = process.argv[2]; //flag
let fileName = flag.includes(".txt") ? flag : process.argv[3];
let lines = 0;
let words = 0;

if (!fileName) {
  process.stdout.write("Please enter file name");
}
if (!fileName.includes(".txt")) {
  process.exitCode = 1;
}
const data = fileApi.readFileSync(`${process.cwd()}/${fileName}`);
if (!data) {
  process.stdin.write("unable to read file");
  process.exitCode = 1;
}
switch (flag) {
  case "-l": {
    data.forEach((val) => {
      if (val == 10) lines++;
    });
    process.stdout.write(`${lines} ${fileName}`);
    break;
  } //line
  case "-c": {
    process.stdout.write(`${data.byteLength} ${fileName}`);
    break;
  }
  case "-w": {
    data.forEach((val) => {
      if (val == 32) words++;
    });
    process.stdout.write(`${words} ${fileName}`);
    break;
  }
  case "-m": {
    process.stdout.write(`${data.toLocaleString().length} ${fileName}`);
    break;
  }
  default: {
    data.forEach((val) => {
      if (val == 10) lines++;
      if (val == 32) words++;
    });
    process.stdout.write(`${data.byteLength} ${words} ${lines} ${fileName}`)
  }
}

process.exit(1);
