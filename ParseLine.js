function solution(A){
    
    var arr = A.split(';');
    var obj = {};
    
    
    var countMin = function(t){
        
        var tt = t.split(':'), min = 0;

        
        min = parseInt(tt[0]) > 0 ? parseInt(tt[0]) * 60 : 0;
        min = parseInt(min) + parseInt(tt[1]);
        min = parseInt(tt[2]) > 0 ? parseInt(min) + 1 : min;
        
        return min;
    };
    
    
    var sortObj = function(obj){
        
        var arr = [];
      
        for(var prop in obj){
            
            if(obj.hasOwnProperty(prop)){
                arr.push({
                    'prop':prop,
                    'value':obj[prop]
                });
            }
        }
        
        
        
        return arr.sort(function(a, b){ return a.value - b.value;});
        
    };
    
    
    var calcSum = function(arr){
        
        
        
        var sum = 0, price = 0;
        
        for(var i = 0; i < arr.length; i++){
                            
                sum = parseInt(sum) + parseInt(arr[i].value);
        }
         
         
         
        for(var i = 1; i <= sum; i++){
            
            if(i <= 5 ){
                price = parseFloat(price) + 0.05;
            }else{
                price = parseFloat(price) + 0.15;
            }
        }


        
        return price.toFixed(2);
    };
    
    for(var i = 0; i < arr.length; i++){
        
        var e = arr[i].split(' ');
        
        if(obj.hasOwnProperty(e[0])){
           
            obj[e[0]] = parseInt(obj[e[0]]) + parseInt(countMin(e[1]));
        }else{
            obj[e[0]] = parseInt(countMin(e[1]));
        }
        
    }
    
    
    
    var sortArr = sortObj(obj);
    
    return calcSum(sortArr);
}

console.log(solution("4578451 00:02:34;4512471 00:03:45;4578412 00:05:59;4512471 00:00:23;56456456 00:12:34"));
