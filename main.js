const catNames = require('./catNames')

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
