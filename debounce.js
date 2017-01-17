module.exports = function(callback, duration) {
  var timer;
  return function(event) {
    clearTimeout(timer);
    timer = setTimeout(function(){
      callback(event);
    }, duration);
  };
}
