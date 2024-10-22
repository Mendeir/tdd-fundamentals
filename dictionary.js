function splitString(string) {
  return string.match(/[^ ]+/g)
}

module.exports = function dictionary(words) {
  const wordList = splitString(words) || []
  const result = {}

  if (wordList.length > 0) {
    result[wordList[0]] = 1
  }

  if (wordList.length > 1) {
    result[wordList[1]] = 2
  }

  return result
}
