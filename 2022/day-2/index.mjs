#!/usr/bin/env node

import {readFileSync} from 'fs';

function calcutePartOneRoundPoint(moveList) {
  let point = 0;
  switch (moveList[1]) {
    case 'X':
      point += 1;
      if (moveList[0] === 'A') point += 3;
      else if (moveList[0] === 'C') point += 6;
      break;
    case 'Y':
      point += 2;
      if (moveList[0] === 'B') point += 3;
      else if (moveList[0] === 'A') point += 6;
      break;
    case 'Z':
      point += 3;
      if (moveList[0] === 'C') point += 3;
      else if (moveList[0] === 'B') point += 6;
      break;
  }
  return point;
}

function calcutePartTwoRoundPoint(moveList) {
  let point = 0;
  switch (moveList[1]) {
    case 'X':
      if (moveList[0] === 'A') point += 3;
      else if (moveList[0] === 'B') point += 1;
      else point += 2;
      break;
    case 'Y':
      point += 3;
      if (moveList[0] === 'A') point += 1;
      else if (moveList[0] === 'B') point += 2;
      else point += 3;
      break;
    case 'Z':
      point += 6;
      if (moveList[0] === 'A') point += 2;
      else if (moveList[0] === 'B') point += 3;
      else point += 1;
      break;
  }
  return point;
}

const file = readFileSync('./input.txt', 'utf8');

const roundList = file.split(/\n/gm).map((r) => r.split(' '));

let partOnePointSum = 0;
let partTwoPointSum = 0;
for (let i = 0; roundList.length > i; i++) {
  partOnePointSum += calcutePartOneRoundPoint(roundList[i]);
  partTwoPointSum += calcutePartTwoRoundPoint(roundList[i]);
}

console.log('Part One Response: [%s]', partOnePointSum);
console.log('Part Two Response: [%s]', partTwoPointSum);
