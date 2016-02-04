Array.prototype.myBubbleSort = function() {
  var unsorted = true;
  while (unsorted){
    unsorted = false;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        var movingVal = this[i];
        this[i] = this[i + 1];
        this[i + 1] = movingVal;
        unsorted = true;
      }
    }
  }
  return this;
};

String.prototype.subStrings = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      result.push(this.slice(i,j));
    }
  }
  return result;
};
