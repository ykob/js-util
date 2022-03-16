import zeroPadding from '../modules/zeroPadding'

test('basic', () => {
  expect(zeroPadding(1, 2)).toBe('01')
})

test('multiple digits', () => {
  expect(zeroPadding(123, 6)).toBe('000123')
})
