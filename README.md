# Node.js ESM Starter


> Minimal starter I use for Node.js scripts or packages

![tests](https://github.com/hawyar/node-lib-starter/actions/workflows/test.yml/badge.svg)

## Usage
Use as tempalte (green button) or just

```bash
git clone https://github.com/hawyar/node-esm-starter.git
```

## Doc
Using [JSDoc](https://jsdoc.app/index.html) for documentation

```bash
npm run build:docs
```

and to preview docs on 
```bash
npm run serve:docs
```


## Testing
- [tap](https://node-tap.org/) for testing
```bash
npm run test
```

## Build
- [esbuild](https://esbuild.github.io/) for bundling JS
```bash
npm run build:node
```
- [pkg](https://github.com/vercel/pkg) for packaging the JS files into an executable
```bash
npm run build:exec
```

or you can do both in one go

```bash
npm run build
```