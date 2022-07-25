function zeroOneTwoSorting(arr){

    if(!typeof(arr)=='number'){
        throw "Invalid Array Input"
    }

    let zero=0, one=0, two=0;
    let n=arr.length;
    //count no. of 0's , 1's and 2's in array.
    for(let i=0;i<n;i++){
        if(arr[i]==0){
            zero++;
        }
        if(arr[i]==1){
            one++;
        }
        if(arr[i]==2){
            two++;
        }
    }
    //store 0's , 1's and 2's in array
    for(let i=0;i<zero;i++){
        //console.log(0);
        arr[i]=0;
    }
    for(let i=zero;i<one+zero;i++){
        arr[i]=1;
    }
    for(let i=one+zero;i<n;i++){
        arr[i]=2;
    }
    return arr;
}

const arr=[0,1,2,0,2,1,0,2,1,0];
console.log("Sorted array is: ");
console.log(zeroOneTwoSorting(arr));

//Time Complexity= O(n)
//Space Complexity= O(1) =>no extra space required.