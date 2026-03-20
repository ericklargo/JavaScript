class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items[this.items.length] = element;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        let elemento = this.items[this.items.length - 1];
        this.items.length = this.items.length - 1;
        return elemento;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Stack;
