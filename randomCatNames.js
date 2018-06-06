const catNames = require('./catNames')

if (process.argv.length === 2) {
  console.log(getRandomCatName())
} else if (process.argv.length > 2) {
  const num = process.argv[2]
  for (let i = 0; i < num; i++) {
    console.log(getRandomCatName())
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

module.exports = {
  getRandomCatName,
  getAllCatNames
}
