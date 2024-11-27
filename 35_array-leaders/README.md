### Array Leaders

An element is leader if it is greater than the sum of all the elements to its right side.

Given an array of integers, find all the LEADERS in the array.

Notes:
* Array size is at least 3.
* Array's numbers will be a mixture of positives, negatives and zeros.
* Repetition of numbers in the array could occur.
* A returned array should store the leading numbers in the same order as in the original array.

```javascript
arrayLeaders ([1, 2, 3, 4, 0]); // returns [4]
```

Explanation:

* 4 is greater than the sum of all the elements to it's right side.
* The last element 0 is equal to right sum of its elements (abstract zero).

```javascript
arrayLeaders ([0, -1, -29, 3, 2]); // returns [0, -1, 3, 2]
```

Explanation:
* 0 is greater than the sum all the elements to its right side
* -1 is greater than the sum all the elements to its right side
* 3 is greater than the sum all the elements to its right side
* Note: The last element 2 is greater than the sum of its right elements (abstract zero).
