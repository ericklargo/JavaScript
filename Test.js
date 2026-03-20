const Stack = require('./Stack');

const stack = new Stack();

console.log(stack.isEmpty())

stack.push(2)
stack.push(4)
stack.push(8)

console.log(stack.isEmpty())

console.log(stack.peek())

console.log(stack.pop())

console.log(stack.peek())