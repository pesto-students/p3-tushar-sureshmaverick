function closestSum(arr,x){
    if(!typeof(arr)=='number'){
        throw "Invalid Array input";
    }

    if(!Number.isInteger(x)){
        throw "Invalid input";
    }
    arr.sort();
    let closeSum=1000000;
    let n=arr.length;
    for(let i=0;i<n-2;i++){
        //Initialize 2 pointer => firts at i+1 and second at end of array 
        let ptr1=i+1, ptr2=n-1;
        while(ptr1<ptr2){
            //Summing the elements from two pointers and one array iteration itself
            let sum=arr[i]+arr[ptr1]+arr[ptr2];
            if(Math.abs(x-sum)<Math.abs(x-closeSum)){
                closeSum=sum;
            }
            //if sum found greater than  x =>then  decrement the second pointer(tail pointer)
            if(sum>x){
                ptr2--;
            }
            //else increment the head pointer(ptr1)
            else{
                ptr1++;
            }
            
        }
    }
    return closeSum;
}

const abc=[1,2,1,4,-5,7,1,10];
let x=17;
console.log(closestSum(abc,x));
console.log(closestSum([-1,2,1,-4],1));

//Time Complexity= O(n2) =>two loops are runnning .
//Space Complexity= O(1)