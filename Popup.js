module.exports = function($elm, name, width, height) {
  this.$elm = $elm;
  this.href = $elm.attr('href');
  this.name = (name) ? name : '';
  this.width = (width) ? width : 600;
  this.height = (height) ? height : 400;

  this.open = function() {
    window.open(
      this.href,
      this.name,
      'width=' + this.width + ',height=' + this.height
    );
  };

  var _this = this;
  this.$elm.on('click', function() {
    _this.open();
    return false;
  });
};
