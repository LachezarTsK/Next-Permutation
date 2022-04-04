
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let left = nums.length - 2;
    let right = nums.length - 1;
    while (left >= 0 && nums[right] <= nums[left]) {
        left--;
        right--;
    }

    if (left >= 0) {
        while (right < nums.length - 1 && nums[left] < nums[right + 1]) {
            right++;
        }
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    reverse(nums, left + 1, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
function reverse(nums, left, right) {
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}
