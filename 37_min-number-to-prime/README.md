### Minimum Number to Prime

Given an array of n integers, find minimum number to be inserted in an array, so that sum of all elements of array should equal the closest prime number.

Notes:
* Array size is at least 2.
* Array's numbers will be only positives (n > 0).
* Repetition of numbers in the array could occur.
* The newer array's sum should equal the closest prime number.

Examples:

```javascript
minNumberToPrime([3, 1, 2]); // returns 1
```

Explanation:
Since the sum of the array's elements is equal to 6, the minimum number to be inserted to transform the sum to prime number is 1, which will make the sum of the array equal the closest prime number 7.

```javascript
minNumberToPrime([2, 12, 8, 4, 6]); // returns 5
```

Explanation:
Since the sum of the array's elements is equal to 32, the minimum number to be inserted to transform the sum to prime number is 5, which will make the sum of the array equal the closest prime number 37.
