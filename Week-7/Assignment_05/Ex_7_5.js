// Stack class
class Stack {

	// Array is used to implement stack
	constructor() {
		this.items = [];
	}// Functions to be implemented
	// push(item)
	// pop()
	// peek()
	// isEmpty()
	// printStack()
	// push function
	push(element) {
		// push element into the items
		this.items.push(element);
	}// pop function
	pop() {
		// return top most element in the stack
		// and removes it from the stack
		// Underflow if stack is empty
		if(this.items.length == 0){
			return "Underflow";
		}
		return this.items.pop();
	}
	// peek function
	peek() {
		// return the top most element from the stack
		// but does'nt delete it.
		return this.items[this.items.length - 1];
	}
	// isEmpty function
	isEmpty() {
		// return true if stack is empty
		return this.items.length == 0;
	}
	// printStack function
	printStack() {
		var str = "";
		for (var i = 0; i < this.items.length; i++)
			str += this.items[i] + " ";
		return str;
	}
	// prints element and next greater element pair for all elements of arr of size n.
	printNextGreater(arr, n) {
		var s = [];
		let res = new Array(n);
		// iterate for rest of the elements
		for (let i = n - 1; i >= 0; i--) {
			//if stack is not empty, then pop an element from stack.
			//If the popped element is smaller than next, then
			//print the pair
			// keep popping while elements are smaller and stack is not empty 
			if (s.length != 0) {
				while (s.length != 0
					&& s[s.length - 1] <= arr[i]) {
					s.pop();
				}
			}
			res[i] = s.length == 0 ? -1 : s[s.length - 1];
			s.push(arr[i]);
		}
		var s = "";
		for (var i = 0; i < arr.length; i += 1) {
			s += res[i] + " ";
		}
		console.log(s);
	}
}
// creating object for stack class
var stack = new Stack();
console.log(stack.printStack());
let arr = [11, 13, 21, 3];
let n = arr.length;
//calling function
stack.printNextGreater(arr, n);


//Time Complexity:>O(n)
//Space Complexity:>O(n)
