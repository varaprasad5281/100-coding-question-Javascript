export function traverseTree(node, callback) {
    if (node === null) return; // Handle the case where the node is null
  
    callback(node); // Call the callback function for the current node
  
    // Recursively call traverseTree for all children of the current node
    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => traverseTree(child, callback));
    }
  }
