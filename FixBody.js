var FixBody = function () {
  this.top = 0;
}
FixBody.prototype.set = function() {
  this.top = window.pageYOffset;
  document.body.style.position = 'fixed';
  document.body.style.marginTop = this.top * -1 + 'px';
}
FixBody.prototype.cancel = function() {
  document.body.style.position = 'static';
  document.body.style.marginTop = 0;
  window.scrollTo(0, this.top);
}
module.exports = FixBody;
