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
        contadorPage.innerHTML = `Contador: ${contador}`;
    }
}
showResults();
window.addEventListener("resize", throttle(function () {
    contador++;
    console.log("Width: ", window.innerWidth);
    console.log("Height: ", window.innerHeight);
    console.log("Contador: ", contador);
    showResults();
}, 500));
