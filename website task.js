//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

function addfive(n){
    return n+5;
}
console.log(addfive(5));
console.log(addfive(0));
console.log(addfive(-5));

//Write a function called “getOpposite”.
// Given a number, return its opposite
function getopposite(n){
    if(n==parseInt(n)){
    if(n>0){
        return -n;
    }
    else if (n==0) {
        return n;
    } 
    
    else if(n<0)
    {
        return Math.abs(n);
    }
    else{
        return -1;
    }}
    else{
        return -1;
    }
}
console.log(getopposite(5));
console.log(getopposite(-5));
console.log(getopposite(0));
console.log(getopposite("5a"));
console.log(getopposite(5.5));

//Fill in your code that takes an number minutes and converts it to seconds.
// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120
const toSeconds=(n)=>n*60;
console.log(toSeconds(5));
console.log(toSeconds(3));
console.log(toSeconds(2));

//Create a function that takes a string and returns it as an integer.
// Examples
// toInteger(“6”) ➞ 6
// toInteger(“1000”) ➞ 1000
// toInteger(“12”) ➞ 12
const tointeger=(n)=>parseInt(n);
console.log(tointeger("6"));

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2
const nextNumber=(n)=>++n;
console.log(nextNumber(5));

//Create a function that takes an array and returns the first element.

var arr=[1, 2, 3];
const array=(n)=>n;
console.log(array(arr[0])) ;

//Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400
const hourToSeconds=(n)=>n*3600;
for(i in arr){
console.log(hourToSeconds(arr[i]));
}

//find the perimeter of a rectangle
function findperimeter(numb1,numb2){
    return 2*(numb1+numb2);
}
console.log(findperimeter(5,10));

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessthan100(n1,n2){
    if(n1+n2<100){
        return true;
    }
    else{
        return false;
    }
}
console.log(lessthan100(22,15));

//Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function remainder(n1,n2){
    return n1%n2;
}
console.log(remainder(1,3));

//MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
let turkey=2;
let horse=4;
let pigs=4;
function countanimals(n1,n2,n3){
return((n1*turkey)+(n2*horse)+(n3*pigs));
}
console.log(countanimals(2,3,5));

//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2){
    return num1*num2*60;
}
console.log(frames(1,2));

//Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisiblebyFive(num1){
    if(num1%5==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(divisiblebyFive(-55));

//Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.
function isEven(n){
    if(n%2==0){
        return true;
    }
    else if(n%2!=0){
        return false;
    }
}
console.log(isEven("11H"));

//Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(n1,n2){
    if(n1%2!=0 && n2%2!=0){
        return true;
    }
    else{
        return false;
    }
}
console.log(areBothOdd(1,3));

//Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
function getfullName(firstname,lastname){
    return firstname+" "+lastname;
}    
console.log(getfullName("guvi","geeks"));

// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthofWord(word1){
    return word1.length;
}
console.log(getLengthofWord("guvi"));

//Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
function issamelength(word1,word2){
    if(word1.length==word2.length){
        return true;
    }
    else{
        return false;
    }
}
console.log(issamelength("guvi","geeks"));

//Create a function to calculate the distance between two points defined by their x, y coordinates
function getdistance(x1,y1,x2,y2){
    return Math.pow((x2-x1)+(y2-y1),0.5);
}
console.log(getdistance(100,100,400,300));

//Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
function getNthElement(array,n){
    return array[n];
}
console.log(getNthElement([1,3,5],1));

//Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
function getLastElement(n){
    return n[n.length-1];
}
console.log(getLastElement([1,2,3,4]));
 
// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
    mykey: 'value',
    };
    function getproperty(obj,mykey){
        
        return obj["mykey"];
        
    }
console.log(getproperty(obj,'mykey'));

//Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
function addproperty(obj,key){
    obj.mykey=true;
    return obj.mykey;
}
console.log(addproperty(obj,'mykey'));

//Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
function removeproperty(obj,name){
    delete obj.name;
    return obj.name;
}
console.log(removeproperty(obj,'mykey'));

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr=[-5, 10, -3, 12, -9, 5, 90, 0, 1];
var count=0;
var sum=0;
function countPositivesSumNegatives(a){
  
    for(i in a){
    if(a[i]>0){
        count++;
    }
    else if (a[i]<0) {
     sum+=parseInt(a[i]);
       
    } 
        
    }
console.log(`sum of negative numbers: ${sum}
count of positive numbers: ${count}`);
}
countPositivesSumNegatives(arr);

//Create a function that receives an array of numbers and returns an array containing only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
x=[];
function getpositives(a){
    
        for(i in a){
            if(a[i]>0){
        x.push(a[i]);
        }
    
    }
    console.log (x);
}
getpositives(ar);

//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersoftwo(n){
    var y=[];
    for(i=0;i<=n;i++){
        y.push(Math.pow(2,i));
    }
    return y;
}
console.log(powersoftwo(5));

//Find the maximum number in an array of numbers
function Findmax(a){
    return `Max : ${Math.max(...a)}`;
}
console.log(Findmax([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

//Print the first 100 prime numbers
function primenumbers(){
    var count=0;
    var z=[];
    for(i=1;i<=100;i++){
        count=0;
        for(j=1;j<=i;j++){
            if(i%j==0){
                count++;
            }
        }
        if(count==2){
            z.push(i);
        }
    }
    return z;
}
console.log(primenumbers());

//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
function getprimes(nprimes,startat){
    var count=0;
    var m=[];
    for(i=startat;i<=nprimes;i++ ){
        count=0
        for(j=1;j<=i;j++){
            if(i%j==0){
            count++
            }
        }
                if(count==2){
            m.push(i);
        }
    }
        return m;
}
console.log(getprimes(10,1));

//reverse a string
var s="javascript";
function reversestring(n){
    var s=n.split("");
    for(i in s){
        s[i]==s[s.length-i-1];
    }
    return s.join("");
}
console.log(s);

//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
function mergearrays(n1,n2){
    var array=[...n1,...n2];
    return array;
}
console.log(mergearrays(ar1,ar2));

// Calculate the sum of numbers received in a comma delimited string
function sumCSV(N){
    N=N.split(" ");
    var sum=0;
    for(i in N){
        sum+=parseInt(N[i]);
    }
    return sum;
}
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));

