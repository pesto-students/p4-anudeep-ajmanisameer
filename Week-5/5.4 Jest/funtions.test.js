const mathOperation = require('./functions')

test('Adds  2 values', () => {
  expect(mathOperation.sum(2, 3)).toBe(5)
})

test('Diff of 2 values', () => {
  expect(mathOperation.diff(2, 3)).toBe(-1)
})

test('Product of 2 values', () => {
  expect(mathOperation.product(2, 3)).toBe(6)
})

