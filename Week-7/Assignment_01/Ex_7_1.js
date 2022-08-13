//create a node
class Node {
    constructor(data) {
        //it takes data as argument
        this.data = data;
        this.next = null;

    }
}
//creating a linked list with initail values as null 
//for head, tail and prev;
class LinkedList1 {
    constructor() {
        this.head = null;
        this.tail = null;
        this.prev = null;
    }
//creating a push function to add elements in linked list
    push(item) {
        //create a new node for putting new items in it.
        let myNode = new Node(item);
        //initially linked list is empty so pushing myNode into both head and tail.
        if (!this.head) {
            this.head = myNode;
            this.tail = myNode;
        }else {//once we find at least one item in linked list then we need to follow below steps to push item in it.
            this.tail.next = myNode;// put myNode into next of tail.
            this.tail = myNode;
        }

    }
    //print function is to print the values entered by user.
    print() {//put value of head into a new variable called "element"
        let element = this.head;
        if(element==null){//for empty linked list print "null"
            console.log("null");
        }
        while (element) {//console it if linked list has data in it.
            console.log(element.data + " ");
            element = element.next;// point element to the next element.
        }
    }

}
//reverse function to reverse the entered linked list.
function reverse(item) {
    //store value of head variable into a new variable and initilize prev and next as null;
    var curr = item.head;
    var prev = null;
    var next = null;
    if(curr===null){
        return null;//for empty linked list print "null"
    }
    while (curr !== null) {//goes into loop if curr is not equal to null
        next = curr.next;//put curr.next into next
        curr.next = prev;//put prev into curr.next.
        prev = curr;
        curr = next;
    }

    return prev;//once all swapping is done then return prev
}
//this print function is used for printing reverse elements of linked list
function printreverse(head) {
    let element = head;//store head into a temprary variable called "element"
    if(element==null){
        console.log("null");//print if linked list is empty
    }
    while (element) {
        console.log(element.data + " ");//print data if linked list has data in it.
        element = element.next;//point element to the next of it.
    }
}
let list = new LinkedList1();
list.push(1);
list.push(2);
list.push(3);
console.log("linked list before reversing: ");
list.print();

console.log("Linked list after reversing: ");
var rev = reverse(list);
printreverse(rev);

//Time Complexity:>O(n)
//Space Complexity:>O(1)
