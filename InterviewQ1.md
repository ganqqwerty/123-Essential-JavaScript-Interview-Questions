##### Difference between `undefined` and `not defined` in JavaScript 

> In JavaScript if you try to use variable that doesn't exist and has not been declared, then JavaScript will throw an error `var name is not defined` and script will stop execution there after. But If you use `typeof undeclared_variable` then it will return `undefined`.

Before starting further discussion let understand the difference between deceleration and definition.

`var x` is a declaration because you are not defining what value it holds yet, but you are declaring it's existence and the need of memory allocation. 

```
> var x; // declaring x
> console.log(x); //output: undefined 
```

`var x = 1` is both declaration and definition (also we can say we are doing initialisation), Here declaration and assignment of value happen inline for variable x, In JavaScript every variable declaration and function declaration brings to the top of it's current scope in which It's declared then assignment happen in order this term is called `hoisting`. 

> A variable that is declare but not define and when we try to access it, It will result `undefined`.

```
var x; // Declaration
if(typeof x === 'undefined') // Will return true

```
> A variable that is neither declare nor defined, when we try to reference such variable then It result `not defined`.

```
> console.log(y);  // Output: ReferenceError: y is not defined
```

###### Ref Link: 
http://stackoverflow.com/questions/20822022/javascript-variable-definition-declaration

