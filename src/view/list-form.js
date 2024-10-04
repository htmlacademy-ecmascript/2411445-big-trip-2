//  лист
import { createElement } from '/src/render.js';


function sampleTripEventListFormTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ListFormView {
  constructor (){}
  getTemplate() {
    return sampleTripEventListFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
