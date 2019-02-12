function binarySearch (arr, data) {

    // sort array first
    arr = arr.filter( (a, b) => {
        return a - b
    });

    console.log(arr);

    // define bounds
    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        if (arr[mid] < data) {
            start = mid + 1;
        } else if (arr[mid] > data) {
            end = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}

/*
* helper function to sort array
*/
function sortArr(arr) {
    return arr.filter( (a,b) => {
        return a - b
    });
}