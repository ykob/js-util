import splitNum from '../modules/splitNum'

test('integer', () => {
  expect(splitNum(123)).toEqual([1, 2, 3])
})

test('float', () => {
  expect(splitNum(123.456)).toEqual([1, 2, 3])
})
