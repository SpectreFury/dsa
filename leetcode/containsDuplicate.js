// # Brute Force Solution -> O(n^2), space: O(1)
// # Best Solution -> time: O(n), space: O(n)

function containsDuplicate(nums) {
    const duplicates = new Set(nums)

    return duplicates.size() !== nums.length
}

