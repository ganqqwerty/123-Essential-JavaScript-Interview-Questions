var myRevealingModule = (function () {
 
        var privateCounter = 0;
 
        function privateFunction() {
            privateCounter++;
        }
 
        function publicFunction() {
            publicIncrement();
        }
 
        function publicIncrement() {
            privateFunction();
        }
 
        function publicGetCount(){
          return privateCounter;
        }
 
        // Reveal public pointers to
        // private functions and properties
 
       return {
            start: publicFunction,
            increment: publicIncrement,
            count: publicGetCount
        };
 
    })();
 
myRevealingModule.start();