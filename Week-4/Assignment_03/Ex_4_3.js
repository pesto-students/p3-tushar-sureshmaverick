
//fib series using iteraror
const fib=(n)=>({
    //iterable->it has [Symbol.iterator]
    [Symbol.iterator](){
        let i=1;
        let old=0, new1=0;
        return{
            //iterator->it has next() 
            next(){
                if(i++<=n){
                    [old, new1]=[new1,(old+new1)||1];
                    return{value:old, done:false}
                }
                else{
                    return{done:true}
                }

            }
        }
    }
});
//to print series without loop
//console.log([ ...fib(8)]);
//to print the series using for-of loop
for(let num of fib(7)){
    console.log(num);
}