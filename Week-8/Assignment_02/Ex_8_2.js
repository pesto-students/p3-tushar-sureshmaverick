//creating a Node for constructing a tree with initial value of left and right child as null.
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}
//prev variable to keep track of previous value.
let prev;
//checkBST function to find that a tree is BST or not.
function checkBST(root) {
    //check if root is not null
    if(root!=null){
        //check if left child follows BST creteria
        if(!checkBST(root.left)){
            return false;
        }
        //if prev stored data is not null and root data is less then prev data then it can not be a BST.
        if(prev!= null && root.data <= prev.data) {
            return false;
        }
        //store root into prev.
        prev = root;
        return checkBST(root.right);
    }
    return true;
}

//creating root node of the tree.
//contructing its child nodes.
let root = new Node(5);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(4);
//calling checkBST function and consoling its output.
console.log(checkBST(root));


//Time Complexity: O(n)
//Space Complexity:O(h), h=> height of the tree.