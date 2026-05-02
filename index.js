#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const strip = require('strip-comments');

const targetPath = process.argv[2];

if (!targetPath) {
    console.error('Please provide a file path.');
    process.exit(1);
}

const absolutePath = path.resolve(targetPath);

try {
    const code = fs.readFileSync(absolutePath, 'utf8');
    const cleanCode = strip(code);
    fs.writeFileSync(absolutePath, cleanCode);
    console.log(`Stripped: ${absolutePath}`);
} catch (error) {
    console.error('Failed to process the file.');
    process.exit(1);
}
