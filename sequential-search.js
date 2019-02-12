/*
* sequential or linear search
*/
function sequentialSearch(arr, data) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

/*
* search using indexof method
*/
function sequentialSearch2(arr, data) {
  if(arr.indexOf(data) !== -1) {
    return true;
  } else {
    return false;
  }
}

