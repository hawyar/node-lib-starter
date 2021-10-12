# Node.js ESM Starter

> My Node.js ESModules starter that I use often

![tests](https://github.com/hawyar/node-esm-starter/actions/workflows/test.yaml/badge.svg)

## Usage
`Use this as template` or

```bash
git clone https://github.com/hawyar/node-esm-starter.git
```

## Doc
- [JSDoc](https://jsdoc.app/index.html) for generating docs

```bash
npm run build:docs
```

It also includes a local server for previewing the docs.
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