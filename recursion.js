var myRange = function(start, end){
  var result = [start];
  if (start > end) {
    return [];
  } else if (start === end) {
    return [start];
  } else {
    return result.concat(myRange(start + 1, end));
  }
};

var fibonacci = function(n){
  var result = [];
  if (n === 0) {
    return [];
  }
  else if (n === 1) {
    return [0];
  }
  else if (n === 2 ) {
    return [0, 1];
  } else {
    result = fibonacci(n-1);
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
};

var bsearch = function(num, arr) {
  var middle = Math.floor(arr.length / 2);
  if (arr.length < 2 && num !== arr[0]) return null;
  var idx = 0;
  if (arr[middle] === num) {
    return middle;
  } else if (num < arr[middle]) {
    return bsearch(num, arr.slice(0, middle));
  } else {
    idx = bsearch(num, arr.slice(middle, arr.length) );
    if (idx){
      return middle + idx;
    } else {
      return null;
    }
  }
};

var makeChange = function(value, coins){
  var coinsArr = [];
  if (value === 0) return [];

  if (value >= coins[0]) {
    while (value >= coins[0]){
      coinsArr.push(coins[0]);
      value -= coins[0];
    }
    coins.shift();
    coinsArr = coinsArr.concat(makeChange(value, coins));
  } else {
    coins.shift();
    coinsArr = coinsArr.concat(makeChange(value, coins));
  }
  return coinsArr;
};

var mergeSort = function(ary){
  if (ary.length < 2) return ary;

  var leftSide = ary.slice(0, Math.floor(ary.length / 2));
  var rightSide = ary.slice(Math.floor(ary.length / 2), ary.length - 1);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

var merge = function(left, right){
  var mergeResult = [];


  while (left.length !== 0 && right.length !== 0){
    if (left[0] > right[0]) {
      mergeResult.push(right.shift());
    } else if (left[0] === right[0]){
      mergeResult.push(right.shift());
      mergeResult.push(left.shift());
    } else {
      mergeResult.push(left.shift());
    }
  }
  mergeResult.concat(left);
  mergeResult.concat(right);
  return mergeResult;
};
