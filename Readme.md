# qr-gen

## Generate an SVG QR Code

Generate a QR code as an SVG image. 

### Installation

From the root of the qr-gen codebase's directory, run

```sh
npm run build
```

Then, to install it as an command line tool globally

```sh
npm install -g .
```

### Usage

- Generate a QR code called `qr-code.svg` that points to `https://example.com`

```sh
qr-gen https://example.com
```

- Generate a QR code called `example.svg` that points to `https://example.com`

```sh
qr-gen https://example.com -f example
```

### Options

```
  -V, --version              output the version number
  -c, --color  [value]       A hex color for the foreground. Default to black
  -b, --background  [value]  A hex color for the background. Default to white
  -f, --filename [value]     The file name. Defaults to qr-code.svg
  -h, --help                 display help for command
```