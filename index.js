function fibonacci(n){
  if (n < 0) return;
  else if (n === 0) return 0;
  else if (n === 1) return 1;
  else {
    return fibonacci(n-2) + fibonacci(n-1) 
  }
  
}

fibonacci(6)

function flattenArray(inputArray, combineArray=[]) {
  return inputArray.reduce((flatarray, eacharray) => {
    if (Array.isArray(eacharray)) {
      return flattenArray(eacharray, combineArray);
    } else {
      flatarray.push(eacharray)
      return flatarray;
    }
  }, combineArray)
  
}

console.log(flattenArray([1, 2, [3, [4, 5], 6], [7]]))

const flattenArray2 = array => {
  let result = [];
  for (let i = 0; i < array.length; i++){
    let el = array[i]
    if (Array.isArray(el)) {
      const flatted = flattenArray2(el)
    } else {
      result.concat(el)
    }
  }
  return result
}

console.log(flattenArray2([1, 2, [3, [4, 5], 6], [7]]))


//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
  if (arr.length === 0) return 1
  let element = arr[0]
  if (element === 0){
    return 'zero'
  }
  return element * productOfArray(arr.splice(1,arr.length - 1))
} 

console.log(productOfArray([1,2,3])) //6
console.log(productOfArray([1,2,3,10])) //60
console.log(productOfArray([0,4,56,12])) //0