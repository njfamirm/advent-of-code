#!/usr/bin/env node

import {readFileSync} from 'fs';

const fileContent = readFileSync('./input.txt', 'utf8');

let elvesItemCalorieList = fileContent.split(/^\n/gm);
elvesItemCalorieList = elvesItemCalorieList.map((list) => {
  return list.split(/\n/gm);
});

elvesItemCalorieList = elvesItemCalorieList.filter((list) => list);

let maxSum = 0;
elvesItemCalorieList.forEach((list) => {
  let sum = 0;
  list.forEach((num) => {
    sum += +num;
  });
  if (maxSum < sum) maxSum = sum;
});
console.log(maxSum);
