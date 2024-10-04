import { render } from '/src/render.js';
import CreationFormView from '/src/view/creation-form-view.js';
import WaypointView from '/src/view/waypoint-view.js';
import ListFormView from '/src/view/list-form.js';


export default class BoardPresenter {
  presenterComponent = new ListFormView();


  init() {

    const rootElement = document.querySelector('.trip-events');
    render(this.presenterComponent, rootElement);
    render(new CreationFormView(), this.presenterComponent.getElement());
    render(new WaypointView(), this.presenterComponent.getElement());
    render(new WaypointView(), this.presenterComponent.getElement());
    render(new WaypointView(), this.presenterComponent.getElement());
  }
}
