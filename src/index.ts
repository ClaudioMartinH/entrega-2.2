import { throttle } from "./throttle.js";

let contador: number = 0;

export function showResults(): void {
  let widthPage: HTMLElement | null = document.getElementById("width");
  let heightPage: HTMLElement | null = document.getElementById("height");
  let contadorPage: HTMLElement | null = document.getElementById("contador");

  if (widthPage) {
    widthPage.innerHTML = `Width: ${window.innerWidth}`;
  }

  if (heightPage) {
    heightPage.innerHTML = `Height: ${window.innerHeight}`;
  }

  if (contadorPage) {
    contadorPage.innerHTML = `Counter: ${contador}`;
  }
}
showResults();

window.addEventListener(
  "resize",
  throttle(function () {
    contador++;
    console.log("Width: ", window.innerWidth);
    console.log("Height: ", window.innerHeight);
    console.log("Counter: ", contador);
    showResults();
  }, 500)
);
