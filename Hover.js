module.exports = function(elm) {
  var self = this;
  this.elm = elm;
  this.isTouched = false;

  this.elm.addEventListener('touchstart', function() {
    this.isTouched = true;
  }, false);
  this.elm.addEventListener('mouseover', function() {
    if (this.isTouched) {
      this.isTouched = false;
    } else {
      self.elm.classList.remove('is-leave');
      self.elm.classList.add('is-over');
    }
  }, false);
  this.elm.addEventListener('mouseleave', function() {
    if (this.isTouched) return;
    self.elm.classList.remove('is-over');
    self.elm.classList.add('is-leave');
  }, false);
  this.elm.addEventListener('transitionend', function() {
    if (self.elm.classList.contains('is-leave')) {
      self.elm.classList.remove('is-leave');
    }
  }, false);
  this.elm.addEventListener('animationend', function() {
    if (self.elm.classList.contains('is-leave')) {
      self.elm.classList.remove('is-leave');
    }
  }, false);
}
