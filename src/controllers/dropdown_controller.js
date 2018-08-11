import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['menu'];

  initialize() {
    this.content = this.data.get('content');
    this.open = false;
  }

  detectHide(e) {
    if (!e.target.closest(this.scope.controllerSelector)) {
      this.hide();
    }
  }

  hide() {
    this.menuTarget.classList.add('hidden');
    this.open = false;
  }

  toggle() {
    if (this.open) {
      this.hide();
    } else {
      this.menuTarget.classList.remove('hidden');
      this.open = true;
    }
  }
}
