import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.head = undefined;
        this.size = 0;
    }

    append(key, value) {
        const node = new Node(key, value);

        if(!this.head) {
            this.head = node;
            this.size++;
            return
        }

        let current = this.head;
        while(current.nextNode) {
            current = current.nextNode;
        }

        current.nextNode = node;
        this.size++;
    }

    getSize() {
        return this.size;
    }

    find(key) {
        let current = this.head;

        while(current) {
            if(current.key === key) return current;

            current = current.nextNode;
        }

        return null;
    }

    getKeys() {
        let current = this.head;
        const keys = [];

        while(current) {
            keys.push(current.key);
            current = current.nextNode;
        }

        return keys;
    }

    toString() {
        if(!this.head) return "";

        let current = this.head;
        let result = "";

        while(current) {
            result += `( ${current.key} ) -> `;
            current = current.nextNode;
        }

        result += 'null';
        return result;
    }

    remove(key) {
        if(this.head.key === key) {
            this.head = this.head.nextNode;
            this.size--;
            return true;
        }

        let current = this.head;
        let prev = null;

        for(let i = 0; i <= this.size; i++) {
            if(current.key === key) {
                prev.nextNode = current.nextNode;
                this.size--;
                return true;
            }

            prev = current;
            current = current.nextNode;
        }
        return false;
    }
}