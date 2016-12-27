module.exports = function(top, duration = 400, easing = 'linear') {
  $('html, body').animate({
    scrollTop: top
  }, duration, easing);
}
