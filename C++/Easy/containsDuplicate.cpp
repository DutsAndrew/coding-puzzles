#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

class Solution {
  public:
    bool containsDuplicate(vector<int> & nums) {
      unordered_set<int> s;

      for (int i = 0; i < nums.size(); i++) {
        if (s.find(nums[i]) != s.end()) {
          return true;
        };
        s.insert(nums[i]);
      };

      return false;
    };
};

int main() {
  Solution sol;

  vector<int> nums1 = {1, 2, 3, 1};
  vector<int> nums2 = {1, 2, 3, 4};
  vector<int> nums3 = {1, 1, 1, 3, 3, 4, 3, 2, 4, 2};

  bool result1 = sol.containsDuplicate(nums1);
  bool result2 = sol.containsDuplicate(nums2);
  bool result3 = sol.containsDuplicate(nums3);

  cout << "Contains duplicate: " << (result1 ? "true" : "false") << endl;
  cout << "Contains duplicate: " << (result2 ? "true" : "false") << endl;
  cout << "Contains duplicate: " << (result3 ? "true" : "false") << endl;

  return 0;
};

// run the following in the terminal
/* g++ -std=c++11 containsDuplicate.cpp -o  containsDuplicate */
// then
/* ./containsDuplicate */