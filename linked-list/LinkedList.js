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

}
