import { traverseTree } from './traverse-tree';

describe('traverseTree', () => {
  it('should call callback for every of tree nodes', () => {
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

    const resultArray = [];

    function callback(node) {
      resultArray.push(node.value);
    }

    traverseTree(tree, callback);

    expect(resultArray.sort((a, b) => a - b)).toEqual([1, 2, 99, 100]);
  });
});
