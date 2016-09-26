/**
* Arrays
* 
* [100%] CyclicRotation
* Rotate an array to the right by a given number of steps.
* 26th September 2016
*/

function solution(A, K){
    
    if(K < 1 || A.length < 1){
        return A;
    }

    var indx = A.length - K; 
    
    if(K > A.length){
        
        while(K > A.length){
            K-=  A.length;  
        }
        indx = A.length -K; 
    }
    var rt = A.splice(0,indx);

    rt.forEach(function(el){
       A.push(el); 
    });
    
    return A;

}
