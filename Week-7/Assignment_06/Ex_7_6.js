//craeting a class and initializing two stack variables to store data;
class StackQueue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    //Function to push an element in queue by using 2 stacks.
    push(item) {
        this.s1.push(item)
    }

    //Function to pop an element from queue by using 2 stacks.
    pop() {
        //if the length of first stack is 0 then return -1;
        if(this.s1.length === 0)
        {
             return -1
        }
        //if length of first stack is greter then 0 ,
         while(this.s1.length > 0) {
            //then push into stack 2 and pop from stack first.
            this.s2.push(this.s1[this.s1.length - 1])
            this.s1.pop()
        }
        let ans = this.s2[this.s2.length - 1];
        //perform same operaion on stacktwo also.
        this.s2.pop()
        while(this.s2.length > 0) {
            this.s1.push(this.s2[this.s2.length - 1])
            this.s2.pop()
        }
        return ans;
    }
}
function queuewithTwoStack() {

    let sq = new StackQueue();
    //q is no. of operation to be performed
    let q=4;
    //input array
    let input_ar1=['1','2','2','2','1','4'];
    //initializing index as 0;
    let index = 0;
    //creating an empty string to store output.
    let res = '';
    //loop will run untill no. of operation becomes 0.
    while (q--) {
        let QueryType = input_ar1[index++];
        //if we get 1 in the input array then push item.
        if (QueryType == 1) {
            let a = input_ar1[index++];
            sq.push(a);
        }
        //if we get value other then 1 then perform pop operation.
        else {
            res += sq.pop() + " ";
        }
    }
    //console the output.
    console.log(res);
}
//calling function
queuewithTwoStack();


//Time Complexity:>push->O(1), pop->O(n)
//Space Complexity:>O(1)



