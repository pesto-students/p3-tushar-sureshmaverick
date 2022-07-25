//Spiral Order Matrix
function spiralMatrix(matrix){
    let row=matrix.length;// length of row
    if(row===0){
        return matrix
    }
    
    let col=matrix[0].length; //length of column
    let l=0, r=col-1, t=0,b=row-1,d=0;

    //    l   r
    //t=> 1 2 3
    //    4 5 6
    //b=> 7 8 9
    while(l<=r && t<=b){
        if(d==0){
            for(let i=l;i<=r;i++){
                console.log(matrix[t][i]);
            }

        t++;
        d=1;
        }else if(d==1){
            for(let i=t;i<=b;i++){
                console.log(matrix[i][r]);
            }
            r--;
            d=2;
        }else if(d==2){
            for(let i=r;i>=l;i--){
                console.log(matrix[b][i]);
            }

        b--;
        d=3;
        }else if(d==3){
            for(let i=b;i>=t;i--){
                console.log(matrix[i][l]);
            

        l++;
        d=0;
        }

    }
}
    

  return matrix;


}
const matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log("Elements of matrix in spiral order is: ")
const abc=spiralMatrix(matrix);
//spiralMatrix(abc);

//Time Complexity=O(n)
//Space Complexity=O(1) =>no extra space required
