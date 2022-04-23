 //7.Remove duplicates from an array
 let array= [1,2,3,2,5,3,3,5];
    
 (()=>{
     for(i=0;i<array.length;i++){
         for(j=i+1;j<array.length;j++){
             if(array[i]===array[j]){
                 array[j]="";
             }
         }
     }
     console.log(array.join("").split(""));

 })(array);

 