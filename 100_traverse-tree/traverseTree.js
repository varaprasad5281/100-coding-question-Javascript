export function traverseTree(node, callback) {
  if (!node) return;

  callback(node);

  if (node.children && node.children.length > 0) {
    node.children.forEach((child) => traverseTree(child, callback));
  }
}
