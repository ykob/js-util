var easeExponentialInOut = function(t) {
  return t == 0.0 || t == 1.0
    ? t
    : t < 0.5
      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}

module.exports = function(elm, duration) {
  var self = this;
  this.elm = elm;
  this.target = document.getElementById(elm.getAttribute('href').replace('#', ''));
  this.scrollTopBefore = 0;
  this.scrollTopAfter = 0;
  this.timeClick = 0;
  this.isScrolling = false;
  this.duration = (duration) ? duration : 1000;

  this.render = function() {
    var time = Date.now() - self.timeClick;
    window.scrollTo(0, self.scrollTopBefore + (self.scrollTopAfter - self.scrollTopBefore) * Math.min(easeExponentialInOut(time / self.duration, 1)));
    if (time < self.duration) {
      requestAnimationFrame(self.render);
    } else {
      self.isScrolling = false;
    }
  }

  this.elm.addEventListener('click', function(event) {
    event.preventDefault();
    if (self.isScrolling) return;
    var targetRect = self.target.getBoundingClientRect();
    self.timeClick = Date.now();
    self.isScrolling = true;
    self.scrollTopBefore = window.pageYOffset;
    self.scrollTopAfter = self.scrollTopBefore + targetRect.top;
    self.render();
  }, false)
}
