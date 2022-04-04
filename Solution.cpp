
#include <vector>
using namespace std;

//Alternatively, just apply std::next_permutation, defined in header <algorithm>
class Solution {    
public:
    void nextPermutation(vector<int>& nums) {
        int left = nums.size() - 2;
        int right = nums.size() - 1;
        while (left >= 0 && nums[right] <= nums[left]) {
            left--;
            right--;
        }

        if (left >= 0) {
            while (right < nums.size() - 1 && nums[left] < nums[right + 1]) {
                right++;
            }
            swap(nums[left], nums[right]);
        }
        reverse(nums.begin() + left + 1, nums.end());
    }
};
