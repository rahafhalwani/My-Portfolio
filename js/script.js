function findTwoSum(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }

    return null;
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = findTwoSum(nums, target);

if (result) {
    console.log(result); // Output: [0, 1]
} else {
    console.log('No two sum solution');
}
