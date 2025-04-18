class Node {
    constructor(value, next) {
        this.value = value ?? null;
        this.next = next ?? null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.last) {
            this.last.next = newNode;
            this.last = this.last.next;
        }
        else {
            this.last = newNode;
            this.first = newNode;
        }

        this.length++;
    }

    dequeue() {
        if (this.first) {
            this.first = this.first.next;
            this.length--;
        }
    }

    peek() {
        return this.first?.value;
    }
}


let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();
myQueue.dequeue();

let a = 1;