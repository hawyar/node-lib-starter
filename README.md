# Node.js lib starter


> Minimal starter for Node.js scripts or packages

![tests](https://github.com/hawyar/node-lib-starter/actions/workflows/test.yml/badge.svg)

## Usage
Use as template (green button) or just

```bash
git clone https://github.com/hawyar/node-lib-starter.git
```

## Doc

```bash
npm run generate:docs
```

and to preview docs locally 

```bash
npm run serve:docs
```

Generate types from JSDoc

```bash
npm run generate:types
```


## Testing

Using [tap](https://node-tap.org/) for testing

```bash
npm run test
```

## Build

Using [esbuild](https://esbuild.github.io/) for bundling JS

```bash
npm run build:node
```

and [pkg](https://github.com/vercel/pkg) for packaging the JS files into an executable

```bash
npm run build:exec
```
or build all

```bash
npm run build
```




