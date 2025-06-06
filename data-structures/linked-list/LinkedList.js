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

    insert(index, value) {
        if (index < 0) return null;

        const node = new Node(value);

        if (index === 0) {
            node.next = this.head;
            this.head = node;
            return node;
        }


        let prev = null;
        let current = this.head;

        for (let i = index; i !== 0; i--) {
            if(!current) return null;
            prev = current;
            current = current.next;
        }

        // PREV -> CURRENT.NEXT
        prev.next = node;
        node.next = current;

        return node;
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
        if (!this.head) return null;

        return this.head.value;
    }

    back() {
        if (!this.head) return null;

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current.value;
    }

    pop_back() {
        if (!this.head) return null;

        if (!this.head.next) {
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

    print() {
        const values = [];

        let current = this.head;

        while(current.next) {
            values.push(current.value)
            current = current.next;
        }

        return values;
    } 

    reverse() {
        let prev = null;
        let current = this.head;

        while(current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        return this.head;
    }

    remove_value(value) {
        if(!this.head) return null;
        
        if(this.head.value === value) {
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }

        let prev = null;
        let current = this.head;

        while(current) {
            if(current.value === value) {
                prev.next = current.next;
                current.next = null;

                return current;
            }

            prev = current;
            current = current.next;
        }

        // Not found
        return null
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
