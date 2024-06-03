import { throttle } from "./throttle.js";
let contador = 0;
export function showResults() {
    let widthPage = document.getElementById("width");
    let heightPage = document.getElementById("height");
    let contadorPage = document.getElementById("contador");
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
window.addEventListener("resize", throttle(function () {
    contador++;
    console.log("Width: ", window.innerWidth);
    console.log("Height: ", window.innerHeight);
    console.log("Counter: ", contador);
    showResults();
}, 500));
