### N smallest elements in original order

Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array of integers and the expected number n of smallest elements to return.

Notes:
* The number of elements to be returned cannot be higher than the array length.
* Elements can be duplicated.
* In case of duplicates, just return them according to the original order (see third example for more clarity).

```javascript
firstNSmallest([1, 2, 3, 4, 5], 3); // returns [1, 2, 3]
```
