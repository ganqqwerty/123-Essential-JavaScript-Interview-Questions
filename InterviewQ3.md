##### 13. What will be the output of below code ?

```javascript
var trees = ["xyz","xxxx","test","ryan","apple"];
delete trees[3];
  
  console.log(trees.length);
```
> Above code will output `5` as output. When we used `delete` operator for deleting an array element then, the array length is not affected from this. This holds even if you deleted all the element of array using `delete` operator.

So when delete operator removes an array element that deleted element is not longer present in array. In place of value at deleted index `undefiend x 1` in **chrome** and `undefiend` is placed at the index. If you do `console.log(trees)` output `["xyz", "xxxx", "test", undefined × 1, "apple"]` in Chrome and in Firefox `["xyz", "xxxx", "test", undefined, "apple"]`.
