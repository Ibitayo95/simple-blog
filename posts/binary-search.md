---
title: "Binary Search"
date: "2022-11-11"
tag: "DS-and-Algorithms"
---

## What is a Binary Search?

A binary search helps you find a given value within a sorted array. 

Binary search compares the target value to the **middle** element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the **search continues on the remaining half**, **again taking the middle element to compare to the target value, and repeating this until the target value is found.** If the search ends with the remaining half being empty, the target is not in the array. 

Because this search space continues to half on each iteration, the worst-case time complexity is `O(log n)`

```java
class Solution {
    public int search(int[] nums, int target) {
        
        int start = 0;
        int end = nums.length - 1;
        int middle = (start + end) / 2;
        
        while (nums[middle] != target && start <= end) {
            if (target < nums[middle]) { // if we need to check smaller numbers
                end = middle - 1;
            } else {
                start = middle + 1; // if we need to check larger numbers
            }
            
            middle = (start + end) / 2; // recalculate the middle on each loop because we have changed the values
        }
        
		// after the loop, the middle should point to the target, else return -1
        return (nums[middle] == target) ? middle : -1;
        
    }
}
```