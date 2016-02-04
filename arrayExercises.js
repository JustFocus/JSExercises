"use strict";

Array.prototype.myUniq = function(){
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (!result.includes(this[i])){
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myUniq = function(){
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (!result.indexOf(this[i])){
      result.push(this[i]);
    }
  }
  return result;
};

//
Array.prototype.twoSum = function() {
  var result = [];
  for (var i = 0; i < this.length - 1; i++){
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0){
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.myTranspose = function() {
  var result =[];
  for (var i = 0; i < this.length; i++){
    var subResult = [];
    for (var j = 0; j < this[i].length; j++){
      subResult.push(this[j][i]);
    }
    result.push(subResult);
  }
  return result;
};
