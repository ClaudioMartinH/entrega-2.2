import { throttle } from "./throttle.js";

let contador: number = 0;

export function showResults(): void {
  let widthPage: HTMLElement | null = document.getElementById("width");
  let heightPage: HTMLElement | null = document.getElementById("height");
  let contadorPage: HTMLElement | null = document.getElementById("contador");

  if (widthPage) {
    widthPage.innerHTML = `Ancho página (px): ${window.innerWidth}`;
  }

  if (heightPage) {
    heightPage.innerHTML = `Alto página (px): ${window.innerHeight}`;
  }

  if (contadorPage) {
    contadorPage.innerHTML = `Incremento contador: ${contador}`;
  }
}
showResults();

window.addEventListener(
  "resize",
  throttle(function () {
    contador++;
    console.log("Width: ", window.innerWidth);
    console.log("Height: ", window.innerHeight);
    console.log("Incremento del contador: ", contador);
    showResults();
  }, 500)
);
