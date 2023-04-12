const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let stack = [];
  if(Array.isArray(arr)){ 
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == "--discard-next"){
        if(i == arr.length-1){
          continue;
        }
        else{
          i++;
          continue;
        }
      }
      if(arr[i] == "--discard-prev"){
        if(i == 0){
          continue;
        }
        else{
          if(arr[i-2] != "--discard-next"){
            stack.pop();
            continue;
          }
          continue;
        }
      }
      if(arr[i] == "--double-next"){
        if(i == arr.length - 1){
          continue;
        }
        else{
          stack.push(arr[i+1]);
          continue;
        }
      }
      if(arr[i] == "--double-prev"){
        if(i == 0){
          continue;
        }
        else{
          if(arr[i-2] != "--discard-next"){
            stack.push(arr[i - 1]);
            continue;
          }
          continue;
        }
      }
      
      stack.push(arr[i]);
    }
  }
  else{
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  return stack;
}

module.exports = {
  transform
};
