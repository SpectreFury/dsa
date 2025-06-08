// Brute Force:
// time -> O(n^2)
// space -> O(1)

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}

// Optimal:
// time -> O(n)
// space -> O(n)

function twoSumOptimal(nums, target) {
  hashmap = new Map()

  for(let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]

    if(hashmap.has(diff)){
      return [hashmap.get(diff), i]
    }

    hashmap.set(nums[i], i)
  }

  return []
}
