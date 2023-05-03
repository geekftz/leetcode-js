function Node(data, left, right) {
  this.left = left;
  this.right = right;
  this.data = data;
  this.show = () => this.data;
}

function BST() {
  // 初始化
  this.root = null;

  this.insert = insert;
}

function insert(data) {
  var node = new Node(data, null, null);

  // 没有根节点 创建根节点
  if (this.root === null) {
    this.root = node;
  } else {
    // 当前节点
    var current = this.root;

    // 父级节点
    var parent;

    while (true) {
      // 暂存
      parent = current;

      if (data < current.data) {
        // 移动当前节点
        current = current.left;

        if (current === null) {
          parent.left = node;
          break;
        }
      } else if (data > current.data) {
        // 移动当前节点
        current = current.right;

        if (current === null) {
          parent.right = node;
          break;
        }
      } else {
        // 节点已存在 跳出
        console.log('节点已存在');
        break;
      }
    }
  }
}

// test
var bst = new BST();

bst.insert(56);

bst.insert(22);

bst.insert(81);

bst.insert(10);

bst.insert(30);

bst.insert(77);

bst.insert(92);
console.log('%c bst.root: ⧭', 'color: #ffa280', bst.root);

// 中序遍历 左根右 从小到大
function inOrder(node) {
  if (node !== null) {
    // 递归 堆栈
    // 一直找到最左边的node节点
    inOrder(node.left);

    // 中间 过度
    const data = node.show();
    // console.log('%c%s', 'color: #514080', data);

    inOrder(node.right);
  }
}

inOrder(bst.root);

// 前序遍历 根左右
function preOrder(node) {
  if (node !== null) {
    // 散
    const data = node.show();
    console.log('%c%s', 'color: #8c0038', data);

    preOrder(node.left);
    preOrder(node.right);
  }
}

preOrder(bst.root);

// 后序遍历 左右根
function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);

    // 收
    const data = node.show();
    console.log('%c%s', 'color: #73998c', data);
  }
}

postOrder(bst.root);
