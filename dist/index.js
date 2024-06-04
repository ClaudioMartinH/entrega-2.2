import { throttle } from "./throttle.js";
let contador = 0;
export function showResults() {
    let widthPage = document.getElementById("width");
    let heightPage = document.getElementById("height");
    let contadorPage = document.getElementById("contador");
    if (widthPage) {
        widthPage.innerHTML = `Width: ${window.innerWidth}`;
    }
    if (heightPage) {
        heightPage.innerHTML = `Height: ${window.innerHeight}`;
    }
    if (contadorPage) {
        contadorPage.innerHTML = `Counter: ${contador}`;
    }
    contador++;
    console.log("Width: ", window.innerWidth, "Height: ", window.innerHeight, "Counter: ", contador);
}
showResults();
window.addEventListener("resize", throttle(function () {
    showResults();
}, 500));
