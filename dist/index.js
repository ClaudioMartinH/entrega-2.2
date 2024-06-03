import { throttle } from "./throttle.js";
let counter = 0;
export function showResults() {
    let widthPage = document.getElementById("width");
    let heightPage = document.getElementById("height");
    let counterPage = document.getElementById("counter");
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
window.addEventListener("resize", throttle(function () {
    counter++;
    console.log("Width: ", window.innerWidth);
    console.log("Height: ", window.innerHeight);
    console.log("Counter: ", counter);
    showResults();
}, 500));
