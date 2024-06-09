import { throttle } from "./throttle.js";

let count: number = 0;

export function restartCount(): number {
    return count = 0;
};
export function addCount(): number {
  return count++;
}


export function showResults(): void {
  let widthPage: HTMLElement | null = document.getElementById("width");
  let heightPage: HTMLElement | null = document.getElementById("height");
  let contadorPage: HTMLElement | null = document.getElementById("contador");

  restartCount();
  addCount();
  if (widthPage) {
    widthPage.innerHTML = `Width: ${window.innerWidth}`;
  }

  if (heightPage) {
    heightPage.innerHTML = `Height: ${window.innerHeight}`;
  }

  if (contadorPage) {
    contadorPage.innerHTML = `Counter: ${count}`;
  }
  console.log(
    "Width: ",
    window.innerWidth,
    "Height: ",
    window.innerHeight,
    "Counter: ",
    count
  );
}
restartCount();
                                                  

window.addEventListener(
  "resize",
  throttle(function () {
    showResults();
  }, 500)
);
restartCount();