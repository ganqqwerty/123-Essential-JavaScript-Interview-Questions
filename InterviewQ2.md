##### What will be the output of below code ?

```
var output = (function(x){
    delete x;
    return x;
  })(0);
  
  console.log(output);
```
> Above code will output `0` as output. `delete` operator is used to delete property from object. Here `x` is not an object it's **local variable**. `delete` operator doesn't affect local variable.

##### What will be the output of below code ?

```
var x = 1;
var output = (function(){
    delete x;
    return x;
  })();
  
  console.log(output);
```
> Above code will output `1` as output. `delete` operator is used to delete property from object. Here `x` is not an object it's **global variable** of type `number`.

##### What will be the output of below code ?

```
var x = { foo : 1};
var output = (function(){
    delete x.foo;
    return x.foo;
  })();
  
  console.log(output);
```
> Above code will output `undefined` as output. `delete` operator is used to delete property from object. Here `x` is an object which has foo as a property and from self-invoking function we are deleting foo property of object `x` and after deletion we are trying to reference deleted property `foo` which result `undefined`.

##### What will be the output of below code ?

```
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
```
> Above code will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn't delete prototype property. 

`emp1` object doesn't have **company** as it's own property. you can test it `console.log(emp1.hasOwnProperty('company')); //output : false` However we can delete company property directly from `Employee` object using `delete Employee.company` or we can also delete from `emp1` object using `__proto__` property `delete emp1.__proto__.company`.

##### What is `undefined x 1` in JavaScript

```
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
```
when you run above code and do `console.log(trees);` in chrome developer console then you will get 
`["redwood", "bay", "cedar", undefined × 1, "maple"]` and when you run above code in Firefox browser console then you will get `["redwood", "bay", "cedar", undefined, "maple"]` so from these It's cleared that chrome has it's own way of displaying uninitialised index in array. But when you check `trees[3] === undefined` in both of the browser you will get similar output as `true`. 

**Note:** Please remember you need not check for uninitialised index of array in  `trees[3] === 'undefined × 1'` it will give error, Because `'undefined × 1'` this is just way of displaying uninitialised index of array in chrome.




