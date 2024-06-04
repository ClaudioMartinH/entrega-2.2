import { JSDOM } from "jsdom";
import readline from "readline";
import chalk from "chalk";


const { window } = new JSDOM(`<!DOCTYPE html><html><body>
  <div id="width"></div>
  <div id="height"></div>
  <div id="contador"></div>
</body></html>`);
global.window = window as any;
global.document = window.document;

let counter = 0;

function showResults(): void {
  counter++;
  console.log(
    "Width: ",
    window.innerWidth,
    "Height: ",
    window.innerHeight,
    "Counter: ",
    counter
  );
}

console.log(
  chalk.blue(
    "Hola, vamos a comprobar la funcionalidad throttle de la funcion showResults."
  )
);


const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  chalk.green(
    "Presiona 'Enter' para mostrar las medidas iniciales y 'r' para simular un evento de resize: "
  ),
  (answer) => {
    if (answer === "") {
      showResults();
    }

    rl.on("line", (input) => {
      if (input === "r") {
        const resizeEvent = new window.Event("resize");
        window.dispatchEvent(resizeEvent);
        showResults();
      } else if (input === "q") {
        rl.close();
        console.log(chalk.red("¡Adiós!"));
        process.exit(0);
      }
      console.log(
        chalk.yellow(
          "Presiona 'r' para simular un evento de resize o 'q' para salir: "
        )
      );
    });

    rl.on("close", () => {
      console.log(chalk.red("Cerrando la CLI. ¡Adiós!"));
      process.exit(0);
    });

    console.log(
      chalk.yellow(
        "Presiona 'r' para simular un evento de resize o 'q' para salir: "
      )
    );
  }
);
