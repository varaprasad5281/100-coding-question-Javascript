### Deep object clone

Write a recursive function to copy an argument object.

```javascript
const original = { a: 1, b: { c: 10 } };
const copy = deepObjectClone(original);
copy === original; // false
```
