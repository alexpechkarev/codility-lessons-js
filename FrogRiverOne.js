/**
* Counting Elements
* 
* [100%] FrogRiverOne
* https://codility.com/programmers/lessons/4-counting_elements/missing_integer/
* Find the minimal positive integer not occurring in a given sequence.
* 
* Original score was 82%, failed on performance.
* Solution below ported from Dexter Miguel @divmgl
* https://gist.github.com/divmgl/05f3bc7205a2f6c71a8f
*
* 27th October 2016
*/


function solution(X, A) {
    
  var ind = -1, // index
    i = -1,
    sum = 0, // Comparison sum
    Y = (X * (X+1)) / 2,  // Sum of 1..X
    f = []; // Found elements    
    
  // is array empty
    if(A.length < 1){
        return ind;
    }  
    
    if( A.length === 1 && A[0] === X){
        return A.indexOf(X);
    }    


    if( A.indexOf(X) === -1){
        return ind;
    }
    
    
    do{
        i++;
        
        if(f[A[i]]) continue;
        f[A[i]] = true;
        sum += A[i];
        
        if(sum === Y)break;       
        
    }while(i < A.length)
        
 if (i === A.length) return -1;        
        
        return i;

}
