# Brute Force:
# time -> O(n^2)
# space -> O(1)

def twoSum(nums, target):
  for i in range(len(nums)):
    for j in range(len(nums)):
      if nums[i] + nums[j] == target and i != j:
        return [i, j]

# Optimal:
# time -> O(n)
# space -> O(n)

def twoSumOptimal(nums, target):
  hashmap = {}

  for i, n in enumerate(nums):
    diff = target - n

    if diff in hashmap:
      return [hashmap[diff], i]
    
    hashmap[n] = i


print(twoSum([1,2,3,4], 3))
print(twoSumOptimal([1,2,3,4], 3))
