##### If we have JavaScript associative array as below code : 

```
  var counterArray = {
  		 A : 3,
  		 B : 4
  };
  counterArray["C"] = 1;
```
##### How we will calculate length of the above associative array `counterArray` 

> There are no in-built function and property available to calculate length of associative array object, However there are ways by which we can calculate the length of associative array object, In addition to this we can also extend `Object` by adding method or property on prototype for calculate length but extending object might break enumeration in various libraries or might create cross-browser issue, so It's not recommended unless it's necessary. There are various way by which we can calculate length.

`Object` has `keys` method which can we used to calculate the length of object.

``` 
 Object.keys(counterArray).length // Output 2 
```
We can also calculate length of object by iterating through object and by doing count of own property of object.  

```
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

```
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

 







