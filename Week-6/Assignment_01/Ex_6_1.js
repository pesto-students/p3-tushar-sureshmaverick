function maxSum(elements){
  if(!typeof(elements)=='number'){
    throw "Invalid Array input"
  }

    let n=elements.length;
    //Iniytailizing 2 variable as the first element of Array.
    let a=elements[0];
    let b=elements[0];
    for(let i=1;i<n;i++){
      b=Math.max(elements[i],b+elements[i]);
      if(b>a){
        a=b;
      }
    }
    return a;
}
const elem=[2,3,-8,7,-1,2,3];
const elem1=[5,8,3];
const abc=maxSum(elem);
console.log("The maximum Sum of Subarray is: ");
console.log(abc);
console.log(maxSum(elem1));


//Time Complexity= O(n);
//Space Complexity =O(1);