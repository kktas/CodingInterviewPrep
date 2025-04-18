const { DoublyNode } = require(`./doublyNode`);

class DoublyLinkedList {
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
            this.head = new DoublyNode(value);
            this.tail = this.head;
        }
        else {
            this.tail.next = new DoublyNode(value, this.tail);
            this.tail = this.tail.next;
        }
        this.length++;
        return this.length;
    }

    prepend(value) {
        this.head = new DoublyNode(value, null, this.head);
        this.length++
        return this.length;
    }

    print() {
        const arr = new Array(this.length);
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            arr[i] = current.value;
            current = current.next;
        }
        console.log(arr);
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw (new Error('Provided index is invalid!!'))
        }

        if (index === 0) {
            this.prepend(value);
        }
        else {
            let head = this.getIndex(index - 1);
            let tail = head.next;

            let newNode = new DoublyNode(value, head, tail);
            head.next = newNode;
            if (tail) tail.prev = newNode;
            this.length++;
        }
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) {
            throw new Error('Provided index is invalid!!');
        }

        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else {
            let head = this.getIndex(index - 1);
            head.next = head.next.next;
            if (head.next) head.next.prev = head
        }

        this.length--;
    }

    getIndex(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) { current = current.next; }
        return current;
    }

    reverse() {
        let tail = null;
        this.tail = this.head;

        while (this.head !== null) {
            let tailHead = this.head;
            this.head = this.head.next;

            tailHead.next = tail;
            tailHead.prev = null;

            if (tail) tail.prev = tailHead;
            tail = tailHead;
        }

        this.head = tail;
    }
}

module.exports = {
    DoublyLinkedList
}
