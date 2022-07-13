function createIncrement() {
    let count=0;
    function increment() {
        count++;
        console.log(count);
    }
        let message=`Count is${count}`;
        //closure
        function log() {
            console.log(message);
        }
        return[increment,log];
    }
    const[increment,log] =createIncrement();
    increment();
    increment();
    increment();
    log();