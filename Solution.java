
public class Solution {

    public void nextPermutation(int[] nums) {
        int left = nums.length - 2;
        int right = nums.length - 1;
        while (left >= 0 && nums[right] <= nums[left]) {
            left--;
            right--;
        }

        if (left >= 0) {
            while (right < nums.length - 1 && nums[left] < nums[right + 1]) {
                right++;
            }
            swap(nums, left, right);
        }
        reverse(nums, left + 1, nums.length - 1);
    }

    private void reverse(int[] nums, int left, int right) {
        while (left < right) {
            swap(nums, left, right);
            left++;
            right--;
        }
    }

    private void swap(int[] nums, int left, int right) {
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
}
