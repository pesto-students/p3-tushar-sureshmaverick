function createIncrement() {
    let count=0;
    function increment() {
        count++;
        //console.log(count);
    }
    //when this variable(message) is created , the count is 0
        let message=`Count is ${count}`;
        //when count is 0 at that time this log() is logged and it prints 0.
        function log() {
            console.log(message);
        }
        return[increment,log];
    }
    const[increment,log] =createIncrement();
    //message is created exactly once hence it prints 0 , 
    //count is incremented but there is no code to show it.
    increment();
    increment();
    increment();
    log();