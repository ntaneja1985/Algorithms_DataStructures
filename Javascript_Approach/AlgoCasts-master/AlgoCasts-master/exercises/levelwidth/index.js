// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let arr = [];
    let counters = [0];
    //stopper value to distinguish between levels of the tree
    const stopperValue = 's';

    if(root){
        arr.push(root);
        arr.push(stopperValue);
    }

    while(arr.length> 1){
        const node = arr.shift();
        if(node === stopperValue){
            counters.push(0);
            arr.push(stopperValue);
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }
    return counters;
}

module.exports = levelWidth;
