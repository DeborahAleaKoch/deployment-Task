import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

import * as lodash from "lodash";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// Schreibe eine Funktion in die main.ts, z. B. add(number: number, number: number)

function addNumbers(numberA: number, numberB: number) {
	console.log(numberA, numberB);

	return numberA + numberB;
}

addNumbers(2, 3);

const superCodeKebab = lodash.kebabCase("HALLO SUPERCODE");
console.log(superCodeKebab);
