## Understanding javascript closure with examples
In JavaScript closures are awesome. Closure is a nested function that has access to the variables in the outer (enclosing) function’s scope chain. In simple language we can say that whenever we use a function inside of another function, a closure is used. The inner function has access not only to the outer function’s variables, but also to the parameters of outer function.

Closure has access to variables in three scopes:
1.  Variable in its own scope.
2.  Variables in the enclosing(outer) function’s scope.
3.  Global variables.

![closure-diagram](https://cloud.githubusercontent.com/assets/10238874/23983342/b673a6a8-09d0-11e7-988b-a5be010b752a.jpg)

# Example

```
var globalVariable = 'Global variable.';

function outerFunction() {
  var outerFunctionVariable = 'Outer function variable.';
  
  function innerFunction () {
    var innerFunctionVariable = 'Inner function variable.';
    
    console.log("This is " + innerFunctionVariable);
    console.log("I can also access " + outerFunctionVariable);
    console.log("This is a " + globalVariable);
  };
  innerFunction();
};
outerFunction();
```

The magic of closure is the nested (inner) function can access the variables from the outer scope even after the outer function has returned. The reason behind this behavior is, the closure use the same scope chain that was in effect when they were created.

```
function myFunction(x) {
    var outerVariable = x;

    return function() {
        console.log(outerVariable);
    };

};

var secondFunction = myFunction("This is outer variable");

// myFunction has returned
secondFunction();
```
