/**
 * Sequential or linear search algorithm
 * 
 * @param {array} arr 
 * @param {number} data 
 * 
 * @returns {boolean} found in search
 */
function sequentialSearch(arr, data) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

