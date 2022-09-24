class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
  }
  
  function makeloop(head_ref, k) {
    // traverse the linked list until loop
    // point not found
    //sore reference of head into a temp variable.
    var temp = head_ref;
    var count = 1;
    //coiunt is used to reach to the node where we are going to make loop.
    while (count < k) {
        temp = temp.next;
        count++;
    }
    // backup the joint point
    var joint_point = temp;
    // traverse remaining nodes
    while (temp.next != null) {
        temp = temp.next;
    }
    // joint the last node to k-th element
    temp.next = joint_point;
    return head_ref;
  }
  //function for pushing data into linked list
  function push(head_ref, item) {
    //create a node to push new item in it.
    var new_node = new Node();
    //data part of new node will be the item
    new_node.data = item;
    //make next of new node as new head reference
    new_node.next = head_ref;
    head_ref = new_node;
    //return head refrence once all items are pushed.
    return head_ref;
  }
  //detectLoop is used to detect a loop in linked list.
  function detectLoop(head1) {
    //we are using two pointers 
    //slow pointer move one step in each iteration
    let slow = head1;
    //fast pointer moves two step in each iteration
    let fast = head1;
    //checking the below condition move them as mentioned above.
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        //if they meet during the iteration , it means we have detected a loop in linked list.
        // and return true.
        if (slow === fast) {
            return true;
        }
    }
    //else return false.
    return false;
  }
  
  //function to print the linked list.
  function printList(head, total_nodes) {
    //store head into a curr variable.
    var curr = head;
    var count = 0;
    //print untill count is less then total no. of nodes.
    while (count < total_nodes) {
        count++;
        console.log(curr.data + " ");
        curr = curr.next;
    }
  }
  //below function is used to count no. of nodes in linked list
  function countNodes(ptr) {
    //initialize count as 0.
    var count = 0;
    while (ptr!= null) {
        //increment the count variable untill we get ptr==null.
        ptr = ptr.next;
        count++;
    }
    return count;
  }
  var head = null;
  
  head = push(head, 1);
  head = push(head, 3);
  head = push(head, 4);
  head = push(head, 5);
  head = push(head, 6);
  head = push(head, 7);
  var total_nodes = countNodes(head);
  console.log("Total nodes are:");
  console.log(total_nodes);
  console.log("Input nodes are:");
  printList(head,total_nodes);
  var head1=makeloop(head, 2);
  console.log("Nodes after makeLoop are:");
  printList(head1,total_nodes);
  var loopdetected=detectLoop(head1);
  console.log("Loop detected:");
  console.log(loopdetected);

  //Time Complexity:>O(n)
  //Space Complexity:>O(1)