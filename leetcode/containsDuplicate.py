# Brute Force Solution -> O(n^2), space: O(1)
# Best Solution -> time: O(n), space: O(n)

def containsDuplicateOptimal(nums):
    duplicates = set(nums)

    return len(duplicates) != len(nums)

nums = [1,2,3]

print(containsDuplicate(nums))
