export function getDomElement(selector: string) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Element with selector '${selector}' not found.`);
  }
  return element;
}
