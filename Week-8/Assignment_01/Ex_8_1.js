//creating a node for constructing a tree.
class Node{
    constructor(data){
      this.data=data;
      //initisl values of left and right child are null.
      this.left=null;
      this.right=null;
    }
  }
  //function to find Maximum depth of the tree.
  function maxDepth(root){
    //if root is null then max depth will be 0.
    if(root==null){
      return 0;
    }else{
        //calling function recursely ->comparing depth in the left and right child.
        //function will return max of both child depth
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
    }
  }
  //creating root node of tree for constructing tree.
  let root=new Node(10);
  root.left=new Node(20);
  root.right=new Node(30);
  root.right.left=new Node(40);
  root.right.right=new Node(50);
  root.right.right.left= new Node(60);
  //calling maxDepth function to get max depth of the tree.
  let a=maxDepth(root);
  console.log(a);

  //Time Complexity: O(n)
  //Space Complexity: O(h), h=>height of the tree.