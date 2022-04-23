//8.rotate array K times
let l=['a','m','a','z','o','n'];
((k)=>{
   for(i=1;i<=k;i++){
       l.reverse();
   } 
   console.log(l);
})(3);