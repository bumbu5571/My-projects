// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);

function myForEach(arr, cb) {
  for (let el of arr) {
    console.log(cb(el));
  }
}

myForEach(array, (el) => el + "s");

function myMap(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callBack(arr[i]);
  }
  return arr;
}

function myFilter(array, callBack) {
  let result = [];
  for (let el of array) {
    if (callBack(el)) {
      result.push(el);
    }
  }
  return result;
}

function myFind(arr, callBack) {
  let result;

  for (let el of array) {
    if (callBack(el)) {
      result = el;
      break;
    }
  }

  return result;
}

function myEvery(arr, callBack) {
  if (arr.length === 0) return true;
  let result;

  for (let el of array) {
    if (callBack(el)) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

function mySome(arr, callBack) {
  let result = false;

  for (let el of array) {
    if (callBack(el)) {
      result = true;
      break;
    }
  }

  return result;
}

function myReduce(arr, callBack, acc) {
  let result = acc;

  for (let i = 0; i < arr.length; i++) {
    result += callBack(arr[i]);
  }

  return result;
}
