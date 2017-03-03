module.exports = function(str, className) {
  var strArr = str.split('');
  var html = '';
  for (var i = 0; i < strArr.length; i++) {
    html += '<span class="' + className + '">';
    html += (strArr[i] == ' ') ? '&nbsp' : strArr[i];
    html += '</span>';
  }
  return html;
}
