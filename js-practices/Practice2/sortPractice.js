'use strict'

function sort(input) {
  let sortedlist = [];
  while (input.length !== 0){
    let min = Math.min.apply(null,input);
    sorted_list.push(min)
    let index = input.indexOf(min);
    input.splice(index,1);
  }
  return sortedlist;
}

module.exports = sort
