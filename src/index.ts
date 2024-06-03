import { throttle } from "./throttle.js";

let contador: number = 0;

function showResults(): string {
  let widthPage: HTMLElement | null = document.getElementById("width");
  let heightPage: HTMLElement | null = document.getElementById("height");
  
  if (heightPage && widthPage) {
    return (widthPage.innerHTML = `Height: ${window.innerHeight} Width: ${window.innerWidth}`);
  } else {
    return "0";
  }
}

window.addEventListener(
  "resize",
  throttle(function (evt: any) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    let widthPage: HTMLElement | null = document.getElementById("width");
    contador ++;
    console.log("Numero de veces disparado el contador: ", contador)
    let heightPage: HTMLElement | null = document.getElementById("height");

    if (heightPage && widthPage) {
      return (widthPage.innerHTML = 
        `Width: ${window.innerWidth} <br>
         Height: ${window.innerHeight} <br>
         Contador: ${contador++}`);
    } else {
      return "0";
    }
  }, 250)
);
showResults();
