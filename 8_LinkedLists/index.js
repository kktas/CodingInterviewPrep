const { LinkedList } = require(`./lib/linkedList`)
const { DoublyLinkedList } = require(`./lib/doublyLinkedList`);

let linkedList = new LinkedList([2, 3, 5, 6, 7, 8]);
// linkedList.print();
// linkedList.append(9);
// linkedList.print();
// linkedList.prepend(1);
// linkedList.print();
// linkedList.insert(3, 4);
// linkedList.print();
// linkedList.insert(0, 0);
// linkedList.print();
// linkedList.insert(10, 10);
// linkedList.print();
// linkedList.remove(0);
// linkedList.print();
// linkedList.remove(9);
// linkedList.print();
// linkedList.remove(1);
// linkedList.print();
linkedList.reverse()
linkedList.print();

let doublyLinkedList = new DoublyLinkedList([2, 3, 5, 6, 7, 8]);
doublyLinkedList.print();
doublyLinkedList.append(9);
doublyLinkedList.print();
doublyLinkedList.prepend(1);
doublyLinkedList.print();
doublyLinkedList.insert(3, 4);
doublyLinkedList.print();
doublyLinkedList.insert(0, 0);
doublyLinkedList.print();
doublyLinkedList.insert(10, 10);
doublyLinkedList.print();
doublyLinkedList.remove(0);
doublyLinkedList.print();
doublyLinkedList.remove(9);
doublyLinkedList.print();
doublyLinkedList.remove(1);
doublyLinkedList.print();
doublyLinkedList.reverse()
doublyLinkedList.print();
let a = 1;