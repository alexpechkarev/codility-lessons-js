/**
* Time Complexity
* 
* [100%] PermMissingElem
* https://codility.com/programmers/task/perm_missing_elem/
* Find the missing element in a given permutation.
* Detected time complexity: O(1)
*
* 28th September 2016
*/

function solution(A){
    
     var num = 1;
    
    // not an array or empty list
    if(!Array.isArray(A) || A.length < 1){
        return num;
    }

    // iterate array with three or more elements
    var fnc = function(arr){
        
        var n = false;
        for(var i = 0, b = 1; b < arr.length; i++, b++){

            // is item in the middle
            if(arr[i]+1 !== arr[b]){
                n =  arr[i]+1;
                break;

            }
        }
        
        // all items in order than check first and last items
        if( n === false ){
            if(arr[0] < 2){
                // [1,2,3] - return 4
                n = arr[arr.length-1]+1;

            }else{
                // [2,3,4] - return 1
                n = arr[0]-1;
            }
        }
        return n;
    };
    
    // sort array in asccending order
    A.sort(function(a,b){return a - b;});
    
    
    switch(A.length){
        
        case 1:
            //[1] - return 2; [2] - return 1
            return A[0] > 1 ? A[0]-1 : A[0]+1;
            break;
            
        case 2:
            // [2,3] - return 1
            if( A[0] > 1 && A[0]+1 ===  A[1]){

                return A[0]-1;

            // [2,4] - return 3
            }else if( A[0] > 1 && A[0]+1 < A[1]){

                return A[0]+1;

            // [1,2] - return 3    
            }else if( A[0] < 2 && A[0]+1 ===  A[1]){

               return A[1]+1;

            // [1,3] - return 2    
            }else if( A[0] < 2 && A[0]+1 <  A[1]){

                return A[0]+1;
            }            
            
            break;
            
        default:
            return fnc(A);
            
            break;
    }
 
}
