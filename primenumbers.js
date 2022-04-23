//4. Return all the prime numbers in the array

((...z)=>{
    let count=0;
    let prime=[];
    for(i in z){
        count=0;
        for(j=1;j<=z[i];j++){
            if(z[i]%j==0){
                count++;
            }}
                if(count==2){
                prime.push(z[i]);
            }
        }
        console.log(prime);
    })(12,13,5,6,1);