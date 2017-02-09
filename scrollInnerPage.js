module.exports = function(top, duration, easing) {
  $('html, body').animate({
    scrollTop: top
  }, duration, easing);
}
