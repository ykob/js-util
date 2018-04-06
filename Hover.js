module.exports = function(elm) {
  var self = this;
  this.elm = elm;
  this.isTouched = false;

  this.elm.addEventListener('touchstart', function() {
    self.isTouched = true;
  }, false);
  this.elm.addEventListener('touchstartend', function() {
    self.isTouched = false;
  }, false);
  this.elm.addEventListener('mouseover', function() {
    if (self.isTouched) return;
    self.elm.classList.remove('is-leave');
    self.elm.classList.add('is-over');
  }, false);
  this.elm.addEventListener('mouseleave', function() {
    if (self.isTouched) return;
    self.elm.classList.remove('is-over');
    self.elm.classList.add('is-leave');
  }, false);
}
