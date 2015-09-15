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
