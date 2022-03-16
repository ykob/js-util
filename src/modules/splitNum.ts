const splitNum = (num: number): number[] => {
  return String(Math.abs(Math.floor(num)))
    .split('')
    .map((o) => parseInt(o))
}

export default splitNum
