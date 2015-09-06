##### What will be the output of below code ?

```
 // NFE (Named Function Expression 
 var foo = function bar(){ return 12; };
 typeof bar();  
```
> Above code will output `Reference Error` as output. For making above code work you can re-write above code as follow: 

**Sample 1**

```
 var bar = function(){ return 12; };
 typeof bar();  
```
or 

**Sample 2**

```
 function bar(){ return 12; };
 typeof bar();  
```
function definition can have only one reference variable as a function name, In above code **sample 1** bar is reference variable which is pointing to `anonymous function` and in **sample 2** function definition is name function.

```
 var foo = function bar(){ 
    // foo is visible here 
    // bar is visible here
 	console.log(typeof bar()); // Work here :)
 };
 // foo is visible here
 // bar is undefined here
  
```

##### what is difference between declaring function in below format ?

```
 var foo = function(){ 
	// Some code
 }; 
```

```
 function bar(){ 
	// Some code
 }; 
```
The main difference is function `foo` is defined at `run-time` whereas function `bar` is defined at parse time. For understanding It in better way let see below code : 

```
Run-Time function declaration 
<script>
foo(); // Call foo function here, It will give Error
 var foo = function(){ 
		console.log("Hi I am inside Foo");
 }; 
 </script>
```
```
<script>
Parse-Time function declaration 
bar(); // Call foo function here, It will not give Error
 function bar(){ 
	console.log("Hi I am inside Foo");
 }; 
 </script>
```
The another advantage of first-one way of declaration that you can declare function based on certain condition for example: 

```
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

```
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







