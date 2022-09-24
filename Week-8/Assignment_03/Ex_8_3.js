//creating a node for constructing a tree with initial values as null for both the children.
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
// levelTraverse function for traversing a tree in level order.
function levelOrder(root) {
    //if root is null means tree is empty then return it.
    if(root==null){
        return []; 
    }
    //an array for storing result
    let result = [];  
    //create a queue and push root element into queue.
    let queue =[root];     
    //traverse the queue if its length is not 0.
    while(queue.length!=0){
        let subarr = []; 
        //n=> to get length of queue.
        const n = queue.length;
        //traversing queue till its length
        for(let i = 0;i<n;i++){
             //store queue's first element in a node variable.
            let node = queue.pop()
            //push first element in a temp array("subarr")
            subarr.push(node.data)
            //if left child has element then push it onto queue.
            if(node.left){
                queue.unshift(node.left);
            }
            //if right child has element then push it onto queue at the beginning.
            if(node.right){
                queue.unshift(node.right);
            }
        }
        result.push(subarr)
    }
    //return final output
    return result
}

//creating a root node of the tree.
let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
//calling levelOrder function to get output of the function.
let res=levelOrder(root);
console.log(res);

//Time Complexity: O(n), n=>no. of nodes.
//Space Complexity: O(n), n=>no. of nodes.