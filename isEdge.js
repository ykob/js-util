module.exports = function() {
  const ua = navigator.userAgent;
  return (ua.indexOf("Edge") > -1);
}