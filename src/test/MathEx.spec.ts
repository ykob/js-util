import {
  clamp,
} from '../modules/MathEx'

test('clamp', () => {
  expect(clamp(1.5, 0, 1)).toBe(1)
})
