// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }
    remove(data){
        const node = new Node(data);
        const index = this.children.findIndex(x=>x.data === node.data);
        this.children.splice(index, 1);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let arr = [];
        if(this.root){
            arr.push(this.root);
        }
        while (arr.length) {
            const node = arr.shift();
            //Add children to the end of the array
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        let arr = [];
        if(this.root){
            arr.push(this.root);
        }
        while (arr.length) {
            const node = arr.shift();
            //Add children to the start of the array
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

// const letters = [];
// const t = new Tree();
// t.root = new Node('a');
// t.root.add('b');
// t.root.add('d');
// t.root.children[0].add('c');
//
// t.traverseDF(node => {
//     letters.push(node.data);
// });

//
module.exports = { Tree, Node };
