#! /usr/bin/env node

import QRCode from 'qrcode-svg';
import { Command } from 'commander';
import ValidUrl from 'valid-url';

const program = new Command();

program.version("0.1.0")
    .description("Generate a QR code svg")
    .option("-c, --color  [value]", "A hex color for the foreground. Default to black")
    .option("-b, --background  [value]", "A hex color for the background. Default to white")
    .option("-f, --filename [value]", "The file name. Defaults to qr-code.svg")
    .parse(process.argv);

const options = program.opts();

const url = program.args[0];

if (typeof url !== 'string' || !ValidUrl.isUri(url)) {
    throw new Error('Invalid URL. Usage: qr-gen https://example.com');
}

let filename = options.filename || 'qr-code.svg';
const splitFilename = filename.split('.');
if (splitFilename[splitFilename.length - 1] !== 'svg') {
    filename = filename + '.svg';
}

var qrcode = new QRCode({
    content: url,
    padding: 4,
    width: 256,
    height: 256,
    color: options.color || "#000000",
    background: options.background || "#ffffff",
    ecl: "M",
  });
  qrcode.save(filename, function(error) {
    if (error) throw error;
    console.log("Generated QR Code and saved it to file:");
    console.log(filename);
  });
  