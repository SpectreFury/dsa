export class Hashtable {
    constructor(initialCapacity = 7) {
        this.capacity = initialCapacity;
        this.size = 0;
        this.keys = new Array(this.capacity).fill(null);
        this.values = new Array(this.capacity).fill(null);
        this.deleted = new Array(this.capacity).fill(false);
    }

    hash(key) {
        let hash = 5381;
        for(let i = 0; i < key.length; i++) {
            hash = ((hash << 5) + hash) + key.charCodeAt(i)
        }

        return Math.abs(hash) % this.capacity;
    }
}
