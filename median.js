 //6. Find the median of the array elements
 let a=[5,3,6,7];
 let b=[10,23,45,66];
 let m=[...a,...b];
 let temp;
 for(i=0;i<m.length;i++){                           //SORTING
     for(j=i+1;j<m.length;j++){
         if(m[i]>m[j]){
             temp=m[i];
             m[i]=m[j];
             m[j]=temp;
         }
     }
 }
 (()=>{                                          //function for finding median
     let median;
       if(m.length%2==0){
           median=(m[(m.length/2)-1]+m[(m.length/2)])/2;
       }
       else
       {
           median=m[(m.length-1)/2];
       }
       console.log(median);

 })(m);
