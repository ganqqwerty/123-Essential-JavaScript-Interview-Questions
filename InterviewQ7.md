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

  
 
 







