module.exports = function($elm, num) {
  this.$elm = $elm;
  this.$elms = [];
  this.num = num;
  this.max = 0;

  this.adjust = function() {
    var _this = this;
    this.$elm.each(function(i) {
      var height = $(this).height();
      if (height > _this.max) {
        _this.max = height;
      }
      _this.$elms.push($(this));
      if ((i + 1) % _this.num == 0 || i + 1 == _this.$elm.length) {
        for (var j = 0; j < _this.$elms.length; j++) {
          _this.$elms[j].css('height', _this.max);
        }
        _this.max = 0;
        _this.$elms = [];
      }
    });
  }
  this.resize = function() {
    this.$elm.attr('style', '');
    this.adjust();
  }

  this.adjust();
}
