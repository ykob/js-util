import {
  clamp,
  degrees,
  mix,
  radians,
  randomArbitrary,
  randomInt,
  smoothstep,
  spherical,
  step,
} from '../modules/MathEx'

const random = jest.spyOn(global.Math, 'random')

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

describe('mix', () => {
  test('basic', () => {
    expect(mix(-100, 100, 0.25)).toBe(-50)
  })

  test('the alpha argument value is more than 1.', () => {
    expect(mix(-100, 100, 1.1)).toBeCloseTo(120, 5)
  })

  test('the alpha argument value is less than 0.', () => {
    expect(mix(-100, 100, -0.1)).toBeCloseTo(-120, 5)
  })
})

test('degrees', () => {
  expect(degrees(Math.PI * 0.5)).toBe(90)
})

test('radians', () => {
  expect(radians(90)).toBe(Math.PI * 0.5)
})

describe('using Math.random', () => {
  describe('Math.random return 0', () => {
    beforeEach(() => {
      random.mockReturnValue(0)
    })

    test('randomArbitrary', () => {
      expect(randomArbitrary(1, 10)).toBeCloseTo(1, 3)
    })

    test('randomInt', () => {
      expect(randomInt(1, 10)).toBe(1)
    })
  })

  describe('Math.random return 0.25', () => {
    beforeEach(() => {
      random.mockReturnValue(0.25)
    })

    test('randomArbitrary', () => {
      expect(randomArbitrary(1, 10)).toBeCloseTo(3.25, 3)
    })

    test('randomInt', () => {
      expect(randomInt(1, 10)).toBe(3)
    })
  })

  describe('Math.random return 0.5', () => {
    beforeEach(() => {
      random.mockReturnValue(0.5)
    })

    test('randomArbitrary', () => {
      expect(randomArbitrary(1, 10)).toBeCloseTo(5.5, 3)
    })

    test('randomInt', () => {
      expect(randomInt(1, 10)).toBe(6)
    })
  })

  describe('Math.random return 0.75', () => {
    beforeEach(() => {
      random.mockReturnValue(0.75)
    })

    test('randomArbitrary', () => {
      expect(randomArbitrary(1, 10)).toBeCloseTo(7.75, 3)
    })

    test('randomInt', () => {
      expect(randomInt(1, 10)).toBe(8)
    })
  })

  describe('Math.random return 0.99999', () => {
    beforeEach(() => {
      random.mockReturnValue(0.99999)
    })

    test('randomArbitrary', () => {
      expect(randomArbitrary(1, 10)).toBeCloseTo(10, 3)
    })

    test('randomInt', () => {
      expect(randomInt(1, 10)).toBe(10)
    })
  })
})

describe('smoothstep', () => {
  test('the alpha argument value is more than 1.', () => {
    expect(smoothstep(-100, 100, 110)).toBeCloseTo(1, 5)
  })

  test('the alpha argument value is less than 0.', () => {
    expect(smoothstep(-100, 100, -110)).toBeCloseTo(0, 5)
  })

  test('the alpha argument value is at the midpoint.', () => {
    expect(smoothstep(-100, 100, 0)).toBeCloseTo(0.5, 5)
  })
})

describe('spherical', () => {
  test('the position to back', () => {
    const p = spherical(radians(90), 0, 10)

    expect(p[0]).toBeCloseTo(10, 5)
    expect(p[1]).toBeCloseTo(0, 5)
    expect(p[2]).toBeCloseTo(0, 5)
  })

  test('the position to top', () => {
    const p = spherical(0, radians(90), 10)

    expect(p[0]).toBeCloseTo(0, 5)
    expect(p[1]).toBeCloseTo(10, 5)
    expect(p[2]).toBeCloseTo(0, 5)
  })
})

describe('step', () => {
  describe('the edge is 10', () => {
    const e = 10

    test('and the value is -10.', () => {
      expect(step(e, -10)).toBe(0)
    })

    test('and the value is 10.', () => {
      expect(step(e, 10)).toBe(1)
    })

    test('and the value is 20.', () => {
      expect(step(e, 20)).toBe(1)
    })
  })
})
