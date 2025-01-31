class Node {
    constructor(value, next) {
        this.value = value ?? null;
        this.next = next ?? null;
    }
}

class LinkedList {
    constructor(arr) {
        this.head = null;
        this.tail = this.head;
        this.length = 0;

        if (!arr || !arr.length) return this;

        for (let i = 0; i < arr.length; i++) {
            this.append(arr[i])
        }
        return this;
    }

    append(value) {
        if (this.length == 0) {
            this.head = new Node(value);
            this.tail = this.head;
        }
        else {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        }
        this.length++;
        return this.length;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.length++
        return this.length;
    }
}

let linkedList = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let json = JSON.stringify(linkedList);

console.log(json)