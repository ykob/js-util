import debounce from '../modules/debounce'

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

test('debounce', () => {
  const callback = jest.fn()
  const debounceFunction = debounce(callback, 1000)

  debounceFunction()
  expect(setTimeout).toHaveBeenCalledTimes(1)
})
