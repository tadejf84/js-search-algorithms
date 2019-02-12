/*
* binary search for sorted array
* select a midpoint in the array and compare with the data your are searching for
* if larger move to the right half of the array, else to the left half
* continue until finding the match
* complexity of the algorithm - O(log n)
*/
function binarySearch (arr, data) {

    // sort array first
    arr.sort((a, b) => a - b);

    // define bounds
    let start = 0, end = arr.length - 1;

    while (start <= end) {
			
				// set midpoint
        const mid = Math.floor((end + start) / 2);
			
        if (arr[mid] < data) {
            start = mid + 1;
        } else if (arr[mid] > data) {
            end = mid - 1;
        } else {
            return mid;
        }
			
    }
    return -1;
}


/*
* count occurences of the data
*/
function binCount(arr, data) {	
	let count = 0;
	
	// get position of data
	const pos = binarySearch(arr, data);
	
	// if data is found continue, else return 0
	if (pos !== -1) {
		count++;
		
		// search to the left for occurences of data
		for (let i = pos - 1; i >= 0; --i) {
			if (arr[i] === data) {
				count++;
			} else {
				break;
			}
		}
		
		// search to the right for occurences of data
		for (let i = pos + 1; i < arr.length; ++i) {
			if (arr[i] === data) {
				count++;
			} else {
				break;
			}
		}
	}

	return count;
}
