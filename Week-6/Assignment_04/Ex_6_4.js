function maxProfit(price,n){
    if(!typeof(price)=='number' || n<1){
        throw "Invalid input"
    }

    let profit=0;
    //[1,5,3,8,12]
    //profit=0;
    //i=0, profit=(5-1)=4
    //i=2,,(3 is less thn 5 so it will be ignored)
    //i=3, profit=4+(8-3)=9
    //i=4, profit= 9+(12-8)=13
    for(let i=1;i<n;i++){
        if(price[i]>price[i-1]){
            profit+=(price[i]-price[i-1])
        }

    }
    return profit;
}
const arr=[1,5,3,8,12];
const ar=[7,6,4,3,1];
let n=arr.length;
const a=maxProfit(arr,n);
console.log(a);
console.log(maxProfit(ar,5));


//Time complexity=O(n) and Space complexity =O(1)