## Node.js lib starter

![tests](https://github.com/hawyar/node-lib-starter/actions/workflows/test.yml/badge.svg)

> Often I find myself setting something similar for scripts or libs. This is an opinionated starter

## Usage

Use as template (green button) or just clone it

```bash
git clone https://github.com/hawyar/node-lib-starter.git your_lib_name
```

### Test

Tests using [tap](https://node-tap.org/)

```bash
npm run test
```

### Docs

Docs generated using [jsodc](https://jsdoc.app/)

```bash
npm run generate:docs
```

### Build

Bundle to CommonJS and ES Module using [esbuild](https://esbuild.github.io/). Package JS files into an executable with [pkg](https://github.com/vercel/pkg)

```bash
npm run build
```
