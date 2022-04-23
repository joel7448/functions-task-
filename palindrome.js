//5.Return all palindromes in a array
let A=["bob","cact","cat","malayalam"];
    
(()=>{
let count=0;
for(i=0;i<A.length;i++){
    count=0;
    for(j=0;j<A[i].length;j++){
        if(A[i][j]==A[i][A[i].length-1-j])
        {
            count++;
            
        }
    }
    if(count==A[i].length){
        console.log("Palindrome:",A[i]);
    }

} 

})(A);