### Brackets indexes

You are given a string with brackets and an index of an opening bracket and your task is to return the index of the matching closing bracket. Return -1 if there is no answer.

```javascript
bracketsIndexes('((1)23(45))(aB)', 0); // returns 10, the opening brace at index 0 matches the closing brace at index 10
bracketsIndexes('((1)23(45))(aB)', 1); // returns 3
bracketsIndexes('((1)23(45))(aB)', 2); // returns -1
```
