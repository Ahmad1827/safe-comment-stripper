# safe-comment-stripper

An AST-based CLI tool that safely removes comments from multiple programming languages without breaking URLs or strings.

## Why use this over Regex?
Basic regex solutions often accidentally delete valid code, such as `https://google.com` inside a string. This tool relies on an Abstract Syntax Tree (AST) parser (`strip-comments`) to safely distinguish actual comments from string contents.

## Supported Languages
JavaScript, TypeScript, Java, Kotlin, C, C++, Dart, and more.

## Setup

Clone the repository and install the dependencies:
```bash
git clone [https://github.com/YOUR_USERNAME/safe-comment-stripper.git](https://github.com/YOUR_USERNAME/safe-comment-stripper.git)
cd safe-comment-stripper
npm install
```

## Usage

Run the script using Node, passing the path to the file you want to clean. The tool will process and overwrite the target file in place.
```bash
node index.js path/to/your/file.js
```

Example with an Android Kotlin file:

```bash
node index.js app/src/main/java/com/example/app/MainActivity.kt
```
