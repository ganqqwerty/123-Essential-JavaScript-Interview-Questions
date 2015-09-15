# 101-JavaScript-Interview-Question

##### 1. Difference between `undefined` and `not defined` in JavaScript 

> In JavaScript if you try to use variable that doesn't exist and has not been declared, then JavaScript will throw an error `var name is not defined` and script will stop execution there after. But If you use `typeof undeclared_variable` then it will return `undefined`.

Before starting further discussion let understand the difference between deceleration and definition.

`var x` is a declaration because you are not defining what value it holds yet, but you are declaring it's existence and the need of memory allocation. 

```javascript
> var x; // declaring x
> console.log(x); //output: undefined 
```

`var x = 1` is both declaration and definition (also we can say we are doing initialisation), Here declaration and assignment of value happen inline for variable x, In JavaScript every variable declaration and function declaration brings to the top of it's current scope in which It's declared then assignment happen in order this term is called `hoisting`. 

> A variable that is declare but not define and when we try to access it, It will result `undefined`.

```javascript
var x; // Declaration
if(typeof x === 'undefined') // Will return true

```
> A variable that is neither declare nor defined, when we try to reference such variable then It result `not defined`.

```javascript
> console.log(y);  // Output: ReferenceError: y is not defined
```

###### Ref Link: 
http://stackoverflow.com/questions/20822022/javascript-variable-definition-declaration

##### 2. What will be the output of below code ?

```javascript
 var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y);
```
> Above code would give output `1undefined`. If condition statement evaluate using `eval` so `eval(function f(){})` which return `function f(){}` which is true so inside if statement code execute. `typeof f` return undefined because if statement code execute at run time, so statement inside `if` condition evaluated at run time.  

```javascript
 var k = 1;
  if (1) {
    eval(function foo(){});
    k += typeof foo;
  }
  console.log(k); 
```
Above code will also output `1undefined`.

```javascript
 var k = 1;
  if (1) {
    function foo(){};
    k += typeof foo;
  }
  console.log(k); // output 1function
```
##### 3. What is drawback of creating true private in JavaScript?

> One of the drawback of creating true private method in JavaScript is that they are very memory inefficient because a new copy of the method would be created for each instance.

```javascript
var Employee = function (name, company, salary) {
    this.name = name || "";       //Public attribute default value is null
    this.company = company || ""; //Public attribute default value is null
    this.salary = salary || 5000; //Public attribute default value is null

    // Private method
    var increaseSlary = function () {
        this.salary = this.salary + 1000;
    };

    // Public method
    this.dispalyIncreasedSalary = function() {
        increaseSlary();
        console.log(this.salary);
    };
};

// Create Employee class object
var emp1 = new Employee("John","Pluto",3000);
// Create Employee class object
var emp2 = new Employee("Merry","Pluto",2000);
// Create Employee class object
var emp3 = new Employee("Ren","Pluto",2500);
```
Here each instance variable `emp1`, `emp2`, `emp3` has own copy of increaseSalary private method.

So as recommendation don’t go for private method unless it’s necessary.

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

##### 5. Write a mul function which will properly when invoked as below syntax.
  
  ```javascript
  console.log(mul(2)(3)(4)); // output : 24 
  console.log(mul(4)(3)(4)); // output : 48
  ```

> Below is code followed by an explanation how it works:

```javascript
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

#### 6. How to empty an array in JavaScript ?

For instance,

```javascript
 var arrayList =  ['a','b','c','d','e','f'];
```
How can we empty above array ?

> There are couple of ways by which we can empty an array, So let's discuss all the possible way by which we can empty an array.

#### Method 1 
```javascript
arrayList = []
```
Above code will set the variable `arrayList` to a new empty array. This is recommended if you don't have **references to the original array** `arrayList` anywhere else because It will actually create new empty array. You should be careful with this way of empty the array,because if you have referenced this array from another variable, then the original reference array will remain unchanged, Only use this way if you have only reference the array by it's original variable `arrayList`.

For Instance,

```javascript
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList = []; // Empty the array 
console.log(anotherArrayList); // Output ['a','b','c','d','e','f']
```
    
#### Method 2
```javascript
arrayList.length = 0;
```
Above code will clear the existing array by setting it's length to 0. This way of empty the array also update all the reference variable which pointing to the original array. This way of empty the array is useful when you want to update all the another reference variable which pointing to `arrayList`.

For Instance,

```javascript
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```
#### Method 3
```javascript
arrayList.splice(0, arrayList.length);
```
Above implementation will also work perfectly. This way of empty the array will also update all the references of original array.

```javascript
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```
#### Method 4

```javascript
while(arrayList.length){
	arrayList.pop();
}
```
Above implementation can also empty the array. But not recommended to use often. 

#### 7. How to check if an object is an array or not ?

> The best way to find whether a object is instance of a particular class or not using `toString` method from `Object.prototype`

```javascript
  var arrayList = [1,2,3];
```
One of the best use cases of type checking of object is when we do method overloading in JavaScript. For understanding this let sat we have a method called `greet` which take one single string and also list of string, so making our greet method workable in both situation we need to know what kind of parameter is being passed, is it single value or list of value ?

```javascript
 function greet(param){
 	if(){ // here have to check whether param is array or not 
 	}else{
 	}
 }
```
However in above implementation it might not necessary to check type for array, we can check for single value string and put array logic code in else block, let see below code for the same.

```javascript
 function greet(param){
 	if(typeof param === 'string'){ 
 	}else{
 	  // If param is of type array then this block of code would execute
 	}
 }
```
Now It's fine we can go with above two implementation, but when we have situation like parameter can be `single value`, `array`, and `object` type then we will be in trouble. 

Coming back to checking type of object, As we mentioned that we can use 
`Object.prototype.toString` 

```javascript
if( Object.prototype.toString.call( arrayList ) === '[object Array]' ) {
    console.log('Array!');
}
```

If you are using `jQuery` then you can also used jQuery `isArray` method:

```javascript
  if($.isArray(arrayList)){
    console.log('Array');
  }else{
  	console.log('Not an array');
  }
```
FYI jQuery uses `Object.prototype.toString.call` internally to check whether object is an array or not.

In Modern browser you can also use 
```javascript
Array.isArray(arrayList);
```
`Array.isArray` is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5
 
##### 8. What will be the output of below code ?

```javascript
var output = (function(x){
    delete x;
    return x;
  })(0);
  
  console.log(output);
```
> Above code will output `0` as output. `delete` operator is used to delete property from object. Here `x` is not an object it's **local variable**. `delete` operator doesn't affect local variable.

##### 9. What will be the output of below code ?

```javascript
var x = 1;
var output = (function(){
    delete x;
    return x;
  })();
  
  console.log(output);
```
> Above code will output `1` as output. `delete` operator is used to delete property from object. Here `x` is not an object it's **global variable** of type `number`.

##### 10. What will be the output of below code ?

```javascript
var x = { foo : 1};
var output = (function(){
    delete x.foo;
    return x.foo;
  })();
  
  console.log(output);
```
> Above code will output `undefined` as output. `delete` operator is used to delete property from object. Here `x` is an object which has foo as a property and from self-invoking function we are deleting foo property of object `x` and after deletion we are trying to reference deleted property `foo` which result `undefined`.

##### 11. What will be the output of below code ?

```javascript
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
```
> Above code will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn't delete prototype property. 

`emp1` object doesn't have **company** as it's own property. you can test it `console.log(emp1.hasOwnProperty('company')); //output : false` However we can delete company property directly from `Employee` object using `delete Employee.company` or we can also delete from `emp1` object using `__proto__` property `delete emp1.__proto__.company`.

##### 12. What is `undefined x 1` in JavaScript

```javascript
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
```
when you run above code and do `console.log(trees);` in chrome developer console then you will get 
`["redwood", "bay", "cedar", undefined × 1, "maple"]` and when you run above code in Firefox browser console then you will get `["redwood", "bay", "cedar", undefined, "maple"]` so from these It's cleared that chrome has it's own way of displaying uninitialised index in array. But when you check `trees[3] === undefined` in both of the browser you will get similar output as `true`. 

**Note:** Please remember you need not check for uninitialised index of array in  `trees[3] === 'undefined × 1'` it will give error, Because `'undefined × 1'` this is just way of displaying uninitialised index of array in chrome.

##### 13. What will be the output of below code ?

```javascript
var trees = ["xyz","xxxx","test","ryan","apple"];
delete trees[3];
  
  console.log(trees.length);
```
> Above code will output `5` as output. When we used `delete` operator for deleting an array element then, the array length is not affected from this. This holds even if you deleted all the element of array using `delete` operator.

So when delete operator removes an array element that deleted element is not longer present in array. In place of value at deleted index `undefiend x 1` in **chrome** and `undefiend` is placed at the index. If you do `console.log(trees)` output `["xyz", "xxxx", "test", undefined × 1, "apple"]` in Chrome and in Firefox `["xyz", "xxxx", "test", undefined, "apple"]`.

##### 14. What will be the output of below code ?

```javascript
var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);   
```
> Above code will output `1, "truexyz", 2, 1` as output. General guideline  for addition of operator: 
 
> * Number + Number  -> Addition 
> * Boolean + Number -> Addition 
> * Boolean + Number -> Addition 
> * Number + String  -> Concatenation
> * String + Boolean -> Concatenation
> * String + String 	-> Concatenation


##### 15. What will be the output of below code ?

```javascript
var z = 1, y = z = typeof y;
console.log(y);  
```
> Above code will output `undefined` as output. According to `associativity` rule operator with same precedence are processed based on there associativity property of operator. Here associativity of assignment operator is `Right to Left` so first `typeof y` will evaluate first which is `undefined` and assigned to `z` and then `y` would be assigned value of z and then `z` would be assign value `1`.

##### 16. What will be the output of below code ?

```javascript
 // NFE (Named Function Expression 
 var foo = function bar(){ return 12; };
 typeof bar();  
```
> Above code will output `Reference Error` as output. For making above code work you can re-write above code as follow: 

**Sample 1**

```javascript
 var bar = function(){ return 12; };
 typeof bar();  
```
or 

**Sample 2**

```javascript
 function bar(){ return 12; };
 typeof bar();  
```
function definition can have only one reference variable as a function name, In above code **sample 1** bar is reference variable which is pointing to `anonymous function` and in **sample 2** function definition is name function.

```javascript
 var foo = function bar(){ 
    // foo is visible here 
    // bar is visible here
 	console.log(typeof bar()); // Work here :)
 };
 // foo is visible here
 // bar is undefined here
  
```

##### 17. what is difference between declaring function in below format ?

```javascript
 var foo = function(){ 
	// Some code
 }; 
```

```javascript
 function bar(){ 
	// Some code
 }; 
```
The main difference is function `foo` is defined at `run-time` whereas function `bar` is defined at parse time. For understanding It in better way let see below code : 

```javascript
Run-Time function declaration 
<script>
foo(); // Call foo function here, It will give Error
 var foo = function(){ 
		console.log("Hi I am inside Foo");
 }; 
 </script>
```
```javascript
<script>
Parse-Time function declaration 
bar(); // Call foo function here, It will not give Error
 function bar(){ 
	console.log("Hi I am inside Foo");
 }; 
 </script>
```
The another advantage of first-one way of declaration that you can declare function based on certain condition for example: 

```javascript
<script>
if(testCondition) {// If testCondition is true then 
	 var foo = function(){ 
		console.log("inside Foo with testCondition True value");
	 }; 
 }else{
 	 var foo = function(){ 
		console.log("inside Foo with testCondition false value");
	 }; 
 }
 </script>
```
But If you try to run similar code in below format It would give error 

```javascript
<script>
if(testCondition) {// If testCondition is true then 
	 function foo(){ 
		console.log("inside Foo with testCondition True value");
	 }; 
 }else{
 	 function foo(){ 
		console.log("inside Foo with testCondition false value");
	 }; 
 }
 </script>
```
##### 18. what is function hoisting in JavaScript? 

**Function Expression**

```javascript
 var foo = function foo(){ 
 	return 12; 
 }; 
```
> In JavaScript variable and functions are `hoisted`. Let's take function `hoisting` first. Basically, the JavaScript interpreter looks ahead to find all the variable declaration and hoists them to the top of the function where it's declared. For Example:

```javascript
 foo(); // Here foo is still undefined 
 var foo = function foo(){ 
 	return 12; 
 }; 
```
Above code behind the scene look something like below code: 

 ```javascript
   var foo = undefined;
      foo(); // Here foo is undefined 
  	   foo = function foo(){
  	      / Some code stuff
       }
 ```
 ```javascript
   var foo = undefined;
  	   foo = function foo(){
  	      / Some code stuff
       }
       foo(); // Now foo is defined here
 ```

 ##### 19. What will be the output of below code ? 

 ```javascript
 var salary = "1000$";

 (function () {
     console.log("Original salary was " + salary);

     var salary = "5000$";

     console.log("My New Salary " + salary);
 })();
 ```
 > Above code will output: `undefined, 5000$`. JavaScript has hoisting concept where newbie get tricked. In above code, you might be expecting `salary` to retain it's value from outer scope until the point that `salary` was re-declared in the inner scope. But due to `hoisting` salary value was `undefined` instead. To understand It better have a look of below code, here `salary` variable is hoisted and declared at the top in function scope and while doing console.log it's result `undefined` and after that it's been redeclare and assigned `5000$`.

 ```javascript
 var salary = "1000$";

 (function () {
     var salary = undefined;
     console.log("Original salary was " + salary);

     salary = "5000$";

     console.log("My New Salary " + salary);
 })();
 ```

 ##### 20. What is the `instanceof` operator in JavaScript? what would be the output of below code ? 

```javascript
function foo(){ 
	return foo; 
}
new foo() instanceof foo;
```
> `instanceof` operator checks the current object and return true if the object is of the the specified type.

For Example: 

```javascript
 var dog = new Animal();
 dog instanceof Animal // Output : true
```
Here `dog instanceof Animal` is true since `dog` inherits from `Animal.prototype`

```javascript
 var name = new String("xyz");
 name instanceof String // Output : true
```
Here `name instanceof String` is true since `dog` inherits from `String.prototype`. Now let's understand the working of below code 

```javascript
function foo(){ 
	return foo; 
}
new foo() instanceof foo;
```
Here function `foo` is returning `foo` which is again pointer to function `foo`

```javascript
function foo(){ 
	return foo; 
}
var bar = new foo();
// here bar is pointer to function foo(){return foo}.
```
So the `new foo() instanceof foo` return `false`;


Ref Link: http://stackoverflow.com/questions/2449254/what-is-the-instanceof-operator-in-javascript

##### 21. If we have JavaScript associative array as below code : 

```javascript
  var counterArray = {
  		 A : 3,
  		 B : 4
  };
  counterArray["C"] = 1;
```
##### How we will calculate length of the above associative array `counterArray` 

> There are no in-built function and property available to calculate length of associative array object, However there are ways by which we can calculate the length of associative array object, In addition to this we can also extend `Object` by adding method or property on prototype for calculate length but extending object might break enumeration in various libraries or might create cross-browser issue, so It's not recommended unless it's necessary. There are various way by which we can calculate length.

`Object` has `keys` method which can we used to calculate the length of object.

```javascript
 Object.keys(counterArray).length // Output 2 
```
We can also calculate length of object by iterating through object and by doing count of own property of object.  

```javascript
function getSize(object){
	var count = 0;
	for(key in object){
	  // hasOwnProperty method check own property of object
	  if(object.hasOwnProperty(key)) count++;
	}
	return count;
}
```
> We can also add `length` method directly on `Object` see below code.

```javascript
  Object.length = function(){
  	var count = 0;
	for(key in object){
	  // hasOwnProperty method check own property of object
	  if(object.hasOwnProperty(key)) count++;
	}
	return count;
  }
  //Get the size of any object using
  console.log(Object.length(counterArray))
```
**Bonus**: We can also use `Underscore` (recommended, As it's lightweight) to calculate object length.

