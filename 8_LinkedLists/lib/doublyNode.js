class DoublyNode {
    constructor(value, prev, next) {
        this.value = value ?? null;
        this.prev = prev ?? null;
        this.next = next ?? null;
    }
}

module.exports = {
    DoublyNode
};