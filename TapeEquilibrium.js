/**
* Time Complexity
* 
* [100%] TapeEquilibrium
* Detected time complexity:O(N)
* https://codility.com/programmers/task/odd_occurrences_in_array/
* Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
*
* 27th September 2016
*/

function solution(A){
    
    var B = [], min;
    

        
    B = B.concat(A.splice(0,1));

    var a = A.reduce(function(a, b) {return a + b;});
    var b = B.reduce(function(a, b) {return a + b;}); 
    var num = Math.abs(b - a);

    if(typeof min === 'undefined' || min > num){
        min = num;
    }        

    if(A.length + B.length < 3){
        return min;
    }

    for(var i = 0; i < A.length-1; i++){

        b+= A[i];
        a-= A[i];
        var num = Math.abs(b - a);


        if( min > num){
            min = num;
        }

    }
        
    return min;
        
     
     

}

// Array generator - testing
function genArr(lng, max){

  lng = lng || 99999; // elements to generate
  max = max || 1000000000; // max arry number
  
  var  min = -100000; // min array number
  var arr = [];
 
  
  for(var i = 0; i < lng; i++){
    var n = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(n);
  }

  return arr;
}
