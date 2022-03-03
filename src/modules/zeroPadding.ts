const zeroPadding = (num: number, digit: number): string => {
  return (Array(digit + 1).join('0') + num).slice(-digit)
}

export default zeroPadding
