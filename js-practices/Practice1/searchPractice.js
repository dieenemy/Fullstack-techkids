'use strict'

// function search(input, target) {
//   var index;
//   for(var val in input){
//      if(input[val] === target){
//         index = val;
//         return index;
//       }
//   }
// }


function search(input, target) {
  let indext = -1;
  for(let i = 0; i <= input.length - 1; i++){
    if (input[i] === target){
      indexOfTarget = i;
    }
  }
return  indext;
}


module.exports = search
