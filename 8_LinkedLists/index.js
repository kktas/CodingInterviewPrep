class Node {
    constructor(value, next) {
        this.value = value ?? null;
        this.next = next ?? null;
    }
}

class LinkedList {
    constructor(arr) {
        if (!arr || !arr.length) {
            this.head = null;
            this.tail = this.head;
            this.length = 0;
        }
        else {
            this.head = new Node(arr[0])
            this.tail = this.head;
            this.length = 1;

            for (let i = 1; i < arr.length; i++) {
                this.tail.next = new Node(arr[i]);
                this.tail = this.tail.next;
                this.length++;
            }
        }

        return this;
    }
}

let linkedList = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let json = JSON.stringify(linkedList);

console.log(json)