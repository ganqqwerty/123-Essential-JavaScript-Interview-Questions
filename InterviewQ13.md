##### Write a mul function which will properly when invoked as below syntax.
  
  ```
  console.log(mul(2)(3)(4)); // output : 24 
  console.log(mul(4)(3)(4)); // output : 48
  ```

> Below is code followed by an explanation how it works:

```
function mul (x) {
    return function (y) { // anonymous function 
        return function (z) { // anonymous function 
            return x * y * z; 
        };
    };
}
```

Here `mul` function accept first argument and return anonymous function which take second parameter and return anonymous function which take third parameter and return multiplication of arguments which is being passed in successive 

In Javascript function defined inside has access to outer function variable and function is first class object so it can be returned by function as well and passed as argument in another function.

* A function is an instance of the Object type
* A function can have properties and has a link back to its constructor method
* Function can be stored as variable 
* Function can be pass as a parameter to another function
* Function can be return from function
