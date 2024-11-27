### Traverse Tree

Write a function that is able to traverse an n-niry tree. It should accept a tree itself and callback function as arguments. And call callback for each of tree nodes passing node value as an argument.

```javascript
const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        { value: 99, children: [
            { value: 100, children: [] }
        ]
    }]
};

function callback(argument) { console.log(argument); }

traverseTree(tree, callback) // outputs to the console: 1 2 99 100
```
