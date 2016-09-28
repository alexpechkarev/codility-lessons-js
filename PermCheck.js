/**
* Counting Elements
* 
* [100%] PermCheck
* https://codility.com/programmers/task/perm_check/
* Check whether array A is a permutation.
* Detected time complexity: O(N)
*
* 28th September 2016
*/

function solution(A){
    
    // not an array or empty list
    if(!Array.isArray(A) || A.length < 1){
        return 0;
    }

    // iterate array with three or more elements
    var fnc = function(arr){
        
        var n = 1;
        for(var i = 0, b = 1; b < arr.length; i++, b++){

            // is item in the middle
            if(arr[i]+1 !== arr[b]){
                n =  0;
                break;

            }
        }
        
        return n;
    };
    
    // sort array in asccending order
    A.sort(function(a,b){return a - b;});
    
    
    switch(A.length){
        
        case 1:
            if(A[0] === 1){
                return 1;
            }else{
                return 0;
            }
            break;
            
        case 2:
            // [2,3] - return 0
            if( A[0] !== 1){

                return 0;

            // [2,4] - return 0
            }else if( A[0] === 1 && A[0]+1 !== A[1]){

                return 0;

            // [1,2] - return 1   
            }else if( A[0] === 1 && A[0]+1 === A[1]){

               return 1;

            }            
            
            break;
            
        default:
            return fnc(A);
            
            break;
    }    
    
}
