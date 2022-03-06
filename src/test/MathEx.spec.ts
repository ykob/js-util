import {
  clamp,
  degrees,
  radians,
} from '../modules/MathEx'

describe('clamp', () => {
  describe('range is from 0 to 1', () => {
    const min = 0
    const max = 1

    test('value is less than 0.', () => {
      expect(clamp(-1, min, max)).toBe(min)
    })
  
    test('value is more than 1.', () => {
      expect(clamp(2, min, max)).toBe(max)
    })

    test('value is within the range.', () => {
      const value = 0.5

      expect(clamp(value, min, max)).toBe(value)
    })
  })

  describe('range is from -100 to 100', () => {
    const min = -100
    const max = 100

    test('value is less than 0.', () => {
      expect(clamp(-200, min, max)).toBe(min)
    })
  
    test('value is more than 1.', () => {
      expect(clamp(200, min, max)).toBe(max)
    })

    test('value is within the range.', () => {
      const value = 10

      expect(clamp(value, min, max)).toBe(value)
    })
  })
})

test('degrees', () => {
  expect(degrees(Math.PI * 0.5)).toBe(90)
})

test('radians', () => {
  expect(radians(90)).toBe(Math.PI * 0.5)
})
