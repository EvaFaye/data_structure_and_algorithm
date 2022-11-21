import { LinearStructure } from './LinearStructure.interface'

export default class Queue<T> implements LinearStructure.AbstractQueue<T> {
  queue = new Array()

  size = () => this.queue.length
  isEmpty = () => !this.queue.length
  dequeue = () => this.queue.shift()
  enqueue = (item: T) => this.queue.push(item)

  toString = () => this.queue.toString()
}
