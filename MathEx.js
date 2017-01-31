module.exports = class MathEx {
  constructor() {
  }
  degrees(radian) {
    return radian / Math.PI * 180;
  }
  radians(degree) {
    return degree * Math.PI / 180;
  }
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  mix(x1, x2, a) {
    return x1 * (1 - a) + x2 * a;
  }
  polar(radian1, radian2, radius) {
    return [
      Math.cos(radian1) * Math.cos(radian2) * radius,
      Math.sin(radian1) * radius,
      Math.cos(radian1) * Math.sin(radian2) * radius,
    ];
  }
}