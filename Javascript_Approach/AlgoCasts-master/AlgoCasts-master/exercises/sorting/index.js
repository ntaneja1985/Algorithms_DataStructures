// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const results = require("../stack");

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                //get the higher value
                const higherValue = arr[j];
                //move the lower value to the left
                arr[j] = arr[j + 1];
                //move the higher value to the right
                arr[j + 1] = higherValue;
            }
        }
    }
    return arr;
}

//Prove me wrong
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        //set the index of min to the first element in the iteration
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length ; j++) {
            if(arr[j] < arr[indexOfMin]) {
                //Update index of Min as at "j" we have element of lesser value
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i){
            const lesserValue = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesserValue;
        }
    }
    return arr;
}

function mergeSort(arr) {
    //if there is only one element in the array, it is already sorted
    if(arr.length === 1) {
        return arr;
    }

    let midpoint = Math.floor(arr.length / 2);
    //Divide the main array into 2 separate array
    const left = arr.slice(0, midpoint);
    const right = arr.slice(midpoint);

    //Call the mergeSort function recursively to further split the array
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];

    while(left.length && right.length) {
        //compare first elements of the left and right arrays
        if(left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    //if anything is left in the left array, add it to the results array
    if(left.length) {
        result.push(...left);
    }
    //if anything is left in the right array, add it to the results array
    if(right.length) {
        result.push(...right);
    }
    return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
