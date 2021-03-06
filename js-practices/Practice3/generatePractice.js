'use strict'

// function generate(testLengthArray){
//   return Array.from({length : testLengthArray.length})
//     .map(item => ({
//       input: Array.from({length: item}).map(item => []),
//       target: 0,
//       output: -1
//     })
//   ); // Remove this line and change to your own algorithm
// }
const testLengthArray = [187,158,442,474,154,73,228,205,370,320,399,494,100,84,462,275,335,448,309,221,32,427,439,144,448,182,88,213,174,133,427,420,155,11,247,487,387,110,89,299,136,498,67,223,347,135,220,84,20,20,319,480,385,130,74,195,326,286,299,181,81,423,172,224,431,279,96,127,195,75,328,452,199,313,252,128,390,322,91,356,27,363,206,7,38,72,56,244,470,146,444,30,164,225,438,303,382,33,390,56,421,463,224,442,185,416,125,76,89,488,127,226,42,499,77,463,114,407,101,490,375,22,413,166,176,128,146,431,253,203,326,463,104,263,12,436,267,461,18,301,44,1,365,240,97,193,298,78,400,111,396,294,212,445,150,313,487,252,60,326,245,264,154,108,78,274,94,200,260,329,415,430,58,360,432,480,57,328,119,400,69,208,240,334,95,490,94,312,18,59,259,490,485,62,266,175,198,85,457,139,275,412,208,77,470,44,488,235,494,499,126,83,27,324,401,61,394,362,96,462,171,335,208,99,17,57,40,360,346,299,201,227,189,488,85,372,83,279,345,345,474,388,211,97,293,207,298,168,219,192,443,446,442,269,393,448,451,270,201,289,458,63,293,420,223,486,466,185,35,422,349,428,3,351,297,6,150,76,362,304,88,67,69,147,127,198,309,467,95,319,79,120,271,363,419,372,457,457,44,475]

function generate(testLengthArray) {
  const results = []
  for(let i = 0; i < testLengthArray.length; i++) {
    let newItem = {
      input: [],
      output: null,
      target: null,
    }

    for(let j = 0; j < testLengthArray[i]; j ++) {
      // newItem.input.push(Math.random()*20000 - 10000);
      newItem.input.push(Math.floor(Math.random()*20000 - 10000));
    }

    newItem.input.sort((a,b) => {
      return a -b;
    });

    if(i == 0) {
      newItem.target = 10001;
      newItem.output = -1;
    }else if(i == 1) {
      newItem.target = newItem.input[0];
      newItem.output = 0;
    }else if( i == 2) {
      newItem.target = newItem.input[newItem.input.length - 1];
      newItem.output = newItem.input.length - 1;
    }else if( i == 3) {
      newItem.target = newItem.input[2];
      newItem.output = 2;
    }else {
      newItem.target = Math.floor(Math.random()*20000 - 10000);
      newItem.output = newItem.input.indexOf(newItem.target);
    }

    results.push(newItem);
  }
  return results;
}

module.exports = generate