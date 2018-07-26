module.exports = function(delay) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
}
