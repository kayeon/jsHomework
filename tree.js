function TreeNode(left, right, data) {
  this.left = left;
  this.right = right;
  this.data = data
}

var node1 = new TreeNode(null, null, 1);
var node2 = new TreeNode(null, null, 2);
var node3 = new TreeNode(null, null, 3);
var node4 = new TreeNode(node1, null, 4);
var node5 = new TreeNode(node2, node3, 5);
var node6 = new TreeNode(node4, node5, 6); // root node

function isLeaf(node) {
  // TODO
}

// Should print out "1, 4, 6, 2, 5, 3"
// Bonus points: look up the name of this tree ordering
function printTree(rootNode) {
  // TODO
}

function balanceTree(rootNode) {
  // hard mode
}

function sortTree(rootNode) {
  // hard mode
}
