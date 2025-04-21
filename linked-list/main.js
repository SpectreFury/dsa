class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value = null) {
        this.head = value
    }


}

const a = new Node(10)
const b = new Node(20)
const c = new Node(30)
const d = new Node(40)
a.next = b
b.next = c
c.next = d

const linkedlist = new LinkedList(a);

const printValues = (head) => {
    let current = head;
    let values = [];

    while (current) {
        values.push(current.value)
        current = current.next
    }

    return values;

}

const sumValues = (head) => {
    let current = head;
    let sum = 0;

    while (current) {
        sum = sum + current.value;
        current = current.next
    }

    return sum
}

const findValue = (head, value) => {
    let current = head

    while (current) {
        if (current.value === value) return true

        current = current.next;

    }

    return false;
}

const getNodeValue = (head, index) => {
    let current = head;
    let count = 0;

    while (current) {
        if (count === index) return current.value;
        current = current.next;
        count += 1;
    }

    return null;
}

const reverseList = (head) => {
    let prev = null
    let current = head

    while (current) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

console.log(printValues(linkedlist.head))
console.log(sumValues(linkedlist.head))
console.log(findValue(linkedlist.head, 100))
console.log(getNodeValue(linkedlist.head, 0))
console.log(reverseList(linkedlist.head))

