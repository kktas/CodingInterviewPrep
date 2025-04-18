class Node {
    constructor(value, next) {
        this.value = value ?? null;
        this.next = next ?? null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top?.value;
    }

    push(value) {
        if (!this.bottom) {
            this.bottom = new Node(value);
            this.top = this.bottom;
        }
        else {
            this.top = new Node(value, this.top);
        }
        this.length++
        return this.length;
    }

    pop() {
        if (this.bottom) {
            this.top = this.top.next;

            this.length--;
            return this.length;
        }

        throw new Error("This stack has no items in it!!!");
    }

}

let myStack = new Stack();

console.log(myStack.push(3));
console.log(myStack.push(2));
console.log(myStack.push(1));

let a = 1;

console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());


let b = 1;