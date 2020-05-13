/**
 * Binary search for sorted array
 * Select a midpoint in the array and compare with the input data, 
 * If larger move to the right half of the array, else to the left half
 * Continue until finding the match
 * 
 * @param {array} arr 
 * @param {number} data 
 * 
 * @returns {number} position of data in array (-1 if not found)
 */
function binarySearch(arr, data) {

    // Sort array first
    arr.sort((a, b) => a - b);

    // Define bounds
    let start = 0, end = arr.length - 1;

    while (start <= end) {
			
		// Set midpoint
        const mid = Math.floor((end + start) / 2);
			
        if (arr[mid] < data) {
            start = mid + 1;
        } else if (arr[mid] > data) {
            end = mid - 1;
        } else {
            return mid; // Found position
		}
		
	}
	
    return -1; // Not found
}


/**
 * Count occurences of the data
 * 
 * @param {array} arr 
 * @param {number} data 
 * 
 * @returns {number} count occurences
 */
function binaryCount(arr, data) {	
	let count = 0;
	
	// Get position of data
	const pos = binarySearch(arr, data);
	
	if (pos !== -1) {
		count++;
		
		// Search to the left for occurences of data
		for (let i = pos - 1; i >= 0; --i) {
			if (arr[i] === data) count++;
		}
		
		// Search to the right for occurences of data
		for (let i = pos + 1; i < arr.length; ++i) {
			if (arr[i] === data) count++;
		}
	}

	return count;
}
