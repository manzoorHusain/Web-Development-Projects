function fibonacciGenerator (n) {
        var fibonacciArray = [];
        if(n === 1){
          fibonacciArray[0] = 0;
        }
        else if (n === 2) {
            fibonacciArray[0] = 0;
            fibonacciArray[1] = 1;
        }
        else {
            fibonacciArray[0] = 0;
            fibonacciArray[1] = 1;
            var i = 2;
            while (i < n) {
                fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];  
                i++;
            }
        }
        return fibonacciArray;
    }
    console.log(fibonacciGenerator(12));