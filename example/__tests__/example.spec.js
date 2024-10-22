require('../example')
const example = window.example;

beforeAll(() => {
  console.log('before all called')
})

afterAll(() => {
  console.log('after all called')
})

beforeEach(() => {
  console.log('before each called')
})

describe("our example module", () => {
  test("example", () => {
    const name = 'Mark'
    const expected = example.hello(name)
    expect(expected).toEqual("Hello Mark");
  });
  test("should be defined", () => {
    expect(typeof example).toEqual("object");
  })
});
