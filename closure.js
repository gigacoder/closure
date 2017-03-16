// Example 1 Inner function has access to globalVariable, outerFunctionVariable and innerFunctionVariable.
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


// Example 2 Inner function can access the variables from the outer scope even after the outer function has returned.
function myFunction(x) {
    var outerVariable = x;
    return function() {
        console.log(outerVariable);
    };
};

var secondFunction = myFunction("This is outer variable");

// Function "myFunction" has returned
secondFunction();
