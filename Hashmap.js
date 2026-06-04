import LinkedList from "./LinkedList.js";

export default class Hashmap {
    constructor(capacity = 16) {
        this.capacity = capacity;
        this.loadFactor = 0.75;
        this.size = 0;

        this.buckets = new Array(this.capacity).fill(null);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    } 

    set(key, value) {
        const index = this.hash(key);

        if(this.buckets[index] === null) {
            this.buckets[index] = new LinkedList();
        }

        const bucketList = this.buckets[index];

        const existingNode = bucketList.find(key);
        if(existingNode === null) {
            bucketList.append(key, value);
            this.size++
        } else {
            existingNode.value = value;
        }

        if(this.size > this.capacity * this.loadFactor) {
            this.grow();
        }
    }

    grow(){
        const existingEntries = oldBuckets.entries();

        this.capacity *= 2;
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;

        existingEntries.forEach(entry => {
            this.set(...entry)
        })
    }

    get(key) {
        const index = this.hash(key);
        const bucketList = this.buckets[index];
        if(bucketList === null) return null;
        const node = bucketList.find(key);

        return node ? node.value : null;
    }

    has(key) {
        const index = this.hash(key);
        const bucketList = this.buckets[index];

        if(bucketList === null) return false;
        
        const node = bucketList.find(key);

        return node === null ? false : true;
    }

    remove(key) {
        const index = this.hash(key);
        const bucketList = this.buckets[index];

        if(bucketList === null) return false;

        const wasRemoved = bucketList.remove(key);

        if(bucketList.head === null) {
            this.buckets[index] = null;
        }

        if(wasRemoved) {
            this.size--;
            return true;
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets.fill(null);
        this.size = 0;
    }

    keys() {
        return this.entries().map(entry => entry[0]);
    }

    values() {
        return this.entries().map(entry => entry[1]);
    }

    entries() {
        const entries = [];

        this.buckets.forEach(bucketList => {
            if(bucketList === null) return;

            const bucketListEntries = bucketList.getEntries();
            entries.push(...bucketListEntries);
        })

        return entries;
    }
}