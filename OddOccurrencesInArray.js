/**
* Iterations
* 
* [100%] OddOccurrencesInArray
* https://codility.com/programmers/task/odd_occurrences_in_array/
* Find longest sequence of zeros in binary representation of an integer.
*
* 24th September 2016
*/

function solution(A){
    
    var LIMIT = 1000;
    var arr = A.sort(function(a, b){ return a - b;});
    var tmp = arr;     
    
    var fnc = function(arr, a, b, lng){
        
        lng = lng || 2;
        
        if(arr.length < lng){
            return arr;
        }
        
        
        if(arr[a] === arr[b]){
            arr.shift();
            arr.shift();
           return fnc(arr, 0,1, lng);
        }
        
        if(arr[a] !== arr[b] && arr[a] === arr[b+1]){
            arr.splice(0,a);
           return fnc(arr, 0,1, lng);
        }
        
        if(arr[a] !== arr[b] && arr[b] === arr[b+1]){
            arr.splice(b,b+1);
           return fnc(arr, 0,1, lng);
        }         
        
    }

    if(arr.length > LIMIT){

        tmp = [];
        for(var i = 0, b=0; i <= Math.round(arr.length / LIMIT); i++, b+=LIMIT){
            var t = arr.slice(b,b+LIMIT);
            var a = fnc(t,0, 1, 3);
            
            for(var p = 0; p < a.length; p++){
                tmp.push(a[p]);
            }    
        }
    }
        
     return fnc(tmp,0, 1)[0];
    
}

// Array generator - testing
function genArr(lng, max){

  lng = lng || 99999; // elements to generate
  max = max || 1000000000; // max arry number
  
  var  min = 5, // min array number
  arr = [3]; // init array with odd number
 
  
  for(var i = 0; i < lng; i++){
    var n = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(n);
    arr.push(n); // add pair element
  }

  return arr;
}
