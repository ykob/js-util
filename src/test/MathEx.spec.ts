import {
  clamp,
  degrees,
  radians,
} from '../modules/MathEx'

test('clamp', () => {
  expect(clamp(1.5, 0, 1)).toBe(1)
})

test('degrees', () => {
  expect(degrees(Math.PI * 0.5)).toBe(90)
})

test('radians', () => {
  expect(radians(90)).toBe(Math.PI * 0.5)
})
