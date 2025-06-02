export class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {
    constructor(value = null) {
        this.head = value
    }

    push_back(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
        return value;

    }
}
