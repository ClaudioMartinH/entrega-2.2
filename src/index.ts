import { throttle } from "./throttle.js";

let counter: number = 0;

export function showResults(): void {
  let widthPage: HTMLElement | null = document.getElementById("width");
  let heightPage: HTMLElement | null = document.getElementById("height");
  let counterPage: HTMLElement | null = document.getElementById("counter");

  if (widthPage) {
    widthPage.innerHTML = `Width: ${window.innerWidth}`;
  }

  if (heightPage) {
    heightPage.innerHTML = `Height: ${window.innerHeight}`;
  }

  if (counterPage) {
    counterPage.innerHTML = `Contador: ${counter}`;
  }
}
showResults();

window.addEventListener(
  "resize",
  throttle(function () {
    counter++;
    console.log("Width: ", window.innerWidth);
    console.log("Height: ", window.innerHeight);
    console.log("Counter: ", counter);
    showResults();
  }, 500)
);
