#### How to check if an object is an array or not ?

> The best way to find whether a object is instance of a particular class or not using `toString` method from `Object.prototype`

```
  var arrayList = [1,2,3];
```
One of the best use cases of type checking of object is when we do method overloading in JavaScript. For understanding this let sat we have a method called `greet` which take one single string and also list of string, so making our greet method workable in both situation we need to know what kind of parameter is being passed, is it single value or list of value ?

```
 function greet(param){
 	if(){ // here have to check whether param is array or not 
 	}else{
 	}
 }
```
However in above implementation it might not necessary to check type for array, we can check for single value string and put array logic code in else block, let see below code for the same.

```
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

```
if( Object.prototype.toString.call( arrayList ) === '[object Array]' ) {
    console.log('Array!');
}
```

If you are using `jQuery` then you can also used jQuery `isArray` method:

```
  if($.isArray(arrayList)){
    console.log('Array');
  }else{
  	console.log('Not an array');
  }
```
FYI jQuery uses `Object.prototype.toString.call` internally to check whether object is an array or not.

In Modern browser you can also use 
```
Array.isArray(arrayList);
```
`Array.isArray` is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5
 
