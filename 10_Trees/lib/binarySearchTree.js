class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return value;
        }

        let current = this.root;
        while (true) {
            if (current.value > value) {
                if (current.left == null) {
                    current.left = new Node(value);
                    return value;
                }
                current = current.left;
            }
            else if (current.value < value) {
                if (current.right == null) {
                    current.right = new Node(value);
                    return value;
                }
                current = current.right;
            }
            else {
                console.error("this value already exists!");
                return;
            }
        }


    }

    lookup(value) {
        let current = this.root;

        while (current != null) {
            if (value > current.value) {
                current = current.right;
            }
            else if (value < current.value) {
                current = current.left;
            }
            else {
                console.info(current);
                return current;
            }
        }

        console.error("value not found!")
        return false;
    }

    remove(value) {
        if (!this.root) return;

        let lookup = null;
        let lookupParent = null;
        let current = null;
        let currentParent = null;
        let currentChild = null;

        lookup = this.root;

        while (true) {
            if (!lookup) throw new Error("value not found!");

            if (value > lookup.value) {
                lookupParent = lookup;
                lookup = lookup.right;
            }
            else if (value < lookup.value) {
                lookupParent = lookup;
                lookup = lookup.left;
            }
            else {
                break;
            }
        }

        if (lookup.right) {
            currentParent = lookup;
            current = lookup.right;

            while (current.left) {
                currentParent = current;
                current = current.left;
            }

            currentChild = current.right;

            current.left = lookup.left;
            current.right = lookup.right;

            if (lookupParent.value > current.value) {
                lookupParent.left = current;
            }
            else {
                lookupParent.right = current;
            }

            currentParent.left = currentChild;
        }
        else if (lookup.left) {
            currentParent = lookup;
            current = lookup.left;

            while (current.right) {
                currentParent = current;
                current = current.right;
            }

            currentChild = current.left;

            current.right = lookup.right;
            current.left = lookup.left;

            if (lookupParent.value > current.value) {
                lookupParent.left = current;
            }
            else {
                lookupParent.right = current;
            }

            currentParent.right = currentChild;
        }
        else {
            if (lookupParent.value > lookup.value) {
                lookupParent.left = null;
            }
            else {
                lookupParent.right = null;
            }
        }


    }
}


module.exports = {
    BinarySearchTree,
    Node,
}