//const set1 = new Set();
const set1= new Set();
const arr1=[];

function hasDuplicate(arr1){
    let i=arr1.length;
    //console.log(i);
    arr1.forEach(El=>{
        set1.add(El);

    });
    let j=set1.size;
    //console.log(j);
    //if length of array and size of set is equal then it does not have
    //duplicate element. or else it has=>false
    if(i==j){
        return true;
    }
    else{
        return false;
    }
    return set1;

}

//const a=hasDuplicate([1,2,3,4,5,5]);
//console.log(a);
//console.log(hasDuplicate([1,2,2,3,4,4,5]));
//console.log(hasDuplicate([1,2,3,4,5]));

//Finding Duplicate element is array using Set.Prototype.has(values) API.

const arr2=[];
const set2= new Set();

function hasDuplicate1(arr2){
    let count=0;
    arr2.forEach(Ele=>{
        if(set2.has(Ele))
        {
            //console.log(set2.has(Ele));
            count++;
            //console.log(count);
        }
        else{
            
            set2.add(Ele);
            count=0;
            
        }

        

    });
    if(count==0){
        return true;
    }
    else{
        return false;
    }

   
    return set2;
}
 console.log(hasDuplicate1([1,2,3,3]));
 


