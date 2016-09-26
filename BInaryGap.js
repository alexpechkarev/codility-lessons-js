/**
* Iterations
* 
* [100%] BinaryGap
* https://codility.com/programmers/task/binary_gap/
* Find longest sequence of zeros in binary representation of an integer.
*
* 24th September 2016
*/

function solution_bin_gap(N){
    
    if( !Number.isInteger(N) || N < 1){
        return 0;
    }
    
    
    var bin = (N >>> 0).toString(2),
    arr = [],
    cnt = 0;

    for(var i = 0; i < bin.length; i++){
        if(bin[i] === '0'){
            cnt++; 
        }else{
            // only add to array when 1 following 0 i.e. = 1001
            arr.push(cnt);
            cnt = 0;
        }
    }
    arr.sort(function(a, b){ return b - a;});
    
    return arr[0];
    
}
