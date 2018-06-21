module.exports = function(num, digit) {
  return (Array(digit + 1).join('0') + num).slice(-digit);
};
