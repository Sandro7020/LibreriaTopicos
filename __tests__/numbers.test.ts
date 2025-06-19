import { describe } from 'node:test';

import { Stack } from '../src/index';

describe("Stack numbers", () => {
    let stack: Stack<number>;
    beforeEach(() => {
        stack = new Stack<number>();
    })
    
    it("1-Stack Creation", () => {
        expect(stack.isVoid()).toBe(true);
    });

    it("2-Stack Pop()", () => {
        stack.push(10);
        stack.push(5);
        stack.push(2)
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(5);
    });

    it("3-Stack Push()", () => {
        stack.push(121);
        expect(stack.top()).toBe(121);
        expect(stack.pop()).toBe(121);
    });

    it("4-Stack isVoid()", () => {
        stack.push(25);
        expect(stack.isVoid()).toBe(false);
    });

    it("5-Stack top()", () => {
        stack.push(777);
        stack.top();
        expect(stack.pop()).toBe(777);
    });
});