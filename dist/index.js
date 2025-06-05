export class Stack {
    constructor() {
        this.arr = [];
    }
    push(value) {
        this.arr.push(value);
    }
    pop() {
        return this.arr.pop();
    }
    top() {
        if (this.arr.length)
            return this.arr[this.arr.length - 1];
    }
    isVoid() {
        return this.arr.length === 0;
    }
}
//# sourceMappingURL=index.js.map