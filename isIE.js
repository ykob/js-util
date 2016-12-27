module.exports = function() {
  const ua = navigator.userAgent;
  return (ua.indexOf("MSIE") > -1 || ua.indexOf("rv:11.0") > -1);
}
