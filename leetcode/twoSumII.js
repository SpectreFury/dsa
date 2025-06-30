function twoSumIfSorted(nums, target) {
    const left = 0;
    const right = nums.length - 1;

    while (left < right) {
        const currSum = numbers[left] + numbers[right];

        if (currSum > target) {
            right--;
        }

        else if (currSum < target) {
            left++;
        }

        else {
            return [left + 1, right + 1];
        }
    }

    return [];

}

const nums = [1, 2, 3, 4];
const target = 3;
