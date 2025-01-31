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

            let newNode = new Node(value, tail);
            head.next = newNode;
            this.length++;
        }
    }

    getIndex(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) { current = current.next; }
        return current;
    }
}

let linkedList = new LinkedList([2, 3, 5, 6, 7, 8]);
linkedList.print();
linkedList.append(9);
linkedList.print();
linkedList.prepend(1);
linkedList.print();
linkedList.insert(3, 4);
linkedList.print();
linkedList.insert(0, 0);
linkedList.print();
linkedList.insert(10, 10);
linkedList.print();