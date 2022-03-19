const debounce = (
  callback: (event: unknown) => void,
  duration: number
): ((event?: unknown) => void) => {
  let timer: ReturnType<typeof setTimeout>

  return (event?: unknown) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback && callback(event)
    }, duration)
  }
}

export default debounce
