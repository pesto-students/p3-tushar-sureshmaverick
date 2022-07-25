function findPair(arr,d){
    if(!typeof(arr)=='number'){
        throw "Invalid Array Input"
    }
    if(!Number.isInteger(d)){
        throw "Invalid Input"
    }


    //sort array
    //Time compl-O(nlog(n))
    arr.sort();
    let size=arr.length;
    //initialize position of two elements
    let i = 0;
    let j = 1;
     // Search for a pair
     //if found thn return 1 else 0

     while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == d) {
            return 1;
        }
        else if (arr[j] - arr[i] < d)
        {
            j++;
        }else
        {
            i++;
        }
    }
    return 0;
}
   


const arr=[2,3,1,5];
console.log(findPair(arr,12));
console.log(findPair([2,3,1,5],1));


//Time complaxity= O(nlogn)+O(n)= O(nlogn)
//Space Complexity= O(1)