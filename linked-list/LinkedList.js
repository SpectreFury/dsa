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

    size() {
        let size = 0
        let current = this.head;

        while (current) {
            size = size + 1;
            current = current.next;
        }

        return size;
    }

    empty() {
        return this.head ? false : true
    }

    value_at(index) {
        if (index < 0) return null;
        let current = this.head;
        let i = index;
        while (i !== 0) {
            if (!current) {
                return null;
            }

            current = current.next;
            i--;
        }

        return current ? current.value : null
    }

    push_front(value) {
        const node = new Node(value)
        const prevHead = this.head;
        this.head = node;
        this.head.next = prevHead;

        return this.head;
    }

    pop_front() {
        if (!this.head) return null;

        const poppedValue = this.head.value;
        this.head = this.head.next;

        return poppedValue;

    }

    front() {
        if(!this.head) return null;

        return this.head.value;
    }

    back() {
        if(!this.head) return null;

        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        return current.value;
    }

    pop_back() {
        if (!this.head) return null;

        if(!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }

        let prev = null
        let current = this.head;

        while (current.next) {
            prev = current
            current = current.next;
        }

        prev.next = null;
        return current.value;
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
