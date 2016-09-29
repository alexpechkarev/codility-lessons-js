/**
* Counting Elements
* 
* [100%] MissingInteger
* https://codility.com/demo/results/training8NDEH9-NTA/
*
* Find the minimal positive integer not occurring in a given sequence.
* https://codility.com/programmers/task/missing_integer/
* Detected time complexity: O(N)
*
* 29th September 2016
*/

function solution(A){
    
    // get positive nums grater than 0 than srot them asc
    var pos = A.filter(function(num){return num > 0; })
            .sort(function(a, b){return a - b;});
    
    //is array empty or first elem greater than 1 - return 1
    if(pos.length < 1 || pos[0] > 1){
        return 1;
    }
    
    // iterate over els and find missing number
    for(var i = 0; i < pos.length; i++){
        
         // is current el not equal to next el and curr el+1 not equal to next el
         // [1,2,3,5] - 3+1 !== 5 - return (3+1)
        if( pos[i] !== pos[i+1] && pos[i]+1 !== pos[i+1]){
            return pos[i]+1;
            break;
        }
    }
  
}
