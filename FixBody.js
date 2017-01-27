module.exports = class FixBody {
  constructor() {
    this.top = 0;
  }
  set() {
    this.top = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.marginTop = `${this.top * -1}px`;
  }
  cancel() {
    document.body.style.position = 'static';
    document.body.style.marginTop = 0;
    window.scrollTo(0, this.top);
  }
}
