// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next) {
        this.data = data;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertFirst(data) {
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            this.head = newNode;
            this.head.next = current;
        }
        this.length++;
    }

    getFirst() {
        return this.head;
    }

    getLast() {

        if(!this.head){
            return null;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }

    clear(){
        this.head = null;
        this.length = 0;
    }

    insertLast(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
        } else{
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    insertAt(data,index){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }

        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let currentNode = this.getAt(index);
        if(!currentNode){
            let lastNode = this.getLast();
            lastNode.next = newNode;
            return;
        }

        let prevNode = this.head;
        while(prevNode.next !== currentNode){
            prevNode = prevNode.next;
        }
        prevNode.next = newNode;
        newNode.next = currentNode;
    }

    size() {
        //return this.length;
        let counter = 0;
        let current = this.head;
        while(current){
            current = current.next;
            counter++;
        }
        return counter;
    }

    removeFirst(){
        if(this.head.next) {
            this.head = this.head.next;
            this.length--;
        }
        else {
            this.head = null;
            this.length = 0;
        }
    }

    getAt(index) {
        if(index === 0) {
            return this.head;
        }
        if(!this.head){
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            if(current.next){
                current = current.next;
            } else {
                return null;
            }
            counter++;
        }
        return current;
    }

    removeAt(index){
        if(!this.head){
            return;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let currentNode = this.getAt(index);
        if(!currentNode){
            return;
        }

        let prevNode = this.head;
        while(prevNode.next !== currentNode ){
            prevNode = prevNode.next;
        }
        prevNode.next = currentNode.next;
    }

    removeLast(){
        if(!this.head)
        {
            return;
        }

        let lastNode = this.getLast();
        let currentNode = this.head;

        //There is only element in the list
        if(!currentNode.next){
            this.head = null;
            this.length = 0;
            return;
        }

        //keep checking till you reach the second last node
        while(currentNode.next !== lastNode){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.length--;
    }

    //using generators to create for..of loop

    *[Symbol.iterator]() {
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }

    forEach(callback){
        for(const data of this)
        {
            callback(data);
        }
    }
}

module.exports = { Node, LinkedList };
