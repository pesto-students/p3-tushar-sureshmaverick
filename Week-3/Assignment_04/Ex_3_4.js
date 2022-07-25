function createStack(maxSize) {
    const stack=[];
    let top=-1;
    //const items=[];

    function push(item){
        if(top>=maxSize-1){
            return "stack overflow"
        }
        else{
            stack.push(item);
            
            top++;
        }
    }

    function pop(){
        if(top>-1){
            let last = stack[top];
            stack.pop();
            top--;
            
            return last;

        }
        else{
            null;
        }
    }

    function print(){
        console.log(stack.toString());
    }
    return{
        push,print,pop
    }
}
const mstack=createStack(1000);
mstack.push(10);
mstack.push(5);
//mstack.pop();
//mstack.pop();
mstack.print();
