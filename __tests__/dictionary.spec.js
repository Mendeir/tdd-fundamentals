const dictionary = require('..')

describe('dictionary', () => {
  test('should return an empty object for empty string', () => {
    expect(dictionary('')).toEqual({})
  })
  test('should count 1 for one word', () => {
    expect(dictionary('the')).toEqual({ the: 1 })
  })
})
