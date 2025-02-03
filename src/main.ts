import "./style.css";

import * as lodash from "lodash";

// Schreibe eine Funktion in die main.ts, z. B. add(number: number, number: number)

function addNumbers(numberA: number = 2, numberB: number = 2) {
	const addNumber = numberA + numberB;
	console.log(addNumber);

	return numberA + numberB;
}

addNumbers();

const superCodeKebab = lodash.kebabCase("HALLO SUPERCODE");
console.log(superCodeKebab);
