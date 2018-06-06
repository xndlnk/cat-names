const catNames = require('./catNames')

if (isThisModuleExecuted()) {
  if (process.argv.length === 2) {
    console.log(getRandomCatName())
  } else if (process.argv.length > 2) {
    const num = process.argv[2]
    for (let i = 0; i < num; i++) {
      console.log(getRandomCatName())
    }
  }
}

function getRandomCatName () {
  const randomCatIndex = getRandomInt(catNames.length)
  return catNames[randomCatIndex]
}

function getAllCatNames () {
  return catNames
}

function getRandomInt (maxExclusive) {
  return Math.floor(Math.random() * Math.floor(maxExclusive))
}

function isThisModuleExecuted () {
  return process.argv[1].endsWith('randomCatNames.js')
}

module.exports = {
  getRandomCatName,
  getAllCatNames
}
