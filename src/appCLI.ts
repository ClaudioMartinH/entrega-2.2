import { showResults } from "./index.js";
import { JSDOM } from "jsdom";
import readline from "readline";
import chalk from "chalk";


const { window } = new JSDOM(`<!DOCTYPE html><html><body>
  <div id="width"></div>
  <div id="height"></div>
  <div id="contador"></div>
</body></html>`);
(global as any).window = window as any;
(global as any).document = window.document;


(globalThis as any).contador = 0;

console.log(
  chalk.blue(
    "Bienvenido a la CLI para comprobar la funcionalidad de showResults y throttle."
  )
);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  chalk.green(
    "Presiona 'Enter' para mostrar los resultados iniciales y 'r' para simular un evento de resize: "
  ),
  (answer) => {
    if (answer === "") {
      showResults();
    }

    rl.on("line", (input) => {
      if (input === "r") {
        (globalThis as any).contador++; 
        window.dispatchEvent(new Event("resize"));
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
