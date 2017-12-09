module.exports = {
  degrees: function(radian) {
    return radian / Math.PI * 180;
  },
  radians: function(degree) {
    return degree * Math.PI / 180;
  },
  clamp: function(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },
  mix: function(x1, x2, a) {
    return x1 * (1 - a) + x2 * a;
  },
  polar: function(radian1, radian2, radius) {
    return [
      Math.cos(radian1) * Math.cos(radian2) * radius,
      Math.sin(radian1) * radius,
      Math.cos(radian1) * Math.sin(radian2) * radius,
    ];
  },
  randomArbitrary: function(min, max) {
    return Math.random() * (max - min) + min;
  },
  randomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
}
