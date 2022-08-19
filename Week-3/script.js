var a = 100;

function abc() {
  var a = 10;

  return function (y) {
    return a + y
  }
}

a = 50;

var inner = abc() 
// return this function as inner? line 6-8

function foo() {
  var a = 30;
  console.log(inner(5));  
  // in the above statement; it will directly run line 6-8?
}

foo()








// 3.1 this  =>  1:13    13:53

//Implicit binding
// this context is lost when using inside `setTimeout` ?
