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
  for(var i=0; i<input.length; i++){
    if(input[i] === target){
       return i;
     }
 }
 return -1;
}


module.exports = search
