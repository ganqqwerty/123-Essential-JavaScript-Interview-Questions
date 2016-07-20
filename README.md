![](coverPage.png)

## This Book will be completed by June 1 2016 and available to buy. If you want me to sent early copy of this book then please add your name and email address in google form here [Google Form](http://goo.gl/forms/QSpxVtvsNb).

[![Join the chat at https://gitter.im/nishant8BITS/123-Essential-JavaScript-Interview-Question](https://badges.gitter.im/nishant8BITS/123-Essential-JavaScript-Interview-Question.svg)](https://gitter.im/nishant8BITS/123-Essential-JavaScript-Interview-Question?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Have question for me ?
[Ask me @nishant kumar](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

# 123-JavaScript-Interview-Question
## 1. Difference between `undefined` and `not defined` in JavaScript
> In JavaScript if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error `var name is not defined` and the script will stop execute thereafter. But If you use `typeof undeclared_variable` then it will return `undefined`.

Before starting further discussion let's understand the difference between declaration and definition.

`var x` is a declaration because you are not defining what value it holds yet, but you are declaring its existence and the need of memory allocation.

```javascript
var x; // declaring x
console.log(x); //output: undefined
```

`var x = 1` is both declaration and definition (also we can say we are doing initialisation), Here declaration and assignment of value happen inline for variable x, In JavaScript every variable declaration and function declaration brings to the top of its current scope in which it's declared then assignment happen in order this term is called `hoisting`.

> A variable that is declared but not define and when we try to access it, It will result `undefined`.

```javascript
var x; // Declaration
if(typeof x === 'undefined') // Will return true
```

> A variable that neither declared nor defined when we try to reference such variable then It result `not defined`.

```javascript
console.log(y);  // Output: ReferenceError: y is not defined
```

### Ref Link:
[http://stackoverflow.com/questions/20822022/javascript-variable-definition-declaration](http://stackoverflow.com/questions/20822022/javascript-variable-definition-declaration)

## Have doubt in this question ??
[Schedule time to discuss with me @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

## 2. What will be the output of the following code?

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

> Above code would give output `1undefined`. If condition statement evaluate using `eval` so `eval(function f() {})` which return `function f() {}` which is true so inside if statement code execute. `typeof f` return undefined because if statement code execute at run time, so statement inside `if` condition evaluated at run time.  

```javascript
var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k);
```

Above code will also output `1undefined`.

```javascript
var k = 1;
if (1) {
  function foo() {};
  k += typeof foo;
}
console.log(k); // output 1function
```

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

## 3. What is the drawback of creating true private in JavaScript?
> One of the drawback of creating a true private method in JavaScript is that they are very memory inefficient because a new copy of the method would be created for each instance.

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

So as recommendation don't go for a private method unless it's necessary.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

## 4.What is “closure” in javascript? Provide an example?
> A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

The closure has access to variable in three scopes:
- Variable declared in his own scope
- Variable declared in parent function scope
- Variable declared in global namespace

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
    } // end of scope innerFunction)(5); // Pass 5 as parameter
} // end of scope outerFunction )(7); // Pass 7 as parameter
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

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

## 5. Write a mul function which will properly when invoked as below syntax.

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

Here `mul` function accept the first argument and return anonymous function which take the second parameter and return anonymous function which take the third parameter and return multiplication of arguments which is being passed in successive

In Javascript function defined inside has access to outer function variable and function is the first class object so it can be returned by function as well and passed as argument in another function.
- A function is an instance of the Object type
- A function can have properties and has a link back to its constructor method
- Function can be stored as variable
- Function can be pass as a parameter to another function
- Function can be returned from function

### 6. How to empty an array in JavaScript?
For instance:

```javascript
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
```

How can we empty above array?

> There are a couple of ways by which we can empty an array, So let's discuss all the possible way by which we can empty an array.

### Method 1

```javascript
arrayList = [];
```

Above code will set the variable `arrayList` to a new empty array. This is recommended if you don't have **references to the original array** `arrayList` anywhere else because It will actually create a new empty array. You should be careful with this way of empty the array, because if you have referenced this array from another variable, then the original reference array will remain unchanged, Only use this way if you have only referenced the array by its original variable `arrayList`.

For Instance:

```javascript
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList = []; // Empty the array
console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']
```

### Method 2

```javascript
arrayList.length = 0;
```

Above code will clear the existing array by setting its length to 0. This way of empty the array also update all the reference variable which pointing to the original array. This way of empty the array is useful when you want to update all the another reference variable which pointing to `arrayList`.

For Instance:

```javascript
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```

### Method 3

```javascript
arrayList.splice(0, arrayList.length);
```

Above implementation will also work perfectly. This way of empty the array will also update all the references of the original array.

```javascript
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```

### Method 4

```javascript
while(arrayList.length) {
  arrayList.pop();
}
```

Above implementation can also empty the array. But not recommended to use often.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

### 7. How to check if an object is an array or not?
> The best way to find whether an object is instance of a particular class or not using `toString` method from `Object.prototype`

```javascript
var arrayList = [1 , 2, 3];
```

One of the best use cases of type checking of an object is when we do method overloading in JavaScript. For understanding this let say we have a method called `greet` which take one single string and also a list of string, so making our `greet` method workable in both situation we need to know what kind of parameter is being passed, is it single value or list of value?

```javascript
function greet(param) {
  if() {
    // here have to check whether param is array or not
  }
  else {
  }
}
```

However, in above implementation it might not necessary to check type for array, we can check for single value string and put array logic code in else block, let see below code for the same.

```javascript
 function greet(param) {
   if(typeof param === 'string') {
   }
   else {
     // If param is of type array then this block of code would execute
   }
 }
```

Now it's fine we can go with above two implementations, but when we have a situation like a parameter can be `single value`, `array`, and `object` type then we will be in trouble.

Coming back to checking type of object, As we mentioned that we can use `Object.prototype.toString`

```javascript
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}
```

If you are using `jQuery` then you can also used jQuery `isArray` method:

```javascript
if($.isArray(arrayList)) {
  console.log('Array');
} else {
  console.log('Not an array');
}
```

FYI jQuery uses `Object.prototype.toString.call` internally to check whether an object is an array or not.

In modern browser, you can also use:

```javascript
Array.isArray(arrayList);
```

`Array.isArray` is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 8. What will be the output of the following code?

```javascript
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
```

> Above code will output `0` as output. `delete` operator is used to delete a property from an object. Here `x` is not an object it's **local variable**. `delete` operator doesn't affect local variable.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 9. What will be the output of the following code?

```javascript
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);
```

> Above code will output `1` as output. `delete` operator is used to delete property from object. Here `x` is not an object it's **global variable** of type `number`.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 10. What will be the output of the following code?

```javascript
var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();

console.log(output);
```

> Above code will output `undefined` as output. `delete` operator is used to delete a property from an object. Here `x` is an object which has foo as a property and from self-invoking function we are deleting foo property of object `x` and after deletion we are trying to reference deleted property `foo` which result `undefined`.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 11. What will be the output of the following code?

```javascript
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
```

> Above code will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn't delete prototype property.

`emp1` object doesn't have **company** as its own property. you can test it `console.log(emp1.hasOwnProperty('company')); //output : false` However, we can delete company property directly from `Employee` object using `delete Employee.company` or we can also delete from `emp1` object using `__proto__` property `delete emp1.__proto__.company`.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 12. What is `undefined x 1` in JavaScript

```javascript
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
```

when you run above code and do `console.log(trees);` in chrome developer console then you will get `["redwood", "bay", "cedar", undefined × 1, "maple"]` and when you run above code in Firefox browser console then you will get `["redwood", "bay", "cedar", undefined, "maple"]` so from these it's cleared that chrome has its own way of displaying uninitialized index in array. But when you check `trees[3] === undefined` in both of the browser you will get similar output as `true`.

**Note:** Please remember you need not check for uninitialized index of array in  `trees[3] === 'undefined × 1'` it will give an error, Because `'undefined × 1'` this is just way of displaying uninitialized index of array in chrome.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 13. What will be the output of the following code?

```javascript
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
```

> Above code will output `5` as output. When we used `delete` operator for deleting an array element then, the array length is not affected from this. This holds even if you deleted all the element of array using `delete` operator.

So when delete operator removes an array element that deleted element is not longer present in array. In place of value at deleted index `undefined x 1` in **chrome** and `undefined` is placed at the index. If you do `console.log(trees)` output `["xyz", "xxxx", "test", undefined × 1, "apple"]` in Chrome and in Firefox `["xyz", "xxxx", "test", undefined, "apple"]`.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 14. What will be the output of the following code?

```javascript
var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);
```

> Above code will output `1, "truexyz", 2, 1` as output. General guideline  for addition of operator:
  - Number + Number  -> Addition
  - Boolean + Number -> Addition
  - Number + String  -> Concatenation
  - String + Boolean -> Concatenation
  - String + String  -> Concatenation
  
## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 15. What will be the output of the following code?

```javascript
var z = 1, y = z = typeof y;
console.log(y);
```

> Above code will output `undefined` as output. According to `associativity` rule operator with the same precedence are processed based on their associativity property of operator. Here associativity of the assignment operator is `Right to Left` so first `typeof y` will evaluate first which is `undefined` and assigned to `z` and then `y` would be assigned the value of z and then `z` would be assign value `1`.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

#### 16. What will be the output of the following code?

```javascript
// NFE (Named Function Expression
var foo = function bar() { return 12; };
typeof bar();
```

> Above code will output `Reference Error` as output. For making above code work you can re-write above code as follow:

**Sample 1**

```javascript
var bar = function() { return 12; };
typeof bar();
```

or

**Sample 2**

```javascript
function bar() { return 12; };
typeof bar();
```

The function definition can have only one reference variable as a function name, In above code **sample 1** bar is reference variable which is pointing to `anonymous function` and in **sample 2** function definition is name function.

```javascript
var foo = function bar() {
  // foo is visible here
  // bar is visible here
  console.log(typeof bar()); // Work here :)
};
// foo is visible here
// bar is undefined here
```

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


#### 17. What is the difference between declaring a function in below format?

```javascript
var foo = function() {
  // Some code
};
```

```javascript
function bar() {
  // Some code
};
```

The main difference is function `foo` is defined at `run-time` whereas function `bar` is defined at parse time. For understanding It in better way let see below code :

```javascript
// Run-Time function declaration
<script>
  foo(); // Call foo function here, It will give an error
  var foo = function() {
    console.log("Hi I am inside Foo");
  };
</script>
```

```javascript
// Parse-Time function declaration
<script>
bar(); // Call bar function here, It will not give an Error
function bar() {
  console.log("Hi I am inside Foo");
};
</script>
```

The another advantage of first-one way of declaration that you can declare function based on certain condition for example:

```javascript
<script>
if(testCondition) { // If testCondition is true then
  function foo() {
    console.log("inside Foo with testCondition True value");
  };
 } else {
  function foo() {
    console.log("inside Foo with testCondition false value");
  };
 }
 </script>
```

But If you try to run similar code in the following format, it would give an error

```javascript
<script>
if(testCondition) {// If testCondition is true then
   var foo = function() {
      console.log("inside Foo with testCondition True value");
   };
 } else {
    var foo = function() {
      console.log("inside Foo with testCondition false value");
   };
 }
 </script>
```

#### 18. what is function hoisting in JavaScript?
**Function Expression**

```javascript
 var foo = function foo() {
     return 12;
 };
```

> In JavaScript variable and functions are `hoisted`. Let's take function `hoisting` first. Basically, the JavaScript interpreter looks ahead to find all the variable declaration and hoists them to the top of the function where it's declared. For Example:

```javascript
foo(); // Here foo is still undefined
var foo = function foo() {
  return 12;
};
```

Above code behind the scene look something like below code:

```javascript
var foo = undefined;
foo(); // Here foo is undefined
foo = function foo() {
  // Some code stuff
}
```

```javascript
var foo = undefined;
foo = function foo() {
  // Some code stuff
}
foo(); // Now foo is defined here
```

#### 19. What will be the output of the following code?

```javascript
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();
```

> Above code will output: `undefined, 5000$`. JavaScript has hoisting concept where newbie gets tricked. In above code, you might be expecting `salary` to retain it values from outer scope until the point that `salary` was re-declared in the inner scope. But due to `hoisting` salary value was `undefined` instead. To understand it better have a look of the following code, here `salary` variable is hoisted and declared at the top in function scope and while doing console.log it's result `undefined` and after that it's been redeclared and assigned `5000$`.

```javascript
var salary = "1000$";

(function () {
  var salary = undefined;
  console.log("Original salary was " + salary);

  salary = "5000$";

  console.log("My New Salary " + salary);
})();
```

#### 20. What is the `instanceof` operator in JavaScript? what would be the output of the following code?

```javascript
function foo() {
  return foo;
}
new foo() instanceof foo;
```

> `instanceof` operator checks the current object and return true if the object is of the specified type.

For Example:

```javascript
var dog = new Animal();
dog instanceof Animal; // Output : true
```

Here `dog instanceof Animal` is true since `dog` inherits from `Animal.prototype`

```javascript
var name = new String("xyz");
name instanceof String; // Output : true
```

Here `name instanceof String` is true since `name` inherits from `String.prototype`. Now let's understand the working of the following code

```javascript
function foo() {
  return foo;
}
new foo() instanceof foo;
```

Here function `foo` is returning `foo` which is again pointer to function `foo`

```javascript
function foo() {
  return foo;
}
var bar = new foo();
// here bar is pointer to function foo() {return foo}.
```

So the `new foo() instanceof foo` return `false`;

Ref Link: [http://stackoverflow.com/questions/2449254/what-is-the-instanceof-operator-in-javascript](http://stackoverflow.com/questions/2449254/what-is-the-instanceof-operator-in-javascript)

#### 21. If we have JavaScript associative array as below code:

```javascript
var counterArray = {
  A : 3,
  B : 4
};
counterArray["C"] = 1;
```

#### How we will calculate length of the above associative array `counterArray`
> There are no built-in function and property available to calculate length of associative array object. However, there are ways by which we can calculate the length of associative array object, In addition to this we can also extend `Object` by adding method or property on prototype for calculating length but extending object might break enumeration in various libraries or might create cross-browser issue, so it's not recommended unless it's necessary. There is various ways by which we can calculate length.

`Object` has `keys` method which can we used to calculate the length of object.

```javascript
Object.keys(counterArray).length; // Output 2
```

We can also calculate length of object by iterating through the object and by doing a count of own property of object.  

```javascript
function getSize(object) {
  var count = 0;
  for(key in object) {
    // hasOwnProperty method check own property of object
    if(object.hasOwnProperty(key)) count++;
  }
  return count;
}
```

> We can also add `length` method directly on `Object` see below code.

```javascript
Object.length = function() {
  var count = 0;
  for(key in object) {
    // hasOwnProperty method check own property of object
    if(object.hasOwnProperty(key)) count++;
  }
  return count;
}
//Get the size of any object using
console.log(Object.length(counterArray));
```

**Bonus**: We can also use `Underscore` (recommended, as it's lightweight) to calculate object length.

## Question 22
### Difference between `Function`, `Method` and `Constructor` calls in JavaScript.
If your are familiar with Object-oriented programming, More likely familiar to thinking of functions, methods, and class constructors as three separate things. But In JavaScript, these are just three different usage patterns of one single construct.

functions : The simplest usages of function call:

```javascript
function helloWorld(name) {
  return "hello world, " + name;
}

helloWorld("JS Geeks"); // "hello world JS Geeks"
```

Methods in JavaScript are nothing more than object properties that reference to a function.

```javascript
var obj = {
  helloWorld : function() {
    return "hello world, " + this.name;
  },
  name: 'John Carter'
}
obj.helloWorld(); // // "hello world John Carter"
```

Notice how `helloWorld` refer to `this` properties of obj. Here it's clear or you might have already understood that `this` gets bound to `obj`. But the interesting point that we can copy a reference to the same function `helloWorld` in another object and get a difference answer. Let see:

```javascript
var obj2 = {
  helloWorld : obj.helloWorld,
  name: 'John Doe'
}
obj2.helloWorld(); // "hello world John Doe"
```

You might be wonder what exactly happens in a method call here. Here we call the expression itself determine the binding of this `this`, The expression `obj2.helloWorld()` looks up the `helloWorld` property of obj and calls it with receiver object `obj2`.

The third use of functions is as constructors. Like function and method, `constructors` are defined with function.

```javascript
function Employee(name, age) {
  this.name = name;
  this.age = age;
}

var emp1 = new Employee('John Doe', 28);
emp1.name; // "John Doe"
emp1.age; // 28
```

Unlike function calls and method calls, a constructor call `new Employee('John Doe', 28)` create a brand new object and passes it as the value of `this`, and implicitly returns the new object as its result.

The primary role of the constructor function is to initialize the object.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


## Question 23
### What would be the output of the following code?

```javascript
function User(name) {
  this.name = name || "JsGeeks";
}

var person = new User("xyz")["location"] = "USA";
console.log(person);
```

The output of above code would be `USA`. Here `new User("xyz")` creates a brand new object and created property `location` on that and `USA` has been assigned to object property location and that has been referenced by the person.

Let say `new User("xyz")` crated a object called `foo` and returned now `foo["location"]` would be assigned value as `USA` and `person` is referencing to `foo["location"]`.

## Question 24
### Write a mul function which will output when invoked as below syntax.

```javascript
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48
```

Below is code followed by an explanation how it works:

```javascript
function mul (x) {
  return function (y) { // anonymous function
    return function (z) { // anonymous function
      return x * y * z;
    };
  };
}
```

Here `mul` function accept the first argument and return anonymous function which take the second parameter and return anonymous function which take the third parameter and return multiplication of arguments which is being passed in successive.

In Javascript function defined inside has access to outer function variable and function is a first class object so it can be returned by a function as well and passed as the argument in another function.
- A function is an instance of the Object type
- A function can have properties and has a link back to its constructor method
- Function can be stored as variable
- Function can be pass as a parameter to another function
- Function can be returned from function

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


## Question 25
### What is the difference between a method and a function in javascript?
A function is a piece of code that is called by name and function itself not associated with any object and not defined inside any object. It can be passed data to operate on (i.e. parameter) and can optionally return data (the return value).

```javascript
// Function definition
function myFunc() {
  // Do some stuff;
}

// Calling function
myFunc();
```

Here myFunc() function call is not associated with object hence not invoked through any object.

A function can be self-invoking anonymous function or named self-invoking function

```javascript
// Named Self-invoking Function
(function myFunc() {
  // Do some stuff;
})();

// Anonymous Self-invoking Function
(function() {
  // Do some stuff;
})();
```

In a case of named self-invoking anonymous function or anonymous self-invoking function, there is no need of call function explicitly.

A method is a piece of code that is called by name and that is associated with the object. In most respects it is identical to function call except for some key difference:
- It is implicitly passed for the object for which it was called.
- It is able to operate on data that is contained within the class (remembering that an object is an instance of a class- the class is the definition, the object is an instance of that)
- Method call is always associated with object

```javascript
var methodObject = {
  attribute: "xyz",
  display: function () {  // Method
    console.log(this.attribute);
  }
};

// Call method
methodObject.display();
```

Here methodObject is an object and display is a method which is associated with methodObject.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


## Question 26
### What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function.
A `self-invoking` anonymous function also called `self-executing anonymous function` runs immediately or automatically when we define it and self-invoking anonymous function doesn't have any name at all. Self-Invoking anonymous function syntax:

```javascript
(function() {
  console.log("Self-Invoking function code logic ");
})();
Output: Self-Invoking function code logic
```

We must have to know the fact that JavaScript functions run immediately when we put `()` after their names.

```javascript
function display() {
  console.log("Display me");
}
display();  // This will run immediately

Output: "Display me"
/*
This will not run immediately as we haven't put () after function
name, function name is use full when we want to pass it as
callback to another function or method.
*/
display;

function testCallBack(callback) {
  callback ();  // This will be call display method immediately if callback parameter is being set method display
}
testCallBack(display); // Here display function is being passed as callback
```
## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

## Question 27
### Describe Singleton Pattern In JavaScript?
The singleton pattern is the most commonly used design pattern and one that you will probably is more than any others. It provides a great way to wrap the code into a logical unit that can be accessed through a single variable. The Singleton design pattern is used when only one instance of an object is needed throughout the lifetime of an application.

In JavaScript, there is a different way to achieve singleton object than any other object oriented supported language (Java, C++). In JavaScript Singleton pattern have many uses, they can be used for NameSpacing, which reduce the number of global variables in your page (prevent from polluting global space), organizing the code in a consistent manner, which increase the readability and maintainability of your pages. There are two important points in the traditional definition of Singleton pattern:
- There should be only one instance allowed for a class and
- We should allow global point of access to that single instance
- Let me define singleton pattern in JavaScript context:

> It is an object that is used to create namespace and group together a related set of methods and attributes (encapsulation) and if we allow to initiate then it can be initiated only once.

In JavaScript, we can create singleton though object literal. However, there is some another way but that I will cover in next post.

A singleton object consists of two parts: The object itself, containing the members (Both methods and attributes) within it, and global variable used to access it. The variable is global so that object can be accessed anywhere in the page, this is a key feature of the singleton pattern.

**JavaScript: A Singleton as a Namespace**

As I have already stated above that singleton can be used to declare Namespace in JavaScript. NameSpacing is a large part of responsible programming in JavaScript. Because everything can be overwritten, and it is very easy to wipe out variable by mistake or a function, or even a class without even knowing it. A common example which happens frequently when you are working with another team member parallel,  

```javascript
function findUserName(id) {

}

/* Later in the page another programmer
added code */
var findUserName = $('#user_list');

/* You are trying to call :( */
console.log(findUserName())
```

One of the best ways to prevent accidentally overwriting variable is to namespace your code within a singleton object.

```javascript
/*  Using Namespace */

var MyNameSpace = {
  findUserName : function(id) {},
  // Other methods and attribute go here as well
}

/* Later in the page another programmer
added code */
var findUserName = $('#user_list');

/* You are trying to call and you make this time workable */
console.log(MyNameSpace.findUserName());
```

### Singleton Design Pattern Implementation

```javascript
/* Lazy Instantiation skeleton for a singleton pattern */

var MyNameSpace = {};
MyNameSpace.Singleton = (function() {

  // Private attribute that holds the single instance
  var singletonInstance;  

  // All of the normal code goes here
  function constructor() {
    // Private members
    var privateVar1 = "Nishant";
    var privateVar2 = [1,2,3,4,5];

    function privateMethod1() {
      // code stuff
    }

    function privateMethod1() {
      // code stuff
    }

    return {
      attribute1 : "Nishant",
      publicMethod: function() {
        alert("Nishant");// some code logic
      }
    }
  }

  return {
    // public method (Global access point to Singleton object)
    getInstance: function() {
      //instance already exist then return  
      if(!singletonInstance) {
        singletonInstance = constructor();
      }
      return singletonInstance;           
    }           
  }

})();   

// getting access of publicMethod
console.log(MyNamespace.Singleton.getInstance().publicMethod());
```

The singleton implemented above is easy to understand. The singleton class maintains a static reference to the lone singleton instance and return that reference from the static getInstance() method.

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


## Question 28
##### What are the way by which we can create object in JavaScript ?

**Method 1:** `Function Based`

If we want to create several similar `objects`. In below code sample, `Employee` which is called *constructor function*. This is similar to classes in object oriented languages.

```javascript

  function Employee(fName, lName, age, salary){
  	this.firstName = fName;
  	this.lastName = lName;
  	this.age = age;
  	this.salary = salary;
  }

  // Creating multiple object which have similar property but diff value assigned to object property.
  var employee1 = new Employee('John', 'Moto', 24, '5000$');
  var employee1 = new Employee('Ryan', 'Jor', 26, '3000$');
  var employee1 = new Employee('Andre', 'Salt', 26, '4000$');
```

**Method 2:** `Object Literal`

Object Literal is best way to create an object and this is used frequently. Below is code sample for create employee object which contains property as well as method.

```javascript
var employee = {
	name : 'Nishant',
	salary : 245678,
	getName : function(){
		return this.name;
	}
}
```
Below code sample is Nested Object Literal, Here address is an object inside employee object.

```javascript
var employee = {
	name : 'Nishant',
	salary : 245678,
	address : {
		addressLine1 : 'BITS Pilani',
		addressLine2 : 'Vidya Vihar'.
		phoneNumber: {
		  workPhone: 7098889765,
		  homePhone: 1234567898
		}
	}
}
```
**Method 3:** `Using JavaScript new keyword`

In below code sample object has been created using Object constructor function.

```javascript
var employee = new Object(); // Created employee object using new keywords and Object()
employee.name = 'Nishant';
employee.getName = function(){
	return this.name;
}
```
**Note:** As a best practices object literal way is used to create object over this method.

## Question 29
##### Write a function called deepClone which takes an object and creates a object copy of it.

``` javascript
var newObject = deepClone(obj);
```
Solution:

```javascript
function deepClone(object){
	var newObject = {};
	for(var key in object){
		if(typeof object[key] === 'object'){
		 newObject[key] = deepClone(object[key]);
		}else{
		 newObject[key] = object[key];
		}
	}
	return newObject;
}
```

**Explanation:** We have been asked to do deep copy of object so What's basically it's mean ??. Let's understand in this way you have been given an object `personalDetail` this object contains some property which again a type of object here as you can see `address` is an object and `phoneNumber` in side an `address` is also an object. In simple term `personalDetail` is nested object(object inside object). So Here deep copy means we have to copy all the property of `personalDetail` object including nested object.

```javascript
var personalDetail = {
	name : 'Nishant',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 8797912345,
	    workPhone : 1234509876
	  }
	}
}
```
So when we do deep clone then we should copy every property (including the nested object).

## Question 30
##### Best way to detect `undefined` object property in JavaScript.

> Suppose we have given an object `person`

```javascript
var person = {
	name: 'Nishant',
	age : 24
}
```
Here the `person` object has a `name` and `age` property. Now we are trying to access the **salary** property which we haven't declared on the person object so while accessing it will return undefined. So how we will ensure whether property is undefined or not before performing some operation over it?

**Explanation:**

We can use `typeof` operator to check undefined

```javascript
if(typeof someProperty === 'undefined'){
	console.log('something is undefined here');
}
```
Now we are trying to access salary property of person object.

```javascript
if(typeof person.salary === 'undefined'){
	console.log("salary is undefined here because we haven't declared");
}
```
## Question 31
##### Write a function called `Clone` which takes an object and creates a object copy of it but not copy deep property of object. 

```javascript
   var objectLit = {foo : 'Bar'}; 
	var cloneObj = Clone(obj); // Clone is the function which you have to write 
	console.log(cloneObj === Clone(objectLit)); // this should return false
	console.log(cloneObj == Clone(objectLit)); // this should return true
```
**solution:** 

```javascript
function Clone(object){
  var newObject = {};
  for(var key in object){
  	newObject[key] = object[key];
  }
  return newObject;
}
```

## Question 32
##### Best way to detect `undefined` object property in JavaScript.

> Suppose we have given an object `person`

```javascript
var person = {
	name: 'Nishant',
	age : 24
}
```
here `person` object has `name` and `age` property. Now we are trying to access **salary** property which we haven't declared on person object so while accessing it will return undefined. So how we will ensure whether property is undefined or not before performing some operation over it.

**Explanation:**

We can use `typeof` operator to check undefined 

```javascript
if(typeof someProperty === 'undefined'){
	console.log('something is undefined here');
}
```
Now we are trying to access salary property of person object.

```javascript
if(typeof person.salary === 'undefined'){
	console.log("salary is undefined here because we haven't declared");
}
```
## Question 33
##### How to check whether a key exist in a JavaScript object or not.

>Let say we have `person` object with property **name** and **age**

```javascript
var person = {
	name: 'Nishant',
	age: 24
}
```
Now we want to check whether `name` property exist in `person` object or not ?

In JavaScript object can have own property, in above example name and age is own property of person object. Object also have some of inherited property of base object like toString is inherited property of person object.

So how we will check whether property is own property or inherited property. 

Method 1: We can use `in` operator on objet to check own property or inherited property. 

```javascript
console.log('name' in person); // checking own property print true 
console.log('salary' in person); // checking undefined property print false
```
`in` operator also look into inherited property if it doesn't find property defined as own property. For instance If I check existence of toString property as we know that we haven't declared this property on person object so `in` operator look into there base property.

Here 

```javascript
console.log('toString' in person); // Will print true
```
If we want to test property of object instance not inherited properties then we will use `hasOwnProperty` method of object instance.

```javascript
console.log(person.hasOwnProperty('toString')); // print false
console.log(person.hasOwnProperty('name')); // print true
console.log(person.hasOwnProperty('salary')); // print false
```

## Question 34
##### Best way to detect `undefined` object property in JavaScript.

> Suppose we have given an object `person`

```javascript
var person = {
	name: 'Nishant',
	age : 24
}
```
here `person` object has `name` and `age` property. Now we are trying to access **salary** property which we haven't declared on person object so while accessing it will return undefined. So how we will ensure whether property is undefined or not before performing some operation over it.

**Explanation:**

We can use `typeof` operator to check undefined 

```javascript
if(typeof someProperty === 'undefined'){
	console.log('something is undefined here');
}
```
Now we are trying to access salary property of person object.

```javascript
if(typeof person.salary === 'undefined'){
	console.log("salary is undefined here because we haven't declared");
}
```
## Question 35
##### How to check whether a key exist in a JavaScript object or not.

>Let say we have `person` object with property **name** and **age**

```javascript
var person = {
	name: 'Nishant',
	age: 24
}
```
Now we want to check whether `name` property exist in `person` object or not ?

In JavaScript object can have own property, in above example name and age is own property of person object. Object also have some of inherited property of base object like toString is inherited property of person object.

So how we will check whether property is own property or inherited property. 

Method 1: We can use `in` operator on objet to check own property or inherited property. 

```javascript
console.log('name' in person); // checking own property print true 
console.log('salary' in person); // checking undefined property print false
```
`in` operator also look into inherited property if it doesn't find property defined as own property. For instance If I check existence of toString property as we know that we haven't declared this property on person object so `in` operator look into there base property.

Here 

```javascript
console.log('toString' in person); // Will print true
```
If we want to test property of object instance not inherited properties then we will use `hasOwnProperty` method of object instance.

```javascript
console.log(person.hasOwnProperty('toString')); // print false
console.log(person.hasOwnProperty('name')); // print true
console.log(person.hasOwnProperty('salary')); // print false
```

## Question 36
##### What is best way to detect an arrays object on JavaScript ?

>We always encounter in such situation where we need to know whether value is type of array or not.

For Instance : Below code perform some operation based value type

```javascript
function(value){
	if("value is an array"){
		// Then perform some operation
	}else{
		// otherwise
	}
}
```

Let's discuss some way to detect an array in JavaScript.

**Method 1 :** 

Duck typing test for array type detection 

```javascript
 // Duck typing arrays
 function isArray(value){
 	return typeof value.sort === 'function';
 }
```
As we can see above isArray method will return true if value object have `sort` method of type `function`. Now assume you have created a object with sort method

```javascript
	var bar = {
		sort: function(){
			// Some code 
		}
	}
```
Now when you check `isArray(bar)` then it will return true because bar object has sort method, But the fact is bar is not an array.

So method 1 is not a best way to detect an array as you can see it's not handle the case when some object has sort method.

**Method 2:**

Juriy Zaytsev (Also known as kangax) proposed an elegant solution to this.

```javascript
	function isArray(value){
		return Object.prototype.toString.call(value) === '[object Array]';
	}
```
This approach is most popular way to detecting a value of type array in JavaScript and recommended to use. This approach relies on the fact that, native toString() method on a given value produce a standard string in all browser.

>ECMAScript 5 has introduced **Array.isArray()** method to detect an array type value. The sole purpose of this method is accurately detecting whether a value is an array or not.

In many JavaScript libraries you may see below code for detecting an value of type array.

```javascript
function(value){
   // ECMAScript 5 feature
	if(typeof Array.isArray === 'function'){
		return Array.isArray(value);
	}else{
	   return Object.prototype.toString.call(value) === '[object Array]';
	}
}
```

## Question 37
##### Best way to detect reference values of any type in JavaScript ?

> In Javascript Object are called as reference type, Any value other then primitive is definitely a reference type. There are several built-in reference type such as **Object**, **Array**, **Function**, **Date**, **null** and **Error**.

Detecting object using `typeof` operator

```javascript
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof new Array());  // object
console.log(typeof null);         // object 
console.log(typeof new RegExp()); // object
console.log(typeof new Date());   // object
```
But the downside of using typeof operator to detect an object is that typeof returns `object` for `null` (However this is fact that null is an object in JavaScript).

The best way to detect an object of specific reference type using `instanceof` operator.

>Syntax : **value** instanceof **constructor**   

```javascript
//Detecting an array
if(value instanceof Array){
	console.log("value is type of array");
}
```
```javascript
// Employee constructor function
function Employee(name){
	this.name = name; // Public property
}

var emp1 = new Employee('John');

console.log(emp1 instanceof Employee); // true
```
`instanceof` not only check the constructor which is used to create an object but also check it's prototype chain see below example.

```javascript
console.log(emp1 instanceof Object); // true
```

## Question 38
##### Describe Object-Based inheritance in JavaScript.

> Object-based inheritance also called prototypal inheritance in which we one object inherit from another object without invoking a constructor function.

The ECMAScript 5 **Object.create()** method is the easiest way for one object to inherit from another. 

**For Instance:** 

```javascript
var employee = {
  name: 'Nishant',
  displayName: function () {
    console.log(this.name);
  }
};

var emp1 = Object.create(employee);
console.log(emp1.displayName());  // output "Nishant"
```

Above example create a new object `emp1` that inherits from `employee`. Here the inheritance occur as emp1's prototype is set to employee. After this emp1 is able to access the same properties and method on employee until new properties or method with the same name are defined.

**For Instance:** Defining displayName() method on emp1 automatically override the employee displayName.

```javascript
emp1.displayName = function() {
	console.log('xyz-Anonymous');
};

employee.displayName();// "xyz-Anonymous"
emp1.displayName(); // "Nishant"
``` 

In addition to this **Object.create()** method also allows to specify a second argument which is an object containing additional properties and methods to add to the new object.

**For Example**

```javascript
var emp1 = Object.create(employee, {
	name: {
		value: "John"
	}
});

emp1.displayName(); // "John"
employee.displayName(); // "Nishant"
```
In above example, emp1 is created with it's own value for name, so calling **displayName()** method display `"John"` instead of `"Nishant"`.

>Object created in this manner give you full control over newly created object. You are free to add, remove any properties and method you want.

## Question 39
##### Describe Type-Based inheritance in JavaScript.

>Type-based inheritance works with constructor function instead of object, It means we need to call constructor function of the object from which you  want to inherit.

Let say we have `Person` class which has name, age, salary properties and **incrementSalary()** method.

```javascript
function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.incrementSalary = function (byValue) {
    this.salary = this.salary + byValue;
  };
}
```

Now we wish to create Employee class which contains all the properties of Person class and wanted to add some additional properties into Employee class.

```javascript
function Employee(company){
	this.company = company;
}

//Prototypal Inheritance 
Employee.prototype = new Person("Nishant", 24,5000);
```
In above example, **Employee** type inherits from **Person**, which is called super types. It does so by assigning a new instance of Person to Employee prototype. After that, every instance of Employee inherits it's properties and methods from Person.

```javascript
//Prototypal Inheritance 
Employee.prototype = new Person("Nishant", 24,5000);

var emp1 = new Employee("Google");

console.log(emp1 instanceof Person); // true
console.log(emp1 instanceof Employee); // true
```

Let's understand Constructor inheritance 

```javascript
//Defined Person class
function Person(name){
	this.name = name || "Nishant";
}

var obj = {};

// obj inherit Person class properties and method 
Person.call(obj); // constructor inheritance

console.log(obj); // Object {name: "Nishant"}
```
Here we saw calling **Person.call(obj)** define the name properties from `Person` to `obj`.

```javascript
console.log(name in obj); // true
```
Type-based inheritance is best used with developer defined constructor function rather than natively in JavaScript. In addition to this also allows flexibility in how we create similar type of object.

## Question 40
##### How we can prevent modification of object in JavaScript ?.

> ECMAScript 5 introduce several methods to prevent modification of object which lock down object to ensure that no one, accidentally or otherwise, change functionality of Object.

There are three levels of preventing modification: 

**1: Prevent extensions :** 

No new properties or methods can be added to the object, but one can change the existing properties and method.

For Example: 

```javascript
var employee = {
	name: "Nishant"
};

// lock the object 
Object.preventExtensions(employee);

// Now try to change the employee object property name
employee.name = "John"; // work fine 

//Now try to add some new property to the object
employee.age = 24; // fails silently unless it's inside the strict mode
```
**2: Seal :**

>It is same as prevent extension, in addition to this also prevent existing properties and methods from being deleted.

To seal an object, we use **Object.seal()** method. you can check whether an object is sealed or not using **Object.isSealed();**

```javascript
var employee = {
	name: "Nishant"
};

// Seal the object 
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee)); // true

delete employee.name // fails silently unless it's in strict mode

// Trying to add new property will give an error
employee.age = 30; // fails silently unless in strict mode
``` 

when an object is sealed, its existing properties and methods can't be removed. Sealed object are also non-extensible.

**3: Freeze :**

>Same as seal, In addition to this prevent existing properties methods from being modified (All properties and methods are read only).

To freeze an object, use Object.freeze() method. We can also determine whether an object is frozen using Object.isFrozen();

```javascript
var employee = {
	name: "Nishant"
};

//Freeze the object
Object.freeze(employee); 

// Seal the object 
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee));     // true
console.log(Object.isFrozen(employee));     // true


employee.name = "xyz"; // fails silently unless in strict mode
employee.age = 30;     // fails silently unless in strict mode
delete employee.name   // fails silently unless it's in strict mode
``` 

Frozen objects are considered both non-extensible and sealed.

**Recommended:**

If you are decided to prevent modification, sealed, freeze the object then use in strict mode so that you can catch the error.

For Example: 

```javascript
"use strict";

var employee = {
	name: "Nishant"
};

//Freeze the object
Object.freeze(employee); 

// Seal the object 
Object.seal(employee);

console.log(Object.isExtensible(employee)); // false
console.log(Object.isSealed(employee));     // true
console.log(Object.isFrozen(employee));     // true


employee.name = "xyz"; // fails silently unless in strict mode
employee.age = 30;     // fails silently unless in strict mode
delete employee.name;  // fails silently unless it's in strict mode
``` 


#Objective Question 

## Hoisting 

###1. console.log(employeeId);

1.  Some Value
2.  Undefined 
3.  Type Error
4.  ReferenceError: employeeId is not defined 

Answer: 4) ReferenceError: employeeId is not defined 

###2. What would be the output of following code?

```javascript
console.log(employeeId);
var employeeId = '19000';
```

1.  Some Value
2.  undefined 
3.  Type Error
4.  ReferenceError: employeeId is not defined 

Answer: 2) undefined 

###3. What would be the output of following code?

```javascript
var employeeId = '1234abe';
(function(){
	console.log(employeeId);
	var employeeId = '122345';
})();
```

1.  '122345'
2.  undefined 
3.  Type Error
4.  ReferenceError: employeeId is not defined 

Answer: 2) undefined 

## Object

###1. What would be the output of following code ?

```javascript
(function() {
	'use strict';

	var person = {
		name: 'Nishant'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: true
	})

	console.log(Object.keys(person)); 
})();
```
1.  Type Error
2.  undefined 
3.  ["name", "salary", "country", "phoneNo"]
4.  ["name", "salary", "country"]
	
Answer: 3) ["name", "salary", "country", "phoneNo"]

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


###2. What would be the output of following code ?

```javascript
(function() {
	'use strict';

	var person = {
		name: 'Nishant'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: false
	})

	console.log(Object.keys(person)); 
})();
```
1.  Type Error
2.  undefined 
3.  ["name", "salary", "country", "phoneNo"]
4.  ["name", "salary", "country"]
	
Answer: 4) ["name", "salary", "country"]

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


###3. What would be the output of following code ?

```javascript
(function() {
	var objA = {
		foo: 'foo',
		bar: 'bar'
	};
	var objB = {
		foo: 'foo',
		bar: 'bar'
	};
	console.log(objA == objB);
	console.log(objA === objB);
}());
```
1.  false true
2.  false false 
3.  true false
4.  true true
	
Answer: 2) false false

###4. What would be the output of following code ?

```javascript
(function() {
	var objA = new Object({foo: "foo"});
	var objB = new Object({foo: "foo"});
	console.log(objA == objB);
	console.log(objA === objB);
}());
```
1.  false true
2.  false false 
3.  true false
4.  true true
	
Answer: 2) false false

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


## Array

###1. What would be the output of following code?

```javascript
(function() {
	var array = new Array('100');
	console.log(array);
	console.log(array.length);
}());
```

1.  undefined undefined
2.  [undefined × 100] 100 
3.  ["100"] 1
4.  ReferenceError: array is not defined 

Answer: 3) ["100"] 1

###2. What would be the output of following code?

```javascript
(function() {
	var array1 = [];
	var array2 = new Array(100);
	var array3 = new Array(['1',2,'3',4,5.6]);
	console.log(array1);
	console.log(array2);
	console.log(array3);
	console.log(array3.length);
}());
```

1.  [] [] [Array[5]] 1
2.  [] [undefined × 100] Array[5] 5 
3.  [] [] ['1',2,'3',4,5.6] 5
4.  [] [] [Array[5]] 5 

Answer: 1) [] [] [Array[5]] 1

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


###3. What would be the output of following code?

```javascript
(function () {
  var array = new Array('a', 'b', 'c', 'd', 'e');
  array[10] = 'f';
  delete array[10];
  console.log(array.length);
}());
```

1.  11
2.  5
3.  6
4.  undefined

Answer: 1) 11

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


###4. What would be the output of following code?

```javascript
(function(){
	var animal = ['cow','horse'];
		animal.push('cat');
		animal.push('dog','rat','goat');
		console.log(animal.length);
})();
```

1.  4
2.  5
3.  6
4.  undefined

Answer: 3) 6

## Function: 

###1. What would be the output of following code ?

```javascript
function funcA(){
	console.log("funcA ", this);
	(function innerFuncA1(){
		console.log("innerFunc1", this);
		(function innerFunA11(){
			console.log("innerFunA11", this);
		})();
	})();
}
	
console.log(funcA());
```

1.  funcA  Window {...} 
    innerFunc1 Window {...} 
    innerFunA11 Window {...}
2.  undefined 
3.  Type Error
4.  ReferenceError: this is not defined 
	
Answer: 1) 

###2. What would be the output of following code ?

```javascript
var obj = {
	message: "Hello",
	innerMessage: !(function() {
		console.log(this.message);
	})()
};
	
console.log(obj.innerMessage);
```

1.  ReferenceError: this.message is not defined 
2.  undefined 
3.  Type Error
4.  undefined true
	
Answer: 4) undefined true

###3. What would the output of following code ?

```javascript
var obj = {
	message: "Hello",
	innerMessage: function() {
		console.log(this.message);
	}
};
	
console.log(obj.innerMessage());
```

1.  Hello 
2.  undefined 
3.  Type Error
4.  ReferenceError: this.message is not defined
	
Answer: 1) Hello

###4. What would the output of following code ?

```javascript
var obj = {
  message: 'Hello',
  innerMessage: function () {
    (function () {
      console.log(this.message);
    }());
  }
};
console.log(obj.innerMessage());
```

1.  Type Error 
2.  Hello 
3.  undefined
4.  ReferenceError: this.message is not defined
	
Answer: 3) undefined

## Object Oriented

###1. What would the output of following code ?

```javascript
function Person(name, age){
	this.name = name || "John";
	this.age = age || 24;
	this.displayName = function(){
		console.log(this.name);
	}
}

Person.name = "John";
Person.displayName = function(){
	console.log(this.name);
}

var person1 = new Person('Nishant');
	person1.displayName();
	Person.displayName();
```

1.  Nishant Person
2.  Nishant John
3.  Nishant undefined
4.  John John
	
Answer: 1) Nishant Person 

## Have doubt in this question ??
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 

## This Book will be completed by June 1 2016 and available to buy. If you want me to sent early copy of this book then please add your name and email address in google form here [Google Form](http://goo.gl/forms/QSpxVtvsNb).

##Contributing

I'm always welcome to feedback on how the book can be improved, and more questions can be added. If you think you have some question then please add that and open a pull request. 

####Note: All contributor to this book will be added as contributor in Book Last page by default, So if you have contributed and don't wanted to be included then please write an email to me at nihantanu@gmail.com 

##For any other query: 
[Schedule 15 min discussion with me for free @nishantk](http://www.canumeet.com/nishantk/javascript-interview-query-discussion) 


##License

This book is released under a Creative Commons Attribution-Noncommercial- No Derivative Works 3.0 United States License.

What this means it that the project is free to read and use, but the license does not permit commercial use of the material (i.e you can freely print out the questions for your own use, but you can't sell it). I'm trying to best to publish all of my books in a free + purchased (if you would like to support these projects) form so I would greatly appreciate it if you would respect these terms.

Copyright Nishant Kumar, 2016.
