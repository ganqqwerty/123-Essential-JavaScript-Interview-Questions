##### 4.What is “closure” in javascript? Provide an example ?

> A closure is a function defined inside another function (called parent function) and has access to variable which is declared and defined in parent function scope.

The closure has access to variable in three scopes:

 * Variable declared in his own scope 
 * Variable declared in parent function scope 
 * Variable declared in global namespace

```javascript
var globalVar = "abc"; 

// Parent self invoking function 
(function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';    
    // Closure self-invoking function 
    (function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y"; 
        console.log(          
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);
 
    }// end of scope innerFunction)(5); // Pass 5 as parameter 
}// end of scope outerFunction )(7); // Pass 7 as parameter 
```
`innerFunction` is closure which is defined inside `outerFunction` and has access to all variable which is declared and defined in outerFunction scope. In addition to this function defined inside function as closure has access to variable which is declared in `global namespace`.

Output of above code would be:

```javascript
outerArg = 7
outerFuncVar = x
innerArg = 5
innerFuncVar = y
globalVar = abc

```
