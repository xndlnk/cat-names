#!/usr/bin/env node
const catNames = require('./main')

if (process.argv.length === 2) {
  console.log(catNames.getRandomCatName())
} else if (process.argv.length > 2) {
  const num = process.argv[2]
  for (let i = 0; i < num; i++) {
    console.log(catNames.getRandomCatName())
  }
}
