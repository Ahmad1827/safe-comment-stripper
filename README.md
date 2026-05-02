# safe-comment-stripper

An AST-based CLI tool that safely removes comments from multiple programming languages without breaking URLs or strings.

## Supported Languages
JavaScript, TypeScript, Java, Kotlin, C, C++, Dart, and more.

## Setup

Clone the repository, install the dependencies, and link the package globally to use your custom command from anywhere.
```bash
git clone [https://github.com/YOUR_USERNAME/safe-comment-stripper.git](https://github.com/YOUR_USERNAME/safe-comment-stripper.git)
cd safe-comment-stripper
npm install
npm link
```

## Configuration

You can customize the command name by editing the `"bin"` section in `package.json` before running `npm link`.
```json
{
  "name": "safe-comment-stripper",
  "version": "1.0.0",
  "main": "index.js",
  "bin": {
    "atod": "./index.js"
  }
}
```

## Usage

Run your custom command, passing the path to the file you want to clean. The tool will process and overwrite the target file in place.
```bash
atod path/to/your/file.js
```

```bash
atod app/src/main/java/com/example/app/MainActivity.kt
```