/* Creational design pattern basically deals with creation of object and defining object properties */

// Three way of create object in JavaScript

var newObject = {}; // By Object literal
var newObject = Object.create(null); // Object create method
var newObject = new Object(); // Object constructor

/* Way of defining value in object */

// 1: using . method
newObject.someValue = "someValue";
var myVal = newObject.someValue;

// 2: using square bracket
newObject["someValue"] = "someValue";
var myVal = newObject["someValue"];

// 3: using object defineProperty method
Object.defineProperty('newObject', "someValue" {
  value:"someValue",
  writable: true
});

// 4: using generic function
var defineProperty = function(obj, key, value){
    config.value = value;
    Object.defineProperty(obj, key , config);
}

// Use defined generic function
var man = Object.create(null);
defineProperty(man, 'name', 'Nishant Kumar');

// 5: using object defineProperties method
Object.defineProperties('man',{
  "name" : {
    value: "Nishant",
    writable : true
  },
  "Age" : {
    value : '24',
    writable : true
  }
})
