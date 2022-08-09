//function to get town judge from given people.
function findJudge(n,trust) {
    //Initialize array with 1..n
    //n+1, so count is easier 
    const counts = new Array(n+1).fill(0);
    //Iterate through N people    
    for(let [i,j] of trust){
        //if the person trusts somebody, then it will not meet requirement 1
        counts[i] -= 1
        //count the people they trust
        counts[j] += 1
    }
    //if n-1 exists, then its the judge since the judge trusts no one except themselves
    //and everyone else trusts the judge, then its n-1
    for(let i = 1;i <counts.length; i++) {
        if((n-1)===counts[i]){
            return i;
        }
    }
    return -1
};

let n=2;
let trust=[[1,2]];
//let trust1=[[1,3],[2,3]];
let result=findJudge(n,trust);
console.log(result);
//console.log(findJudge(3,trust1));

//Time Complexity: O(n)
//Space Complexity:O(n)