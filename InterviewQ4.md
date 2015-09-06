##### What will be the output of below code ?

```
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


##### What will be the output of below code ?

```
var z = 1, y = z = typeof y;
console.log(y);  
```
> Above code will output `undefined` as output. According to `associativity` rule operator with same precedence are processed based on there associativity property of operator. Here associativity of assignment operator is `Right to Left` so first `typeof y` will evaluate first which is `undefined` and assigned to `z` and then `y` would be assigned value of z and then `z` would be assign value `1`.
