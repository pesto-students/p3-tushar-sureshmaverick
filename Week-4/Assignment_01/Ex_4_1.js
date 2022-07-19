function getNumber(num){
    //2 param in Promise as resolve and reject
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            //if num is not divisible by 5 then promise is resolved else rejected.
            if(!(num%5==0)){
                console.log("Your promise has been resolved");
                resolve();
            }
            else{
                console.log("Your promise has not been resolved");
                reject("Sorry not fulfilled");
            }

        },2000);
    })
    }
    //it takes Random number and give it to getNumber()
let rnum=Math.random();
console.log(rnum);
getNumber(rnum).then(function(){
    console.log("Thanks for resolving");
}).catch(function(){
    console.log("Its Rejected");
});