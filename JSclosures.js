/*whats happening here is the variable below is i the global scope
and the function below addFunc is going to perform an addition calculation
I passed in the value of 5 and the addition function doesnt have within its own
function scope a variable with a value, so it will go up a level until it either finds something in the global scope or just return undefined because there's nothing there*/
var coolStuff = "global indeedCoolStuff";
//global variable
var closureInAction = 5;
//object literal with a method and a nested function
var myObject = {
    coolStuff: "indeedCoolStuff",
    aMethod: function addFunc(passedArg){
    //invoked addFunc with a passed that's used by inner function
      var that = this;//'this' has nothing to do with closure scope, more so with how its invoked; in this case, defining this in this object
      function realAdding(){
        console.log(this.coolStuff);//this refers to global object aka window
        console.log(that.coolStuff);//this refers to myObject
      //going up each level until i find closureInAction with a value
        return passedArg + closureInAction;
      }
    return realAdding();
  }
};

//logging output to console
console.log(myObject.aMethod(20));
