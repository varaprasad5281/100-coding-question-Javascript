### Carrying

Write a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum.

```javascript
const sumTwoAnd = carrying(2);

sumTwoAnd(3); // returns 5
```

If either argument isn't a valid number, return undefined.

Helpful links:
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
