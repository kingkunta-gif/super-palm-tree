/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) {
        return 0
    }
    
    let stack = [];
    let res = 0;
    
    while (stack.length || root) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            k--
            
            if (k == 0) {
                return root.val
            }
            
            root = root.right
        }
    }
    
    return 0
};
