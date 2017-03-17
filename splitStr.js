module.exports = function(str, className, hasWrap) {
  var strArr = str.split('');
  var html = '';
  if (hasWrap) {
    for (var i = 0; i < strArr.length; i++) {
      if (i == 0) html += '<span class="' + className + '-wrap">';
      html += '<span class="' + className + ' ' + className + '--' + (i + 1) + '">';
      html += (strArr[i] == ' ') ? '&nbsp' : strArr[i];
      html += '</span>';
      if (strArr[i] == ' ') html += '</span><span class="' + className + '-wrap">';
      if (i == strArr.length - 1) html += '</span>';
    }
  } else {
    for (var i = 0; i < strArr.length; i++) {
      html += '<span class="' + className + ' ' + className + '--' + (i + 1) + '">';
      html += (strArr[i] == ' ') ? '&nbsp' : strArr[i];
      html += '</span>';
    }
  }
  return html;
}
