#!/usr/bin/env node

import {readFileSync} from 'fs';

const file = readFileSync('./input.txt', 'utf8');

const roundList = file.split(/\n/gm).map(r => r.split(' '));

let pointSum=0
for (let i=0; roundList.length > i; i++) {
  pointSum += calcuteRoundPoint(roundList[i])
}

console.log(pointSum)

function calcuteRoundPoint(moveList) {
  let point = 0;
  switch (moveList[1]) {
    case 'X':
      point+=1
      if (moveList[0] === 'A') point+=3
      else if (moveList[0] === 'C') point+=6
      break;
    case 'Y':
      point+=2
      if (moveList[0] === 'B') point+=3
      else if (moveList[0] === 'A') point+=6
      break
    case 'Z':
      point+=3
      if (moveList[0] === 'C') point+=3
      else if (moveList[0] === 'B') point+=6
      break
  }
  console.log(point)
  return point;
}

