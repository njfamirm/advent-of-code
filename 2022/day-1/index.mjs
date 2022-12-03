#!/usr/bin/env node

import {readFileSync} from 'fs';

function calcuteElveCaloriesSum(calorieList) {
  let sum = 0;
  for (let i = 0; calorieList.length > i; i++) {
    sum += +calorieList[i];
  }
  return sum;
}

const fileContent = readFileSync('./input.txt', 'utf8');

let elvesItemCalorieList = fileContent.split(/^\n/gm);
elvesItemCalorieList = elvesItemCalorieList.map((list) => {
  return list.split(/\n/gm);
});

let sumList = [];
for (let i = 0; elvesItemCalorieList.length > i; i++) {
  sumList[i] = calcuteElveCaloriesSum(elvesItemCalorieList[i]);
}

sumList = sumList.sort(function (a, b) {
  return a - b;
});

console.log('Part One Response: [%s]', sumList[sumList.length - 1]);
console.log(
  'Part Two Response: [%s]',
  sumList[sumList.length - 1] + sumList[sumList.length - 2] + sumList[sumList.length - 3]
);
