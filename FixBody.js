var FixBody = function () {
  this.top = 0;
  this.isFixed = false;
  this.set = function() {
    this.top = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.marginTop = this.top * -1 + 'px';
    this.isFixed = true;
  }
  this.cancel = function() {
    if (this.isFixed === false) return;
    document.body.style.position = 'static';
    document.body.style.marginTop = 0;
    window.scrollTo(0, this.top);
    this.isFixed = false;
  }
}
module.exports = FixBody;
