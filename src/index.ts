import { throttle } from "./throttle.js";

let contador: number = 0;

export function showResults(): void {
  let widthPage: HTMLElement | null = document.getElementById("width");
  let heightPage: HTMLElement | null = document.getElementById("height");
  let contadorPage: HTMLElement | null = document.getElementById("contador");

  contador++;
  if (widthPage) {
    widthPage.innerHTML = `Width: ${window.innerWidth}`;
  }

  if (heightPage) {
    heightPage.innerHTML = `Height: ${window.innerHeight}`;
  }

  if (contadorPage) {
    contadorPage.innerHTML = `Counter: ${contador}`;
  }
  console.log(
    "Width: ",
    window.innerWidth,
    "Height: ",
    window.innerHeight,
    "Counter: ",
    contador
  );
}
showResults();                                                     

window.addEventListener(
  "resize",
  throttle(function () {
    showResults();
  }, 500)
);
