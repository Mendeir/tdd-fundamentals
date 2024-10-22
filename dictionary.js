function splitString(string) {
  return string.match(/[^ ]+/g)
}

module.exports = function dictionary(words) {
  const wordList = splitString(words) || []
  const result = {}
  wordList.forEach(word => {
    result[word] = result[word] + 1 || 1
  })

  return result
}
