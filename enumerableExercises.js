Array.prototype.myEach = function(myFunc){
  for (var i = 0; i < this.length; i++){
    myFunc(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(myMapFunc){
  var result = [];
  this.myEach(function(x) { result.push(myMapFunc(x)); } );
  return result;
};

Array.prototype.myInject = function(myInjectFunc, startValue){
  if (typeof(startValue) === 'undefined') startValue = 0;
  this.myEach(function(x) { startValue = myInjectFunc(x, startValue);});
  return startValue;
};
