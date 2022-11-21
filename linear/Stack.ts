import { LinearStructure } from './LinearStructure.interface'

export default class Stack<T> implements LinearStructure.AbstractStack<T> {
  constructor() {}
  stack = new Array()

  isEmpty() {
    return !this.stack.length
  }
  push(item: T) {
    this.stack.push(item)
  }
  pop() {
    return this.stack.pop()
  }
  peek() {
    return this.stack[this.stack.length - 1]
  }
  size() {
    return this.stack.length
  }
}

//#region test

//#endregion
