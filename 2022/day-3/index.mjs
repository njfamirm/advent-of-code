#!/usr/bin/env node

import {readFileSync} from 'fs';

const file = readFileSync('./input.txt', 'utf8');

function calcutePriorities(list) {
  const word = [];
  list.forEach((compartments) => {
    let tempWord = [];
    for (let i in compartments[0]) {
      compartments[1].includes(compartments[0][i])
        ? !tempWord.includes(compartments[0][i]) && tempWord.push(compartments[0][i])
        : null;
    }
    word.push(...tempWord);
  });
  return word;
}

const compartmentsPartValue = file.split(/\n/gm).map((compartments) => {
  return [
    compartments.substring(0, compartments.length / 2),
    compartments.substring(compartments.length / 2, compartments.length),
  ];
});

const word = calcutePriorities(compartmentsPartValue);
console.log(word);

let sum = 0;
word.forEach((char) => {
  const code = char.charCodeAt(0);
  if (code > 96) {
    sum += code - 96;
  } else if (code < 97 && code > 64) {
    sum += code - 38;
  }
  console.log(sum);
});

console.log(sum);
