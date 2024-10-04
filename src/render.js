import { RenderPosition } from './const';
/**
 * из строки создает HTML элемент
 * @param {string} template
 * @returns {HTMLElement}
 */
function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

/**
 * элемент отрисовка в родителе
 * @param {{getElement: HTMLElement}} component
 * @param {HTMLElement} container
 * @param {InsertPosition} place
 */
function render(component, container, place = RenderPosition.BEFOREEND) {
  container.insertAdjacentElement(place, component.getElement());
}

export { RenderPosition, createElement, render };
