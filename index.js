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
const ext = path.extname(absolutePath).toLowerCase();


const languageMap = {
    '.py': 'python',
    '.rb': 'ruby',
    '.php': 'php',
    '.html': 'html',
    '.css': 'css',
    '.c': 'c',
    '.cpp': 'cpp',
    '.java': 'java',
    '.kt': 'java', 
    '.js': 'javascript',
    '.ts': 'javascript',
    '.dart': 'javascript'
};


const lang = languageMap[ext] || 'javascript'; 

try {
    const code = fs.readFileSync(absolutePath, 'utf8');
    
    
    const cleanCode = strip(code, { language: lang });
    
    fs.writeFileSync(absolutePath, cleanCode);
    console.log(`Stripped: ${absolutePath} (Detected language: ${lang})`);
} catch (error) {
    console.error('Failed to process the file.', error);
    process.exit(1);
}