let nums = [1, 2, 3];
let target = 4;

const two_sum = (nums, target) => {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return null;
}
console.log(two_sum(nums, target))