// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
// let chunks = [];
// for (let i = 0; i < array.length; i+=size) {
//     let chunk = array.slice(i, i + size);
//     chunks.push(chunk);
// }
// return chunks;
// }

function chunk(array,size) {
    let chunked = [];

        let chunk = [];
        for(let elem of array) {
            if(chunk.length < size) {
                chunk.push(elem);
            }
            else {
                chunked.push(chunk);
                chunk = [];
                chunk.push(elem);
            }
        }
        if(chunk.length > 0){
            chunked.push(chunk);
        }
    return chunked;
}

module.exports = chunk;
