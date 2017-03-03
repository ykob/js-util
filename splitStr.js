module.exports = function(str, className) {
  const strArr = str.split('');
  let html = '';
  for (var i = 0; i < strArr.length; i++) {
    html += '<span class="' + className + '">';
    html += (strArr[i] == ' ') ? '&nbsp' : strArr[i];
    html += '</span>';
  }
  return html;
}
