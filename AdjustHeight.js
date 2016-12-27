export default class AdjustHeight {
  constructor($elm, num) {
    this.$elm = $elm;
    this.$elms = [];
    this.num = num;
    this.max = 0;
    this.adjust();
    this.setEvent();
  }
  adjust() {
    const _this = this;
    this.$elm.each(function(i) {
      const height = $(this).height();
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
  setEvent() {
    $(window).on('resize', () => {
      this.$elm.attr('style', '');
      this.adjust();
    });
  }
}
