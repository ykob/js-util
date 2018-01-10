module.exports = function(num) {
  var numArr = String(num).split('');
  for (var i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i]);
  }
  return numArr;
}
