//3. Sum of all numbers in an array
((...a)=>{
    let sum=0;
    for(i in a){
sum+=parseInt(a[i]);
    }
    console.log("sum of the array elements:",sum);
})(1,2,3,4,5,6,7,8,9,10);