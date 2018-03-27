module.exports = function() {
  var self = this;
  this.scrollTopBefore = 0;
  this.scrollTopAfter = 0;
  this.timeClick = 0;
  this.isScrolling = false;
  this.duration = 0;
  this.easingFunc = null;

  this.render = function() {
    var time = Date.now() - self.timeClick;
    window.scrollTo(0, self.scrollTopBefore + (self.scrollTopAfter - self.scrollTopBefore) * Math.min(self.easingFunc(time / self.duration, 1)));
    if (time < self.duration) {
      requestAnimationFrame(self.render);
    } else {
      self.isScrolling = false;
    }
  }
  this.start = function(anchorY, duration, easingFunc) {
    if (self.isScrolling) return;
    this.duration = (duration) ? duration : 1000;
    this.easingFunc = (easingFunc) ? easingFunc : function(t) {
      return t;
    };
    self.timeClick = Date.now();
    self.isScrolling = true;
    self.scrollTopBefore = window.pageYOffset;
    self.scrollTopAfter = anchorY;
    self.render();
  }
}
