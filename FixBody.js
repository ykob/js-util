export default class FixBody {
  constructor() {
    this.$window = $(window);
    this.$body = $('body');
    this.top = 0;
  }
  set() {
    this.top = this.$window.scrollTop()
    this.$body.css({
      position: 'fixed',
      marginTop: this.top * -1
    });
  }
  cancel() {
    this.$body.css({
      position: 'static',
      marginTop: 0
    });
    this.$window.scrollTop(this.top)
  }
}
