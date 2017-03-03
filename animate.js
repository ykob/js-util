module.exports = function($elm, callback) {
  $elm.addClass('is-animate').on('transitionend', function() {
    if (callback) callback();
    $elm.addClass('is-animate-fix').off('transitionend');
  });
}
