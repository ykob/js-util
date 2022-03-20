export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}
export const degrees = (radians: number): number => {
  return (radians / Math.PI) * 180
}
export const mix = (x0: number, x1: number, a: number): number => {
  return x0 * (1 - a) + x1 * a
}
export const radians = (degrees: number): number => {
  return (degrees * Math.PI) / 180
}
export const randomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}
export const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const smoothstep = (e0: number, e1: number, x: number): number => {
  if (e0 >= e1) return 0
  const t = clamp((x - e0) / (e1 - e0), 0, 1)
  return t * t * (3 - 2 * t)
}
export const spherical = (
  radian1: number,
  radian2: number,
  radius: number
): [number, number, number] => {
  return [
    Math.sin(radian1) * Math.cos(radian2) * radius,
    Math.cos(radian1) * radius,
    Math.sin(radian1) * Math.sin(radian2) * radius,
  ]
}
export const step = (e: number, x: number): number => {
  return x >= e ? 1 : 0
}

export default {
  clamp,
  degrees,
  mix,
  radians,
  randomArbitrary,
  randomInt,
  smoothstep,
  spherical,
  step,
}
