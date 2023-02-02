const maxSubArraySizeK = (arr, k) => {
  // variables
  let maxSum = 0
  let tempSum = 0

  // edge cases
  if (arr.length < k) null

  // first for loop to get sum of first subarray  
  for (let i = 0; i < k; i++) {
    maxSum += arr[i]
    console.log("maxSum initial: ", maxSum)
  }

  // set sum to tempSum
  tempSum = maxSum

  // second for loop to iterate through the rest
  for (j = k; j < arr.length; j++){
    console.log(j)
    tempSum += - arr[j-k] + arr[j]
    console.log("tempSum initial: ", tempSum)
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}

console.log(maxSubArraySizeK([3,0,-3,2,3],3))