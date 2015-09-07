##### What is the `instanceof` operator in JavaScript? what would be the output of below code ? 

```
function foo(){ 
	return foo; 
}
new foo() instanceof foo;
```
> `instanceof` operator checks the current object and return true if the object is of the the specified type.

For Example: 

```
 var dog = new Animal();
 dog instanceof Animal // Output : true
```
Here `dog instanceof Animal` is true since `dog` inherits from `Animal.prototype`

```
 var name = new String("xyz");
 name instanceof String // Output : true
```
Here `name instanceof String` is true since `dog` inherits from `String.prototype`. Now let's understand the working of below code 

```
function foo(){ 
	return foo; 
}
new foo() instanceof foo;
```
Here function `foo` is returning `foo` which is again pointer to function `foo`

```
function foo(){ 
	return foo; 
}
var bar = new foo();
// here bar is pointer to function foo(){return foo}.
```
So the `new foo() instanceof foo` return `false`;


Ref Link: http://stackoverflow.com/questions/2449254/what-is-the-instanceof-operator-in-javascript

  
 
 







