/**
* Time Complexity
* 
* [100%] FrogJmp
* https://codility.com/programmers/task/frog_jmp/
* Count minimal number of jumps from position X to Y.
* Detected time complexity: O(1)
*
* 28th September 2016
*/

function solution(X,Y,D){

    if(X >= Y){
        return 0;
    }
    
    if((X+D) >= Y){
        return 1;
    }
    
    return Math.ceil((Y - X)/D);
}
