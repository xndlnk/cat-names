# cat-names

this npm package provides the top 100 most adorable and cute cat names randomly.

![cute cat](cute-cat.jpeg "cute cat")

## Install

`npm install @pnkbrn/cat-names`

## API

- getRandomCatName() returns a random cat name
- getAllCatNames() returns an array of all the cute cat names

## Usage

### Library

```
const catNames = require('@pnkbrn/cat-names')
console.log(catNames.getRandomCatName())
```

### CLI

`npx @pnkbrn/cat-names` outputs 1 cat name

`npx @pnkbrn/cat-names 4` outputs 4 cat names
