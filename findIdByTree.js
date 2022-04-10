function findIdByTree(tree, target) {
  let paths = [];
  let res = [];

  let root = [tree];

  try {
  } catch (error) {}

  function loop(root) {
    for (let i = 0; i < root.length; i++) {
      const { id, children } = root[i];

      paths.push(id);

      if (id === target) {
        res = paths.slice();
        break;
      }

      if (children.length) {
        loop(children);
      }

      // 路径大于1 且没有找到 就pop
      if (paths.length > 1) {
        paths.pop();
      }
    }
  }

  loop(root);

  console.log(res);
}

const tree = {
  id: '1',
  children: [
    {
      id: '1.1',
      children: [
        {
          id: '1.1.1',
          children: [],
        },
      ],
    },
    {
      id: '1.2',
      children: [
        {
          id: '1.2.1',
          children: [],
        },
        {
          id: '1.2.2',
          children: [
            {
              id: '1.2.2.1',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

findIdByTree(tree, '1.2.2.1');
