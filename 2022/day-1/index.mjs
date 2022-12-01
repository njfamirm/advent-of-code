#!/usr/bin/env node

import {readFileSync} from 'fs';

const fileContent = readFileSync('./input.txt', 'utf8');

let elvesItemCalorieList = fileContent.split(/^\n/gm);
elvesItemCalorieList = elvesItemCalorieList.map((list) => {
  return list.split(/\n/gm);
});

elvesItemCalorieList = elvesItemCalorieList.filter((list) => list);

let sumList = [];
elvesItemCalorieList.forEach((list) => {
  let sum = 0;
  list.forEach((num) => {
    sum += +num;
  });
  sumList.push(sum);
});

sumList = sumList.sort(function (a, b) {
  return a - b;
});
console.log('The first highest Sum of Elves calories: %s', sumList[sumList.length - 1]);
console.log('The second highest Sum of Elves calories: %s', sumList[sumList.length - 2]);
console.log('The thirs highest Sum of Elves calories: %s', sumList[sumList.length - 3]);

console.log('\n');

console.log(
  '[Part-1] The first highest Sum of Elves calories: %s',
  sumList[sumList.length - 1] + sumList[sumList.length - 2] + sumList[sumList.length - 3]
);

console.log(
  '[Part-2] Top Sum of three Elves carrying the most Calories: %s',
  sumList[sumList.length - 1] + sumList[sumList.length - 2] + sumList[sumList.length - 3]
);
