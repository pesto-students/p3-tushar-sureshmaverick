//creating a linked list node
class Node{
    constructor(){
          this.data = 0;
          this.next = null;
      }
  }
  var head = null;
  
  // below function rotates a linked list and updates the head. The function will take k, which is
  // smaller than size of linked list.
  function rotate(k)
  {
      if(k == 0){
          return;
    }
      var current = head;// store head into a variable
    // Traverse untill the current.next is null.
      while(current.next != null){
          current = current.next;
    }
    //update current.next and current.
    current.next = head;
      current = head;
    //traverse till last element of rotate list
      for(i = 0; i < k - 1; i++){
          current = current.next;
    }
    // update the head and last element pointer to null
      head = current.next;
      current.next = null;
  }
  //below function is to push element into linked list.
  function push(new_data){
      // creating a new node.
      var new_node = new Node();
    // Put the data
      new_node.data = new_data;
      new_node.next = head;
    // Move the head to point to the new node
      head = new_node;
  }
  
  // below function to print linked list
  function printList( node)
  {
      while (node != null)
      {
          console.log(node.data + " ");
          node = node.next;
      }
  }
  //loop for pushing data into linked list
  for (i = 60; i > 0; i -= 10){
      push(i);
  }
  
  console.log("Given linked list");
  printList(head);
  rotate(4);
  console.log("Rotated Linked list");
  printList(head);
  

  //Time Complexity:>O(n)
  //Space Complexity:>O(1)
  