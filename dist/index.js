import { throttle } from "./throttle.js";
let count = 0;
export function restartCount() {
    return count = 0;
}
;
export function addCount() {
    return count++;
}
export function showResults() {
    let widthPage = document.getElementById("width");
    let heightPage = document.getElementById("height");
    let contadorPage = document.getElementById("contador");
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
    console.log("Width: ", window.innerWidth, "Height: ", window.innerHeight, "Counter: ", count);
}
restartCount();
window.addEventListener("resize", throttle(function () {
    showResults();
}, 500));
restartCount();
