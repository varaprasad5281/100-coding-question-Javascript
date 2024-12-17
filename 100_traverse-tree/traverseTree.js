const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [],
    },
    {
      value: 99,
      children: [
        {
          value: 100,
          children: [],
        },
      ],
    },
  ],
};

// Define the callback function to return the node value
const callback = (node) => {
  return node.value;
};

// Traverse the tree and collect values in an array
function traverseTree(node, callback, result = []) {
  if (node === null) return result; // Return accumulated result when reaching null
  
  result.push(callback(node)); // Apply callback and add result to the array
  
  if (node.children && node.children.length > 0) {
    node.children.forEach((child) => traverseTree(child, callback, result)); // Traverse children
  }
  
  return result; // Return the accumulated result array
}

// Call the traverseTree function and store the result in an array
const resultArray = traverseTree(tree, callback);

console.log(resultArray);
